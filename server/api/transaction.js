const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const ReceiptService = require("../services/receipt");
const multer = require("multer");
const upload = multer({ dest: "uploads/receipts" });

module.exports = router;

/**
 * req.params === Mongo Business._id
 * this field is a BlueHat internal ID
 */
router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    console.log("req.file", req.file);
    /**
     * step 1 consume image and send to s3
     * step 2 convert image to multipart form-data
     * step 3 upload to buter ai
     * step 4 consume response
     */

    await ReceiptService.upload(req.file);
    return res.json({ ok: true });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
