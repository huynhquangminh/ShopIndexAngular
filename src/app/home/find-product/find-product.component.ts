import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchProductDto } from '../model/searchproductDto';
import { SEARCHPRODUCT_URL } from './config';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {
  sub: Subscription;
  urlImage = 'http://localhost:3100/image/';
  searchproductdto: SearchProductDto = {
    key: ''
  };
  listProductSearch: any = [];
  constructor(private _service: AppService, private route: ActivatedRoute, private router: Router) {
    this.searchproductdto.key = this.route.snapshot.paramMap.get('key');
  }

  ngOnInit() {
    this._service.CallByResquestService(SEARCHPRODUCT_URL, this.searchproductdto).subscribe(data => {
      if (data) {
        this.listProductSearch = data.ListProduct;
      }
    });
  }
}
