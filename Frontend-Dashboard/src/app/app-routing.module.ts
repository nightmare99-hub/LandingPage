import { LandingpageManageComponent } from './landingpage-manage/landingpage-manage.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const landingesModule = () => import('./landingpage-manage/landingpages.module').then(x => x.LandingpagesModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'landingpagemanage', loadChildren: landingesModule, component:LandingpageManageComponent, canActivate: [AuthGuard] },

    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
