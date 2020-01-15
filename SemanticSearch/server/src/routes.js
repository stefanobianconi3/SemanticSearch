'use strict'
const xmlToJson = require('xml-to-json-stream');
const cors = require('cors')
const express = require('express')
const $rdf = require('rdflib');
const router = express.Router()
var request = require('request');

const methods = require('./methods')


router.post('/dbpedia', async (req, res) => {
var data= '"'+req.body.data+'"';
var lan = '"'+req.body.lan+'"';
//send SPARQL query to db pedia
request('http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=SELECT+DISTINCT+%3Fparola+%3Ftipo%0D%0AWHERE+%7B%0D%0A%7B%0D%0A%3Fparola+rdf%3Atype+owl%3AThing.%0D%0A%3Fparola+foaf%3Aname+%3Fnome+FILTER+regex%28%3Fnome%2C%22"'+data+'"%22%29%0D%0A%3Fparola+rdfs%3Alabel+%3Flingua+FILTER+regex%28%3Flingua%2C%22"'+lan+'"%22%29%0D%0A%3Fparola+dbo%3Atype+%3Ftipo%0D%0A%0D%0A%7D%0D%0A%7D%0D%0A&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&run=+Run+Query+', function (error, response, body) {
var bin = body;
res.send(bin)
 });
})




module.exports = router;