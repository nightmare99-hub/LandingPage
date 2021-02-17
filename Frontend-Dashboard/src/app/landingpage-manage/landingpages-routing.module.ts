import { LandingpageManageComponent } from './landingpage-manage.component';
import { LandingpageMobiComponent } from '../landingpage-manage/landingpage-mobi/landingpage-mobi.component';
import { LandingpagePhpComponent } from '../landingpage-manage/landingpage-php/landingpage-php.component';
import { LandingpageASPComponent } from '../landingpage-manage/landingpage-asp/landingpage-asp.component';
import { LandingpageJavaComponent } from '../landingpage-manage/landingpage-java/landingpage-java.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [



          { path: 'landingpagejava', component: LandingpageJavaComponent },
          { path: 'landingpageasp', component: LandingpageASPComponent },
          { path: 'landingpagephp', component: LandingpagePhpComponent },
          { path: 'landingpagemobi', component: LandingpageMobiComponent }



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpagesRoutingModule { }
