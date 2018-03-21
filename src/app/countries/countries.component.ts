import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css', '../bootstrap.css']
})
export class CountriesComponent implements OnInit {
  selected = 0;
  all = 0;

  constructor() { }
  ngOnInit() { }

}
