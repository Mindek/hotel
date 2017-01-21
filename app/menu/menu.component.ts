import {Component, OnInit, HostListener} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
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
                        <a routerLink="/login">{{ texLog }}</a>
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
export class MenuComponent{
  texLog: string;

  constructor(private authenticationService: AuthenticationService) {
    this.setText();
  }


  @HostListener('click') onClick(){
    this.setText();
  }

  setText()
  {
    console.log("ssss");
    if(localStorage.getItem('currentUser'))
    {
      this.texLog = "Wyloguj";
    }
    else {
      this.texLog = "Zaloguj";
    }
  }

}
