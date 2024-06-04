// backend/controllers/appointmentController.js

const Appointment = require('../models/Appointment');

// Obtener todos los turnos médicos
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los turnos médicos.' });
  }
};

// Agregar un nuevo turno médico
const addAppointment = async (req, res) => {
  const { name, date, time } = req.body;
  const newAppointment = new Appointment({ name, date, time });

  try {
    await newAppointment.save();
    res.json({ message: 'Turno médico agregado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el turno médico.' });
  }
};

module.exports = { getAppointments, addAppointment };
