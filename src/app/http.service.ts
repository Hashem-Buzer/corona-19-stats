import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/******/
import { Subject } from 'rxjs';
/******/

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // this is for observable to pass the language value to home.componenet.ts;
  private listner = new Subject<any>();
  reader$ = this.listner.asObservable();
  language = localStorage.getItem('lang');

  constructor(private http: HttpClient) {}

  changeLang() {
    // if the language value was 'en' ?
    //// change it to 'ar';
    // if it was 'en' ?
    //// change it to 'ar';
    // if it has no value ?
    //// by default will assign 'ar';
    if (this.language == 'en') this.language = 'ar';
    else if (this.language == 'ar') this.language = 'en';
    else this.language = 'ar';

    // send the language to the next of the listener subject;
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
