import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ContactComponent} from "./contact/contact.component";
import {RatingComponent} from "./rating/rating.component";
import {CommentsComponent} from "./comments/comments.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'rating', component: RatingComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent },
    { path: 'comments', component: CommentsComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);