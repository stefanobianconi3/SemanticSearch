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
  
  showcontent(){
    this.button=true;
  }
  showfile(){
    this.checkfile= !this.checkfile;
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
} }


