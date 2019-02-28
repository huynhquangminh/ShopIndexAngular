import { TinTucService } from './../../service/tintuc-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { GETPRODUCTNEW_URL } from './config';
import { GETLISTNEWSALL_URL } from '../tintuc/config';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  listProductNew: any = [];
  listProductSellMax: any = [];
  listProdictInterest: any = [];
  listProdictPriceSale: any = [];
  listNewsByView: any = [];
  urlImage = 'http://localhost:3100/image/';
  constructor(
    private _service: AppService,
    private router: Router,
    private _tintucservice: TinTucService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
   }

  ngOnInit() {
    this._service.CallAllService(GETPRODUCTNEW_URL).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request is sunsuccessful');
          } else {
            this.listProductNew = data.ListProductNew;
            this.listProductSellMax = data.ListProductSellMax;
            this.listProdictInterest = data.ListProductInterest;
            this.listProdictPriceSale = data.ListProductPriceSale;
          }

        }
      });

      this._service.CallAllService(GETLISTNEWSALL_URL).subscribe(
        data => {
          if (data) {
            if (data.Success === false) {
              alert('Your Request Is Unsuccessful');
            } else {
                this.listNewsByView = data.listNewsByView;
                this._tintucservice.SetDataSerice(data.listNewsByView);
            }
          }
        });
  }
}
