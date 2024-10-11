const express = require('express')
const {changePasswordController, searchLocationController, searchCenterController, bookAppointmentController, appointmentListController, deleteAppointmentController} = require('../controllers/donorController')

const router = express.Router()

router.post('/change-password', changePasswordController)
router.get('/search-location',searchLocationController)
router.get('/search-center',searchCenterController)
router.post('/book-appointment',bookAppointmentController)
router.get('/get-appointment-list',appointmentListController)
router.delete('/delete-appointment',deleteAppointmentController)

module.exports = router;