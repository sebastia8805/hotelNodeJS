//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

//IMPORTACIONES
const { request, response } = require('express')

const { insertarHabitacion } = require('../services/servicioHabitaciones.js')
const { leerHabitacion } = require('../services/servicioHabitaciones.js')
const { leerHabitaciones } = require('../services/servicioHabitaciones.js')
const { borrarHabitacion } = require('../services/servicioHabitaciones.js')
const { modificarHabitacion } = require('../services/servicioHabitaciones.js')



//crear una funcion para cada operacion del servidor
async function registrarHabitacion(peticion = request, respuesta = response) {

    try {

        let datosPeticion = peticion.body

        await insertarHabitacion(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito registrando la habitacion"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }


}

async function buscarHabitacion(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        let habitacion = await leerHabitacion(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: habitacion
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function buscarHabitaciones(peticion = request, respuesta = response) {

    try {

        let Habitaciones = await leerHabitaciones()

        respuesta.status(200).json({
            estado: true,
            mensaje: Habitaciones
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function editarHabitacion(peticion = request, respuesta = response) {


    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarHabitacion(id, datosPeticion)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito editando la habitacion"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function eliminarHabitacion(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        await borrarHabitacion(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito al borrar la habitacion"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }



}

module.exports = {

    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion

}