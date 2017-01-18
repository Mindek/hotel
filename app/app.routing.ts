import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
// import { LoginComponent } from './menu/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import {ServiceComponent} from "./service/service.component";

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'services', component: ServiceComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);