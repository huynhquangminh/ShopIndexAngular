import { SendDataService } from './../../service/send-data-service';
import { AppService } from './../../service/app-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  public listCategory = [];
  urlImage = 'http://localhost:3100/image/';
  constructor(private _service: AppService, private _sendDataService: SendDataService) {
    this.listCategory = this._sendDataService.GetDataService();
  }

  ngOnInit() {
  }
}
