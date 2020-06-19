import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this.viewData();
  }

  viewData() {
    this._http.getData().forEach((data) => {
      console.log('CONNENCTED ===>>> ', data);
      this.data = data;
      return data;
    });
  }
}
