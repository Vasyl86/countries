import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  countriesList: Array<any>;

  constructor(private countriesService: CountriesService) { }

    ngOnInit() {
      this.countriesService.bSubject.subscribe(data => {
        this.countriesList = data;
      });
    }

}
