import { SendDataService } from './../service/send-data-service';
import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/service/app-service';
import { GETCATEGORY_URL } from './config';
import { Router } from '../../../node_modules/@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginDataService } from '../service/login-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlImage = 'http://localhost:3100/image/';
  listCategory: any;
  valueSearch = '';
  infoUserLogin: any = {
    email: '',
    id : '',
    imguser: '',
    name: '',
    provider: '',
    token: ''
  };
  constructor(
    private _service: AppService,
    private _sendataservice: SendDataService,
    private _infoLigonservice: LoginDataService,
    private router: Router,
    private spinner: NgxSpinnerService) {

    this.infoUserLogin = _infoLigonservice.GetDataService();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  ngOnInit() {
    this.spinner.show();
    this._service.CallAllService(GETCATEGORY_URL).subscribe(
      data => {
        if (data) {
          this.listCategory = data.ListGetCategory;
          this._sendataservice.SetDataSerice(this.listCategory);
          setTimeout(() => {
            this.spinner.hide();
          }, 2500);
        }
      });
  }

  submitSearch() {
    console.log(this.valueSearch);
    this.router.navigate(['home/searchproduct', this.valueSearch ]);
  }

}
