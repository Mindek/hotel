import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './components/app.component';
import {MenuComponent} from "./components/menu.component";
import {HomeComponent} from "./components/home.component";
import {FooterComponent} from "./components/footer.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],

  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent
  ],

  bootstrap:    [ AppComponent]

})
export class AppModule { }
