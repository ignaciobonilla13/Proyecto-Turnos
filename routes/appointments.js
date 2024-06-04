// backend/routes/appointments.js

const express = require('express');
const router = express.Router();
const { getAppointments, addAppointment } = require('../controllers/appointmentController');

// Ruta para obtener todos los turnos médicos
router.get('/', getAppointments);

// Ruta para agregar un nuevo turno médico
router.post('/add', addAppointment);

module.exports = router;
