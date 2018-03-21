import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { CountriesService } from './countries.service';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { SideBarComponent } from './countries/side-bar/side-bar.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { StatusBarComponent } from './countries/status-bar/status-bar.component';

const appRoutes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: '',   redirectTo: '/countries', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    SideBarComponent,
    CountriesListComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
