import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
