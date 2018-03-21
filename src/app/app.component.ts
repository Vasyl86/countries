import {Component, OnInit} from '@angular/core';
import {CountriesService} from "./countries.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.loadCountries();
  }

}
