//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const ReservaModelo = Schema({

    nombreCliente: {
        type: String,
        required: true
    },

    apellidoCliente: {
        type: String,
        required: true
    },

    telefonoCliente: {
        type: String,
        required: true
    },

    fechaInicio: {
        type: String,
        required: true
    },

    fechaFin: {
        type: String,
        required: true
    },

    numeroPersonas: {
        type: String,
        require: true
    }

})

module.exports = model('Reservas', ReservaModelo)