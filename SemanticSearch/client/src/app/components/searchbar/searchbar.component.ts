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

  ngOnInit() {
  }
  word:String='';
  language:String='';
  fileToString = '';
  valore = '';
  filePath: any[];
  dbpediaoutput = [];

  setLanguage(value: any){
    this.language = value;
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
    this.dbpedia();
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

  

///////////////////////////////////////////////DBPEDIA FUNCTION TO GET RESULT////////////////////////////////
dbpedia (){
  const body = { data: this.valore, lan : this.language};

  this.data.getDBpedia(body).subscribe(
    (payload) => {
   
      var myresults = payload['results'];
       var bind = myresults['bindings'];
      console.log(bind)
       if(bind.length == 0){
        this.dbpediaoutput=[];
   }
   for(var i=0;i <= bind.length-1; i++){
     this.dbpediaoutput.push({uri: bind[i]['parola']['value'], name: this.getLastIndex(bind[i]['parola']['value']), type: this.getSecondLastIndex(bind[i]['tipo']['value']) });
   }
   
    }
  )
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}


