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
  pickedCountry: any;
  locCountry: any;

  lang: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    setInterval(() => {
      this.getLang();
    }, 2000);

    this.getLocation();
    this.viewCountries();
    // this.viewData();
  }

  viewData() {
    this._http.getData(this.pickedCountry).forEach((data) => {
      this.data = data;
      if (this.data.length > 0) {
        if (localStorage.getItem('lang') === 'ar') {
          Swal.fire({
            text: 'تم جلب البيانات',
            timer: 1200,
            position: 'top',
            showConfirmButton: false,
            icon: 'success',
          });
        } else {
          Swal.fire({
            text: 'Data fetched',
            timer: 2000,
            position: 'top',
            showConfirmButton: false,
            icon: 'success',
          });
        }
      } else {
        if (localStorage.getItem('lang') === 'ar') {
          Swal.fire({
            icon: 'warning',
            text: 'لا توجد نتائج على هذه الدولة',
            timer: 1500,
            position: 'top',
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            icon: 'warning',
            text: 'No results for this country',
            timer: 1500,
            position: 'top',
            showConfirmButton: false,
          });
        }
      }

      // ? this.lang === 'ar'
      //   ? Swal.fire({
      //       icon: 'warning',
      //       text: 'لا توجد نتائج على هذه الدولة',
      //       timer: 1500,
      //       position: 'top',
      //       showConfirmButton: false,
      //     })
      //   : Swal.fire({
      //       icon: 'warning',
      //       text: 'there are no results for this country',
      //       timer: 1500,
      //       position: 'top',
      //       showConfirmButton: false,
      //     })
      // : this.lang === 'ar'
      // ? Swal.fire({
      //     text: 'تم جلب البيانات',
      //     timer: 1200,
      //     position: 'top',
      //     showConfirmButton: false,
      //     icon: 'success',
      //   })
      // : Swal.fire({
      //     text: 'data fetched successfully',
      //     timer: 2000,
      //     position: 'top',
      //     showConfirmButton: false,
      //     icon: 'success',
      //   });

      return this.data;
    });
  }

  viewCountries() {
    this._http.getCountries().forEach((data) => {
      for (var country in data) {
        this.countriesArr.push(data[country].Country);
      }
      return this.countriesArr.sort().shift();
    });
  }

  pickCountry(country) {
    this.pickedCountry = country;
    this.viewData();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.location(longitude, latitude);
        },
        () => {
          this.pickedCountry = 'Afghanistan';
          this.viewData();
        }
      );
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

  getLang() {
    this.lang = localStorage.getItem('lang');
  }
}
