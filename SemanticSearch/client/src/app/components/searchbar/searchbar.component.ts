import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
private button:boolean = false;
private checkfile: boolean = false;
  constructor() { }

  ngOnInit() {
  }
showcontent(){
  this.button=true;
}
showfile(){
  this.checkfile= !this.checkfile;
}
}
