//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const ReservaModelo = require('../models/ReservaModelo.js')


//1. Funcion para insertar datos
async function insertarReserva(datos) {

    let nuevaReserva = new ReservaModelo(datos)
    return await nuevaReserva.save()

}

//2. Funcion para buscar reserva
async function leerReserva(id) {

    let buscarReserva = await ReservaModelo.findById(id)
    return buscarReserva

}

//3. Funcion para buscar TODAS las reservas
async function leerReservas() {

    let buscarReservas = await ReservaModelo.find()
    return buscarReservas

}

//4. Funcion para eliminar una reserva
async function borrarReserva(id) {

    return await ReservaModelo.findByIdAndDelete(id)

}

//5. Funcion para editar una reserva
async function modificarReserva(id, datos) {

    return await ReservaModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarReserva,
    leerReserva,
    leerReservas,
    borrarReserva,
    modificarReserva

}