import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/******/
import { Subject } from 'rxjs';
/******/

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  /******/
  private listner = new Subject<any>();
  reader$ = this.listner.asObservable();
  language = 'ar';
  /******/

  constructor(private http: HttpClient) {}

  changeLang() {
    if (this.language == 'en') this.language = 'ar';
    else if (this.language == 'ar') this.language = 'en';
    else this.language = 'ar';

    this.listner.next(this.language);
  }

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
