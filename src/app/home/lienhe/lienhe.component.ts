import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css']
})
export class LienheComponent implements OnInit {

  a = false;
  urlImage = 'http://localhost:3100/image/';
  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  from: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
   }

  ngOnInit() {
    this.from = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      content: [null, [Validators.required]],
    });
    const a = (this.from.get('userName').hasError('required') && this.from.get('userName').touched) ? true : false;
  }

  onSubmit(formValue) {
     this.a = (this.from.get('userName').hasError('required')) ? true : false;
    const b = (this.from.get('email').hasError('required') ) ? true : false;
    const c = (this.from.get('content').hasError('required')) ? true : false;
    console.log(formValue);
  }

}
