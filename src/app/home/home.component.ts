import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import Swal from 'sweetalert2';

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
    this.getLocation();
    this.viewCountries();
    this.viewData();
  }

  viewData() {
    this._http.getData(this.pickedCountry).forEach((data) => {
      this.data = data;
      this.data.length === 0 &&
        Swal.fire({
          icon: 'warning',
          title: 'لا يوجد نتائج على هذه الدولة',
          timer: 1500,
          showConfirmButton: false,
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
        this.callApi(longitude, latitude);
        this.location(longitude, latitude);
        // console.log('location ???? ====> ', longitude, latitude);
      });
    } else {
      console.log('No support for geolocation');
    }
  }

  callApi(Longitude: number, Latitude: number) {
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`;
    //Call API
    // console.log('location ???? ====> ', url);
  }

  location(long, lat) {
    this._http.getLocation(lat, long).subscribe((data) => {
      this.pickedCountry = data['countryName'];
      this.viewData();
    });
  }
}
