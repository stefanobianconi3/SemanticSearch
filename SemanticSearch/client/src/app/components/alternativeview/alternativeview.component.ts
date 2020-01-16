import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alternativeview',
  templateUrl: './alternativeview.component.html',
  styleUrls: ['./alternativeview.component.css']
})
export class AlternativeviewComponent implements OnInit {
  @Input() toDisplayAltResult: [];
  constructor() { }

  ngOnInit() {
  }

}
