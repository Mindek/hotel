import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
<<<<<<< HEAD
import {GalleryComponent} from "./gallery/galery.component";
=======
import {ServiceComponent} from "./service/service.component";
import {GalleryComponent} from "./gallery/gallery.component";
>>>>>>> da1d40164f761747c3af51f1f762358198f71f3a
import {ContactComponent} from "./contact/contact.component";
import {RatingComponent} from "./rating/rating.component";
import {CommentsComponent} from "./comments/comments.component";

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
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