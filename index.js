const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

const alumnoRoutes = require('./routes/alumno.js')
app.use(express.json())
app.use('/', alumnoRoutes)




app.listen(port, () => {
    console.log("Conectado al puerto " + port)
})