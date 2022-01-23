const { default: Axios } = require("axios");
const { Receipt } = require("../db");

const extractReceiptData = async () => {
  try {
    const receipts = await Receipt.find({ extracted: false });
    const authHeaders = {
      Authorization: `Bearer ${process.env.BUTLER_LABS_API_KEY}`,
    };
    await Promise.all(
      receipts.map(async (receipt) => {
        const { data } = await Axios.get(
          `https://app.butlerlabs.ai/api/queues/${process.env.BUTLER_LABS_QUEUE_ID}/extraction_results?uploadId=${receipt.butlerLabsUploadId}`,
          { headers: authHeaders }
        );
        const formFields = data.items[0].formFields;
        let tax = "";
        let total = "";
        formFields.forEach((field) => {
          if (field.fieldName === "Tax") {
            const noSpace = field.value.replace(/\s/g, "");
            tax = noSpace;
          }

          if (field.fieldName === "Total") {
            const noSpace = field.value.replace(/\s/g, "");
            total = noSpace;
          }
        });

        let items = [];
        const rows = data.items[0].tables[0].rows;
        rows.forEach((row) => {
          let item = {};
          row.cells.forEach((cell, idx) => {
            // console.log(`cell -${idx}`, cell);
            if (cell.columnName === "Item Name") {
              item.name = cell.value;
              item.nameConfidence = cell.confidenceScore;
            }
            if (cell.columnName === "Total Price") {
              /**
               * Receipts were returning numbers with spaces
               * REGEX removes any spaces from a string
               */
              const noSpace = cell.value.replace(/\s/g, "");
              item.cost = noSpace;
              item.costConfidence = cell.confidenceScore;
            }
          });
          items.push(item);
        });

        receipt.tax = tax;
        receipt.total = total;
        if (items.length) {
          receipt.items = items;
          receipt.extracted = true;
          await receipt.save();
        }
      })
    );
  } catch (error) {}
};

module.exports = { extractReceiptData };
