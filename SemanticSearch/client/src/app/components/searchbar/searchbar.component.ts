import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
private button:boolean = false;
private checkfile: boolean = false;
private showoutput:boolean=false;
  constructor(private http: HttpClientModule, private data: DataService) { }
  //window.location.href="https://www.google.com";
  ngOnInit() {
  }
  word:String='';
  language:String='';
  fileToString = '';
  filePath: any[];
  dbpediaoutput = [];
  alternativeoutput = [];
  risultfiles: {};
nameOfFile: String;
  setLanguage(value: any){
    this.language = value;
  }


  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }
  showcontent(){
    this.button=true;
  }
  showfile(){
    this.checkfile= !this.checkfile;
  }

  onSubmit(f:any) {
    this.showoutput=true;
    this.word = f.value.wordToSearch;
    this.alternative();
    this.dbpedia();
    this.fileres();
    f.reset();

  }

  
setFile(event: any) {
  this.fileToString = '';
  if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.filePath = event.target.result;
          
          this.saveMyFile(this.filePath);
      }
      reader.readAsText(event.target.files[0]);

  }
}


saveMyFile(result) {
  this.fileToString = result;
}


getSecondLastIndex(x){
  var url = x.split( '/' );
  return url[ url.length - 2 ] 
}
getLastIndex(x){
  var parts = x.split('/');
  var lastSegment = parts.pop() || parts.pop();
  return lastSegment;
}
///////////////////////////////////////////////FILES FUNCTION TO GET RESULTS///////////////////////////7
fileres(){
  const body = {file:this.fileToString, data: this.word};
  this.data.getFileResult(body).subscribe(payload => {
    var count = Object.keys(payload).length;
  if(count!=0){
    this.risultfiles = payload;
  }
  else {
    this.risultfiles = {uri: 'no uri', type: 'no type'}
  }
  
})
}
/////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////DBPEDIA FUNCTION TO GET RESULT////////////////////////////////
dbpedia (){
  const body = { data: this.word, lan : this.language};

  this.data.getDBpedia(body).subscribe(
    (payload) => {
   
      var myresults = payload['results'];
       var bind = myresults['bindings'];
       if(bind.length == 0){
        this.dbpediaoutput.push({uri: 'no uri', name:'no name', type: 'no type'});
   }
   for(var i=0;i <= bind.length-1; i++){
     this.dbpediaoutput.push({uri: bind[i]['parola']['value'], name: this.getLastIndex(bind[i]['parola']['value']), type: this.getSecondLastIndex(bind[i]['tipo']['value']) });
   }
   
    }
  )
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


alternative (){
  const body = { data: this.word, lan : this.language};

  this.data.getAlternativeResult(body).subscribe(
    (payload) => {
      var myresults = payload['results'];
       var bind = myresults['bindings'];
       if(bind.length == 0){
        this.alternativeoutput.push({value: 'No results found'});
   }
   for(var i=0;i <= bind.length-1; i++){
     this.alternativeoutput.push({value: bind[i]["person"]["value"]});
   }
   
    }
  )
}




}


