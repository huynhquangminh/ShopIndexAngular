import { TinTucService } from './../../service/tintuc-service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { GETNEWSDETAIL_URL } from './config';
import { NewsDetailDto } from '../model/newsdetailDto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tintuc-detail',
  templateUrl: './tintuc-detail.component.html',
  styleUrls: ['./tintuc-detail.component.css']
})
export class TintucDetailComponent implements OnInit {
  urlImage = 'http://localhost:3100/image/';
  itemNewsDetail: any;
  newsdetaildto: NewsDetailDto = {
    ID: 0
  };
  newsbyview: any;
  constructor(
    private _service: AppService,
     private route: ActivatedRoute,
      private _tintucservice: TinTucService,
      private router: Router
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
     };
     }

  ngOnInit() {
    this.newsbyview = this._tintucservice.GetDataService();
    this.newsdetaildto.ID = Number( this.route.snapshot.paramMap.get('id'));
    this._service.CallByResquestService(GETNEWSDETAIL_URL, this.newsdetaildto).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request Is Unsuccessful');
          } else {
            this.itemNewsDetail = data.NewsDetail;
          }
        }
      });
  }

}
