"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./register/index');
var index_2 = require('./_guards/index');
var login_component_1 = require("./login/login.component");
var about_component_1 = require("./about/about.component");
var service_component_1 = require("./service/service.component");
var galery_component_1 = require("./gallery/galery.component");
var contact_component_1 = require("./contact/contact.component");
var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: about_component_1.AboutComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: index_1.RegisterComponent },
    { path: 'gallery', component: galery_component_1.GalleryComponent },
    { path: 'services', component: service_component_1.ServiceComponent, canActivate: [index_2.AuthGuard] },
    { path: 'contact', component: contact_component_1.ContactComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map