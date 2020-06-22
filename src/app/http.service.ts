import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(country) {
    return this.http.get(`https://api.covid19api.com/total/country/${country}`);
  }

  getCountries() {
    return this.http.get('https://api.covid19api.com/countries');
  }

  getLocation(lat, long) {
    return this.http.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
    );
  }
}
