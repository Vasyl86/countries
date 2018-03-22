import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css', '../bootstrap.css']
})
export class CountriesComponent implements OnInit {
  // selected = 0;
  all = 0;

  constructor(private countriesService: CountriesService) { }
  ngOnInit() {
    this.countriesService.bSubjectAll.subscribe(data => {
      this.all = data.length;
    });
  }

}
