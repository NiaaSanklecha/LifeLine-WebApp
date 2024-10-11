const express = require('express');
const { sendRequestController, getRequestsController, deleteRequestController } = require('../controllers/consumerController');
const router = express.Router()

router.post("/request-blood",sendRequestController)
router.get("/requests", getRequestsController)
router.delete("/delete-request",deleteRequestController)

module.exports = router;