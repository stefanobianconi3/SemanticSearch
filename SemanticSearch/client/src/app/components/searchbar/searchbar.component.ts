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
  constructor(private http: HttpClientModule, private data: DataService) { }

  ngOnInit() {
  }
  word:String='';
  language:String='';
  fileToString = '';
  valore = '';
  localUrl: any[];
  text = [];

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
    
    this.word = f.value.wordToSearch;
    this.dbpedia();
  }

  
setFile(event: any) {
  this.fileToString = '';
  if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.localUrl = event.target.result;
          
          this.storeResults(this.localUrl);
      }
      reader.readAsText(event.target.files[0]);

  }
}
//store the file in a string
storeResults(result) {
  this.fileToString = result;
}

//Split the uri to retreive the resource name
uriSplit(url){
  var array = url.split("/");
  var name = array.slice(-1).pop();
  
  return name;
}

//get file from DBpedia
dbpedia (){
  const body = { data: this.valore, lan : this.language,file: this.fileToString};

  this.data.getDBpedia(body).subscribe(
    (payload) => {
   
      var a = payload['results'];
       var b = a['bindings'];
       if(b.length == 0){
        console.log('No result from DBpedia');
   }
   for(var i=0;i <= b.length-1; i++){
     this.text.push({name: this.uriSplit(b[i]['resource']['value']),uri:b[i]['resource']['value'] });
   }
    }
  )
}


}


