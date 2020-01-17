const $rdf = require('rdflib');
var asyncLoop = require('node-async-loop');


var storage = [];

module.exports = {

     setInputFile: function(file){
        var store=$rdf.graph();
        var contentType='application/rdf+xml';
        var baseUrl="http://example.com";
        
        $rdf.parse(file,store,baseUrl,contentType);
           var stms = store.statementsMatching(undefined, undefined , undefined);
           var fileToModify = [];
            for (var i=0; i<stms.length;i++) {
                var sub = stms[i]['subject'].value;
                var pred = stms[i]['predicate'].value;
                var obj = stms[i]['object'].value;
                var temp = [divide(sub),divide(pred),divide(obj)];
                fileToModify.push(temp);
            }
            fileToModify.shift();
            return fileToModify;
           },
    
    findTargetWord: function(str, target){
        asyncLoop(str, function (item, next)  {
            if(item[0][1].includes(target)){
                if((isOneRestriction(item, target)== false) &&
                (isOneClass(item,target)== false) && (isOneProp(item,target)==false)
                &&(isDataObj(item,target )== false)) {
                 
                isOneInstance(item,str, target)
                return storage;
                  
                }else{
                    return storage;
                }
            }
            next();
        });
             
        
    return storage;
        }

}

function isOneRestriction(array,value ){
    if(array[1][1]=="type" && array[0][1].includes(value)){
             if(array[2][1]=="Restriction"){
                output.push( {uri:array[0][0],name:array[0][1], type: array[2][1]})
                 return true;
             }
    }
    return false;

}

function isOneClass(array, value){
    if(array[1][1]=="type" && array[0][1].includes(value)){
            if(array[2][1]=="Class"){
            storage.push( {uri:array[0][0],name:array[0][1], type: array[2][1]})
            return true;
            }
    }
    
    return false;
}

function isOneProp(array,value ){
    if(array[1][1]=="type" && array[0][1].includes(value)){
        if(array[2][1]=="ObjectProperty"){
        storage.push( {uri:array[0][0],name:array[0][1], type: array[2][1]})
        
        return true;
        }
    }
    
    return false; 
} 
function isDataObj(array,value){
    if(array[1][1]=="type" && array[0][1].includes(value)){
        if(array[2][1]=="DatatypeProperty"){
        storage.push( {uri:array[0][0],name:array[0][1], type: array[2][1]})
        
        return true;
        }
    }
    
    return false;
}
    
function isOneInstance(array, big, value){
    if(array[1][1]=="type" && array[0][1].includes(value)){
        if((array[2][1]) == "NamedIndividual"){
            storage.push({uri:array[0][0],name:array[0][1], type: array[2][1]})
            
            return true;
         }
        
         for(var i=0;i<big.length;i++){
            if(big[i][0][1]== array[2][1]){
                    if(isOneClass(big[i], array[2][1])==true){
                    storage.push( {uri:array[0][0],name:array[0][1], type: array[2][1]})
                    return true;
                    }
                }
            }
    }
    
    return false;
}

function divide(x){
    var y;
    if(x != undefined){
        var temp2 = x.split("#");
        y = temp2.slice(-1).pop();
    }
    
    else{
        y = '';
    }  
    
    return [x,y];
}
