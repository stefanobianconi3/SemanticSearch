import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit {
  @Input() toDisplayFileResult: [];
  constructor() { }

  ngOnInit() {
  }

}
