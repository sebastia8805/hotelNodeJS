//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

//IMPORTACIONES
const { request, response } = require('express')

const { insertarReserva } = require('../services/servicio.js')
const { leerReserva } = require('../services/servicio.js')
const { leerReservas } = require('../services/servicio.js')
const { borrarReserva } = require('../services/servicio.js')
const { modificarReserva } = require('../services/servicio.js')



//crear una funcion para cada operacion del servidor
async function registrarReserva(peticion = request, respuesta = response) {

    try {

        let datosPeticion = peticion.body

        await insertarReserva(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito registrando la reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }


}

async function buscarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        let reserva = await leerReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: reserva
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function buscarReservas(peticion = request, respuesta = response) {

    try {

        let reservas = await leerReservas()

        respuesta.status(200).json({
            estado: true,
            mensaje: reservas
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function editarReserva(peticion = request, respuesta = response) {


    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarReserva(id, datosPeticion)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito editando la reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function eliminarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        await borrarReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito al borrar la reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }



}

module.exports = {

    registrarReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva

}

