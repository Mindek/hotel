import { Component } from '@angular/core';
import {User} from "../_models/user";

@Component({
  selector: 'menu-component',
  template: `
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" routerLink="/about"><img src="app/menu/logo.png" ></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li *ngIf="ls.getItem('currentUser') && setCurrentUser().firstName == 'admin'">
                      <!--<div >-->
                            <a routerLink="/home">ADMIN</a>
                      <!--</div>-->
                    </li>
                    
                    <li>
                        <a routerLink="/about">O nas</a>
                    </li>
                    <li>
                        <a routerLink="/rating">Oceń nas</a>
                    </li>
                    <li>
                        <a routerLink="/comments">Opinie</a>
                    </li>
                    <li>
                        <a routerLink="/gallery">Galeria</a>
                    </li>
                    <li>
                        <a routerLink="/contact">Kontakt</a>
                    </li>
                    <li>
                        <a routerLink="/login">{{ ls.getItem("currentUser") ? 'Wyloguj' : 'Zaloguj'}}</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    <div class="navSpacer"></div>
`
})
export class MenuComponent  {
  name = 'Angular';
  ls = localStorage;
  ad:User;
  setCurrentUser()
  {
    console.log(JSON.parse(this.ls.getItem("currentUser")).firstName);
    return this.ad = JSON.parse(this.ls.getItem("currentUser"));
  }

}
