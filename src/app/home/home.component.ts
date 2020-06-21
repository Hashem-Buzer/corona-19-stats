import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  countriesArr = [];
  pickedCountry = 'Libya';

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this.viewData();
    this.viewCountries();
  }

  viewData() {
    this._http.getData(this.pickedCountry).forEach((data) => {
      this.data = data;
      return this.data;
    });
  }

  viewCountries() {
    this._http.getCountries().forEach((data) => {
      for (var country in data) {
        this.countriesArr.push(data[country].Country);
      }
      return this.countriesArr.sort();
    });
  }

  pickCountry(country) {
    this.pickedCountry = country;
    this.viewData();
  }
}
