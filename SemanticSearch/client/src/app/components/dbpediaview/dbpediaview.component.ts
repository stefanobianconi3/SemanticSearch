import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dbpediaview',
  templateUrl: './dbpediaview.component.html',
  styleUrls: ['./dbpediaview.component.css']
})
export class DbpediaviewComponent implements OnInit {
  @Input() toDisplayDbResult: [];
  constructor() { }

  ngOnInit() {
  }

}
