import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountriesService} from '../countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country: any;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) { }countriesService

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('id');
    this.countriesService.bSubjectAll.subscribe( data => {
      this.country = data.reduce( (acc, item) => {
        if (name === item.name) {
          acc = item;
        }
        return acc;
      }, {});
      console.log(this.country);
    });
  }

}
