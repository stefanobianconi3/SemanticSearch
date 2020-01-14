'use strict'

const express = require('express')

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