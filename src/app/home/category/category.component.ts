import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { GETPRODUCTBYCATEGORY_UTL } from './config';
import { GetProductByCategoryDto } from '../model/getproducbycategoryDto';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  sub: any;
  urlImage = 'http://localhost:3100/image/';
  listProductDto: GetProductByCategoryDto = {
    IDCategory: 0,
    StartPage: 1
  };
  maxSize = 5;
  bigTotalItems = 0;
  bigCurrentPage = 1;
  checkViewList = true;
  listProduct: any = [];
  constructor(private _service: AppService, private route: ActivatedRoute, private router: Router) {
     // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
     };

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.listProductDto.IDCategory = +params['key'];
    });
    this.callService();
  }

  callService() {
    this._service.CallByResquestService(GETPRODUCTBYCATEGORY_UTL, this.listProductDto).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request Is Unsuccessful');
          } else {
            this.listProduct = data.ListProductAll;
            if (this.listProduct !== null && this.listProduct !== undefined && this.listProduct.length !== 0 ) {
              this.bigTotalItems = this.listProduct[0].TotalRows;
            }
          }
        }
      });
  }

  viewGrid() {
    this.checkViewList = true;
  }
  viewList() {
    this.checkViewList = false;
  }
  pageChanged(pageIdex: any) {
    this.listProductDto.StartPage = pageIdex.page;
    this.callService();
  }
}
