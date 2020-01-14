import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { HttpClientModule } from '@angular/common/http';

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
  localUrl: any[];

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
    this.clickm()
  }

  clickm(){
  this.data.getSample().subscribe(
    (payload) => {
      if (payload['success']) {
        console.log(payload);
      } else {
        console.log(payload['error'])
      }
    }
  )
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

}


