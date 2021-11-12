//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const HabitacionModelo = require('../models/HabitacionModelo.js')


//1. Funcion para insertar datos
async function insertarHabitacion(datos) {

    let nuevaHabitacion = new HabitacionModelo(datos)
    return await nuevaHabitacion.save()

}

//2. Funcion para buscar habitacion
async function leerHabitacion(id) {

    let buscarHabitacion = await HabitacionModelo.findById(id)
    return buscarHabitacion

}

//3. Funcion para buscar TODAS las habitaciones
async function leerHabitaciones() {

    let buscarHabitaciones = await HabitacionModelo.find()
    return buscarHabitaciones

}

//4. Funcion para eliminar una habitacion
async function borrarHabitacion(id) {

    return await HabitacionModelo.findByIdAndDelete(id)

}

//5. Funcion para editar una habitacion
async function modificarHabitacion(id, datos) {

    return await HabitacionModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarHabitacion,
    leerHabitacion,
    leerHabitaciones,
    borrarHabitacion,
    modificarHabitacion

}