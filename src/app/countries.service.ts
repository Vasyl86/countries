import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CountriesService {
  countriesList: Array<any>;
  filteredCountriesList: Array<any>;

  bSubject = new BehaviorSubject([]);

  constructor( private http: HttpClient ) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
  loadCountries() {
    this.getCountries()
      .subscribe((data: Array<any>) => {
        console.log(data);
        this.countriesList = data;
        this.bSubject.next(data);
      });
  }
  filterCountries(filter: any) {
    this.filteredCountriesList = this.countriesList;
    this.bSubject.next(this.filteredCountriesList);
  }
}
