import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import {MenuComponent} from "./components/menu.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  MenuComponent
                ],
  bootstrap:    [ AppComponent]

})
export class AppModule { }
