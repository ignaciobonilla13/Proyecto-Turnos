// backend/server.js

require('dotenv').config(); // Importar configuración de variables de entorno
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const appointmentRouter = require('./routes/appointments'); // Importar las rutas de los turnos médicos

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Conexión a la base de datos establecida correctamente');
});

// Rutas de la API
app.use('/appointments', appointmentRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
