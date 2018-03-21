import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  @Input() all: number;
  @Input() selected: number;

  constructor() { }

  ngOnInit() {
  }

}
