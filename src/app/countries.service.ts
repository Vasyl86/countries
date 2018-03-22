import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CountriesService {
  countriesList: Array<any>;
  filteredCountriesList: Array<any>;

  bSubject = new BehaviorSubject([]);
  bSubjectAll = new BehaviorSubject([]);

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
        this.bSubjectAll.next(this.countriesList);
      });
  }
  filterCountries(filterObject: any) {
    // console.log("zzz");
    const types = Object.keys(filterObject);
    if (!types.length) {
      this.filteredCountriesList = this.countriesList.concat();
    } else {
      this.filteredCountriesList = this.countriesList.filter(item => {
        return types.reduce( (mainAcc, type) => {
          if (Array.isArray(item[type])) {
            const comp = item[type].reduce( (acc, curr) => {
              if (curr === filterObject[type]) {
                acc = true;
              }
              return acc;
            }, false);
            if (!comp) {
              mainAcc = false;
            }
          } else {
            if (item[type] !== filterObject[type]) {
              mainAcc = false;
            }
          }
          return mainAcc;
        }, true);
      });
    }
    this.bSubject.next(this.filteredCountriesList);
  }
}
