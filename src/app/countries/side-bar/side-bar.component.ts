import {Component, Input, OnInit} from '@angular/core';
import {CountriesService} from '../../countries.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  // @Input() filteredCountriesList: Array<any>;

  dropdownList = ['region', 'subregion', 'borders', 'timezones'];
  dropdownValues = {};
  dropdownSelectedValues = {};

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.bSubject.subscribe(data => {
      for (let i = 0; i < this.dropdownList.length; i++) {
        this.dropdownValues[this.dropdownList[i]] = this.prepareValues(data, this.dropdownList[i]).sort();
        this.dropdownValues[this.dropdownList[i]].unshift('All');
      }
    });
  }
  selectByDrop(type: string, value: string) {
    console.log(type, value);
    this.dropdownSelectedValues[type] = value;
    if (value === 'All') {
      delete this.dropdownSelectedValues[type];
    }
    this.countriesService.filterCountries(this.dropdownSelectedValues);
  }
  prepareValues(data: Array, list: string) {
    return data.reduce( (previousValue, currentValue, index, array) => {
      if (!Array.isArray(currentValue[list])) {
        if (previousValue.indexOf(currentValue[list]) === -1) {
          previousValue.push(currentValue[list]);
        }
      } else {
        for (let i = 0; i < currentValue[list].length; i++){
          if (previousValue.indexOf(currentValue[list][i]) === -1) {
            previousValue.push(currentValue[list][i]);
          }
        }
      }
      return previousValue;
    }, []);
  }
}
