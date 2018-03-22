import {Component, Input, OnInit} from '@angular/core';
import {CountriesService} from "../../countries.service";

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  @Input() all: number;
  selected: number;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.bSubject.subscribe(data => {
      this.selected = data.length;
    });
  }

}
