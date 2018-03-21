import {Component, Input, OnInit} from '@angular/core';
import {CountriesService} from '../../countries.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  // @Input() filteredCountriesList: Array<any>;

  dropdownList = ['region', 'subregion'];
  dropdownValues = {};
  dropdownSelectedValues = {};

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.bSubject.subscribe(data => {
      for (let i = 0; i < this.dropdownList.length; i++) {
        this.dropdownValues[this.dropdownList[i]] = data.reduce( (previousValue, currentValue, index, array) => {
            if (previousValue.indexOf(currentValue[this.dropdownList[i]]) === -1) {
              previousValue.push(currentValue[this.dropdownList[i]]);
            }
            return previousValue;
          }, []);
        }
    });
  }
  selectByDrop(type: string, value: string) {
    console.log(type, value);
    this.countriesService.filterCountries(this.dropdownSelectedValues);
  }

}
