const express = require('express')
const cors = require('cors')

//IMPORTAR LA FUNCION PARA CONECTARME CON LA BD
const { conectarBD } = require('../database/conexion.js')

const rutas = require('../routes/rutas.js')

class ServidorModelo {

    constructor() {

        this.app = express();
        this.despertarBD();
        this.llamarAuxiliares();
        this.enrutarPeticiones();
        this.crearMiddlewares();

    }

    crearMiddlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
    }

    despertarServidor() {

        this.app.listen(process.env.PUERTO, function () {
            console.log("servidor encendido " + process.env.PUERTO)
        })

    }

    enrutarPeticiones() {

        this.app.use("/", rutas);

    }

    despertarBD() {

        conectarBD()

    }

    llamarAuxiliares() {

        this.app.use(express.json())

    }

}

module.exports = ServidorModelo