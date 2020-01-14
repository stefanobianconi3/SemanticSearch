'use strict'
const xmlToJson = require('xml-to-json-stream');
const cors = require('cors')
const express = require('express')
const $rdf = require('rdflib');
const router = express.Router()
var request = require('request');

const methods = require('./methods')


router.post('/output', async (req, res) => {
var data= '"'+req.body.data+'"';
var lan = '"'+req.body.lan+'"';
//send SPARQL query to db pedia
request('http://dbpedia.org/sparql?query=PREFIX+dbo:<http://dbpedia.org/ontology/>+SELECT+?resource+WHERE+{+{+?resource+rdf:type+owl:Thing+.+?resource+rdfs:label+?ps+}+FILTER+regex(+?resource,+'+data+'+)+FILTER+langmatches(lang(?ps),+'+lan+')+}&output=json', function (error, response, body) {
var bin = body;
res.send(bin)
 });
})




module.exports = router;