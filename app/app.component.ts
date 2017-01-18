// import { Component } from '@angular/core';
//
// @Component({
//     moduleId: module.id,
//     selector: 'app',
//     templateUrl: 'app.component.html'
// })
//
// export class AppComponent { }

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<menu-component></menu-component>
<alert></alert>
<router-outlet></router-outlet>
<footer-component></footer-component>
`
})
export class AppComponent  {
}
