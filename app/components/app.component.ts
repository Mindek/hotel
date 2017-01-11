import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <menu-component></menu-component>
    <router-outlet></router-outlet>
    <footer-component></footer-component>
`
})
export class AppComponent  {
  name = 'Angular';

}
