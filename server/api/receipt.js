const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const ReceiptService = require("../services/receipt");
const multer = require("multer");
const path = require("path");
const { Receipt } = require("../db");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
const upload = multer({ storage: storage });

module.exports = router;

/**
 * req.params === Mongo Business._id
 * this field is a BlueHat internal ID
 */
router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    /**
     * step 1 consume image and send to s3
     * step 2 convert image to multipart form-data
     * step 3 upload to buter ai
     * step 4 consume response
     */
    const uploadId = await ReceiptService.upload(req.file);
    // await ReceiptService.S3Upload
    console.log("inside controller", uploadId);
    await ReceiptService.create(uploadId);
    return res.json({ ok: true });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
