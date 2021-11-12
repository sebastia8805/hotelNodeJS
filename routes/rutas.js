const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const { registrarReserva } = require('../controllers/controlador.js')
const { buscarReserva } = require('../controllers/controlador.js')
const { buscarReservas } = require('../controllers/controlador.js')
const { editarReserva } = require('../controllers/controlador.js')
const { eliminarReserva } = require('../controllers/controlador.js')

const { registrarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { buscarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { buscarHabitaciones } = require('../controllers/controladorHabitaciones.js')
const { editarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { eliminarHabitacion } = require('../controllers/controladorHabitaciones.js')



rutas.get('/hotel/v1/reservas', buscarReservas)
rutas.get('/hotel/v1/reservas/:id', buscarReserva)
rutas.post('/hotel/v1/reservas', registrarReserva)
rutas.put('/hotel/v1/reservas/:id', editarReserva)
rutas.delete('/hotel/v1/reservas/:id', eliminarReserva)

rutas.get('/hotel/v1/habitaciones', buscarHabitaciones)
rutas.get('/hotel/v1/habitaciones/:id', buscarHabitacion)
rutas.post('/hotel/v1/habitaciones', registrarHabitacion)
rutas.put('/hotel/v1/habitaciones/:id', editarHabitacion)
rutas.delete('/hotel/v1/habitaciones/:id', eliminarHabitacion)

module.exports = rutas