const express = require("express");
const {
  createStaticQRCode,
  createDynamicQRCode,
  updateDynamicQRCode,
  trackQRCodeEvent,
  getQRCodeEvents,
} = require("../controllers/qrController");
const { authenticate } = require("../middleware/auth");
const router = express.Router();

router.post("/static", authenticate, createStaticQRCode);
router.post("/dynamic", authenticate, createDynamicQRCode);
router.put("/:id", authenticate, updateDynamicQRCode);
router.post("/:id/track", trackQRCodeEvent);
router.get("/:id/events", authenticate, getQRCodeEvents);

module.exports = router;
