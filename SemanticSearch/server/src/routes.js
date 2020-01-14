'use strict'
const xmlToJson = require('xml-to-json-stream');
const express = require('express')
const $rdf = require('rdflib');
const router = express.Router()

const methods = require('./methods')


router.get('/', async (req, res) => {
    console.log("ricevuta")
    res.send({
        success: true,
        data: 'works correctly'
    })
})

module.exports = router;