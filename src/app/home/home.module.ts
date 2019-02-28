import { TinTucService } from './../service/tintuc-service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AppService } from '../service/app-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule, TooltipModule } from 'ngx-bootstrap';
import { TintucComponent } from './tintuc/tintuc.component';
import { CategoryComponent } from './category/category.component';
import { TintucDetailComponent } from './tintuc-detail/tintuc-detail.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FindProductComponent } from './find-product/find-product.component';
import { Page404Component } from './page404/page404.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
} from 'angular-6-social-login';
import { LoginDataService } from '../service/login-service';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('Your-Facebook-app-id')
      },
      // {
      //   id: GoogleLoginProvider.PROVIDER_ID,
      //   provider: new GoogleLoginProvider('Your-Google-Client-Id')
      // },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider('1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com')
      },
    ]);
  return config;
}
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    NgxImageZoomModule,
    SlideshowModule,
    NgxSpinnerModule,
    SocialLoginModule
  ],
  declarations: [
    IndexComponent,
    ProductComponent,
    ProductDetailComponent,
    SliderComponent,
    LoginComponent,
    LienheComponent,
    LeftmenuComponent,
    TintucComponent,
    CategoryComponent,
    TintucDetailComponent,
    GioithieuComponent,
    FindProductComponent,
    Page404Component,
  ],
  providers: [
    AppService,
    TinTucService,
    LoginDataService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
    ],
})
export class HomeModule { }
