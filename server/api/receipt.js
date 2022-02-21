const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const ReceiptService = require("../services/receipt");
const multer = require("multer");
const path = require("path");
const { Receipt } = require("../db");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});
const upload = multer({ storage });

module.exports = router;

/**
 * req.params === Mongo Business._id
 * this field is a BlueHat internal ID
 */
router.post(
  "/upload/:transaction",
  upload.single("file"),
  async (req, res, next) => {
    try {
      /**
       * step 1 consume image and send to s3
       * step 2 convert image to multipart form-data
       * step 3 upload to buter ai
       * step 4 consume response
       */

      console.log("req.params", req.params.transaction);
      const s3ReceiptUrl = await ReceiptService.uploadToS3(req.file);
      const butlerUploadId = await ReceiptService.uploadToButler(req.file);
      await ReceiptService.create(
        butlerUploadId,
        s3ReceiptUrl,
        req.params.transaction
      );
      return res.json({ ok: true });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ error });
    }
  }
);
