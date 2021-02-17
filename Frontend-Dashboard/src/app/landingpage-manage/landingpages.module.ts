import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LandingpageMobiComponent } from '../landingpage-manage/landingpage-mobi/landingpage-mobi.component';
import { LandingpagePhpComponent } from '../landingpage-manage/landingpage-php/landingpage-php.component';
import { LandingpageASPComponent } from '../landingpage-manage/landingpage-asp/landingpage-asp.component';
import { LandingpageJavaComponent } from '../landingpage-manage/landingpage-java/landingpage-java.component';
import {LandingpagesRoutingModule} from '../landingpage-manage/landingpages-routing.module';

import { ShowLandingpagejavaComponent } from './landingpage-java/show-landingpagejava/show-landingpagejava.component';
import { AddEditLandingpagejavaComponent } from './landingpage-java/add-edit-landingpagejava/add-edit-landingpagejava.component';
import { ShowLandingpageaspComponent } from './landingpage-asp/show-landingpageasp/show-landingpageasp.component';
import { AddEditLandingpageaspComponent } from './landingpage-asp/add-edit-landingpageasp/add-edit-landingpageasp.component';
import { ShowLandingpagephpComponent } from './landingpage-php/show-landingpagephp/show-landingpagephp.component';
import { AddEditLandingpagephpComponent } from './landingpage-php/add-edit-landingpagephp/add-edit-landingpagephp.component';
import { ShowLandingpagemobiComponent } from './landingpage-mobi/show-landingpagemobi/show-landingpagemobi.component';
import { AddEditLandingpagemobiComponent } from './landingpage-mobi/add-edit-landingpagemobi/add-edit-landingpagemobi.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LandingpagesRoutingModule,
        FormsModule

    ],
    declarations: [
      LandingpageMobiComponent,
      LandingpagePhpComponent,
      LandingpageASPComponent,
      LandingpageJavaComponent,

      ShowLandingpagejavaComponent,
      AddEditLandingpagejavaComponent,
      ShowLandingpageaspComponent,
      AddEditLandingpageaspComponent,
      ShowLandingpagephpComponent,
      AddEditLandingpagephpComponent,
      ShowLandingpagemobiComponent,
      AddEditLandingpagemobiComponent
    ]
})
export class LandingpagesModule { }
