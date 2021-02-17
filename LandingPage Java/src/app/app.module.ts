import { ServiceService } from './lienhe/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LidoluachonComponent } from './lidoluachon/lidoluachon.component';
import { KhungchuongtrinhComponent } from './khungchuongtrinh/khungchuongtrinh.component';
import { DoingumentorComponent } from './doingumentor/doingumentor.component';
import { CamnhanhocvienComponent } from './camnhanhocvien/camnhanhocvien.component';
import { HoatdonglophocComponent } from './hoatdonglophoc/hoatdonglophoc.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieukhoahocComponent } from './gioithieukhoahoc/gioithieukhoahoc.component';
import { DoanhnghiepComponent } from './doanhnghiep/doanhnghiep.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    BannerComponent,
    GioithieuComponent,
    LidoluachonComponent,
    KhungchuongtrinhComponent,
    DoingumentorComponent,
    CamnhanhocvienComponent,
    HoatdonglophocComponent,
    LienheComponent,
    GioithieukhoahocComponent,
    DoanhnghiepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
