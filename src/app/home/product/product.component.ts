import { GetListProductDto } from './../model/getlistproductDto';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { GETLISTPRODUCT_URL, CountPageSize } from './config';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductTypeDto } from '../model/typeProductDto';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  urlImage = 'http://localhost:3100/image/';
  listProduct: any = [];
  countSize = 0;
  sub: any;
  listproductDto: GetListProductDto = {
    StartPage: 0,
    Type: 0
  };
  typeProduct = [
    { value: 0, name: 'Mặc định' },
    { value: 1, name: 'Giá tăng dần' },
    { value: 2, name: 'Giá giảm dần' },
    { value: 3, name: 'Mới đến cũ' },
    { value: 4, name: 'Cũ đến mới' }
  ];
  checkViewList = true;

  maxSize = 5;
  bigTotalItems = 0;
  bigCurrentPage = 1;
  constructor(private _service: AppService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.listproductDto.StartPage = +params['page'];
    });
    this.callService();
  }

  viewGrid() {
    this.checkViewList = true;
  }
  viewList() {
    this.checkViewList = false;
  }
  changeTypeProduct(itemType) {
    this.sub = this.route.params.subscribe(params => {
      this.listproductDto.StartPage = 1;
      this.listproductDto.Type = itemType;
    });
    this.callService();
    this.bigCurrentPage = 1;
  }

  callService() {
    this._service.CallByResquestService(GETLISTPRODUCT_URL, this.listproductDto).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request Is Unsuccessful');
          } else {
            this.listProduct = data.ListProductAll;
            if (this.listProduct !== null && this.listProduct !== undefined) {
              this.bigTotalItems = this.listProduct[0].TotalRows;
            }
          }

        }
      });
  }

  pageChanged(pageIdex: any) {
    this.listproductDto.StartPage = pageIdex.page;
    this.callService();
  }
}
