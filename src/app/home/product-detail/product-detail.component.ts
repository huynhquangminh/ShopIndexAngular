import { AppService } from './../../service/app-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GETPRODUCTBYID_URL, GETLISTPRODUCTBYCATEGORY_URL } from './config';
import { ProductDetailDto } from '../model/productdetailDto';
import { GetProductByCategoryDto } from '../model/getproducbycategoryDto';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  listProductDto: GetProductByCategoryDto = {
    IDCategory: 0,
    StartPage: 1
  };
  Amount = 1;
  img = '/assets/image/products/product1.jpg';
  productdetaildto: ProductDetailDto = {
    id: 0
  };
  productDetail: any;
  productMoreItem: any;
  productMore: any[];
  constructor(private route: ActivatedRoute, private _service: AppService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.productdetaildto.id = Number(this.route.snapshot.paramMap.get('id'));
    this._service.CallByResquestService(GETPRODUCTBYID_URL, this.productdetaildto).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request1 is sunsuccessful');
          } else {
            this.productDetail = data.ProductDetail;
            this.listProductDto.IDCategory = data.ProductDetail.IDCategory;
            this.getlistproductmore();
          }
        }
      });

  }

  getlistproductmore() {
    this._service.CallByResquestService(GETLISTPRODUCTBYCATEGORY_URL, this.listProductDto).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request2 is sunsuccessful');
          } else {
            this.productMore = data.ListProductAll;
            for (let i = 0; i < 4; i++) {
              this.productMore.pop();
            }
          }
        }
      });
  }
  quantityChangeClick(value: string) {
    if (value === 'down') {
      if (this.Amount > 0) {
        this.Amount--;
      }

    } else {
      this.Amount++;
    }
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
