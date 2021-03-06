'use strict'

const cors = require('cors')
const express = require('express')
const router = express.Router()
var request = require('request');

const methods = require('./methods')


router.post('/dbpedia', async (req, res) => {
var data= '"'+req.body.data+'"';
var lan= '"'+req.body.lan+'"';

request('http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=SELECT+DISTINCT+%3Fparola+%3Ftipo%0D%0AWHERE+%7B%0D%0A%7B%0D%0A%3Fparola+rdf%3Atype+owl%3AThing.%0D%0A%3Fparola+foaf%3Aname+%3Fnome+FILTER+regex%28%3Fnome%2C%22"'+data+'"%22%29%0D%0A%3Fparola+rdfs%3Alabel+%3Flingua+FILTER+regex%28%3Flingua%2C%22"'+lan+'"%22%29%0D%0A%3Fparola+dbo%3Atype+%3Ftipo%0D%0A%0D%0A%7D%0D%0A%7D%0D%0A&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&run=+Run+Query+', function (error, response, body) {
var bin = body;
res.send(bin)
 });
})

router.post('/linked', async (req, res) => {
    var data= req.body.data;
    var lan = req.body.lan;
    request('http://www.scholarlydata.org/sparql/?default-graph-uri=&query=%0D%0APREFIX+conf%3A+%3Chttps%3A%2F%2Fw3id.org%2Fscholarlydata%2Fontology%2Fconference-ontology.owl%23%3E%0D%0ASELECT+DISTINCT+%3Fperson+%0D%0AWHERE%7B%0D%0A++%3Fperson+conf%3Aname+%3Fname+FILTER+regex%28%3Fname%2C+%27'+data+'%27%29%0D%0A%3Fperson+rdfs%3Alabel+%3Flan+FILTER+regex%28%3Flan%2C+%27'+lan+'%27%29%0D%0A%0D%0A%0D%0A%7D&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on', function (error, response, body) {
    var bin = body;
    res.send(bin)
     });
    })

router.post('/file', async (req, res) => {
    var respons = [];
    var file = req.body.file;
    var dato= req.body.data;
    if(file != ''){
        var arr = methods.setInputFile(file)
        respons = methods.findTargetWord(arr ,dato);
        console.log(respons)     
        res.send(respons);         
    }else{
           res.send(respons);    
    }

})






module.exports = router