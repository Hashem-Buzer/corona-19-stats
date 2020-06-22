import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss'],
})
export class EnglishComponent implements OnInit {
  data: any;
  countriesArr = [];
  pickedCountry: any;
  locCountry: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this.getLocation();
    this.viewCountries();
    this.viewData();
  }

  viewData() {
    this._http.getData(this.pickedCountry).forEach((data) => {
      this.data = data;
      this.data.length === 0
        ? Swal.fire({
            icon: 'warning',
            text: 'No results for this country',
            timer: 1500,
            position: 'top',
            showConfirmButton: false,
          })
        : Swal.fire({
            text: 'Data have been fetched',
            timer: 1200,
            position: 'top',
            showConfirmButton: false,
            icon: 'success',
          });

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

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        // this.callApi(longitude, latitude);
        this.location(longitude, latitude);
        // console.log('location ???? ====> ', longitude, latitude);
      });
    } else {
      console.log('No support for geolocation');
    }
  }

  location(long, lat) {
    this._http.getLocation(lat, long).subscribe((data) => {
      this.pickedCountry = data['countryName'];
      this.locCountry = data['countryName'];
      this.viewData();
    });
  }
}
