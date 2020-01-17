'use strict'

const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')


/* SERVER & PARAMETERS */

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
/* SECURITY */
app.use(helmet())

/* LOGGING */
app.use(morgan('combined'))

/* CORS */


/* MISCELLANEOUS */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': true}))

/* ROUTES */
const myroutes = require("./routes")

// Routers

app.use('/api', myroutes)


module.exports = {app}