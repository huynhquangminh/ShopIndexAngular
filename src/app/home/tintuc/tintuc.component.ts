import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app-service';
import { GETLISTNEWSALL_URL } from './config';
import { TinTucService } from '../../service/tintuc-service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {
  urlImage = 'http://localhost:3100/image/';
  listNewsByDate: any = [];
  listNewsByView: any = [];
  constructor(private _service: AppService, private _tintucservice: TinTucService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
   }

  ngOnInit() {
    this._service.CallAllService(GETLISTNEWSALL_URL).subscribe(
      data => {
        if (data) {
          if (data.Success === false) {
            alert('Your Request Is Unsuccessful');
          } else {
              this.listNewsByView = data.listNewsByView;
              this.listNewsByDate = data.listNewsByDate;
              this._tintucservice.SetDataSerice(this.listNewsByView);
          }
        }
      });
  }

}
