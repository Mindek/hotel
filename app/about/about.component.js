"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AboutComponent = (function () {
    function AboutComponent() {
        this.name = 'Angular';
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: "\n<div class=\"container content-container\">\n  <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n    </ol>\n  \n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item active\">\n        <img src=\"http://www.thefloridahotelorlando.com/var/floridahotelorlando/storage/images/media/images/photo-gallery/hotel-images/florida-hotel-orlando-night/27177-1-eng-US/Florida-Hotel-Orlando-Night.jpg\" alt=\"Front Hotel View\">\n        <div class=\"carousel-caption\">\n          Florida hotel is the only one six stars Hotel in Florida.\n        </div>\n      </div>\n      <div class=\"item\">\n        <img src=\"http://city360.com.pl/wp-content/uploads/2016/06/44.jpg\" alt=\"Room preview\">\n        <div class=\"carousel-caption\">\n          You will met highest standard in our rooms, restaurants and bar.\n        </div>\n      </div>\n      <div class=\"item\">\n        <img src=\"http://www.litorehotel.com/web/en/images/placeholders/1920x1200-0.jpg\" alt=\"Pool preview\">\n        <div class=\"carousel-caption\">\n          Our visitors will not be bored because of number of attractions and entertainments.\n        </div>\n      </div>\n    </div>\n  \n    <!-- Controls -->\n    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n      <!--<span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>-->\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n      <!--<span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>-->\n      <span class=\"sr-only\">Next</span>\n    </a>  \n  </div>\n  \n  <div class=\"row first-panel\">\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Kr\u00F3lewskie miasto Krak\u00F3w</h3>\n        </div>\n        <div class=\"panel-body\">Witaj\u0105c Pa\u0144stwa w Kr\u00F3lewskim Mie\u015Bcie Krakowie serdecznie zapraszamy do Hotelu Panorama**, po\u0142o\u017Conego zaledwie 3 km od Wawelu i Starego Miasta, 1,5 km od Sanktuarium Mi\u0142osierdzia Bo\u017Cego w \u0141agiewnikach oraz 1,5 km od Kampusu Uniwersytetu Jagiello\u0144skiego.\nW pobli\u017Cu hotelu znajduje si\u0119 ca\u0142odobowy market Tesco, jezioro Zakrz\u00F3wek oraz Park Ska\u0142ki Twardowskiego.</div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Lokalizacja</h3>\n        </div>\n        <div class=\"panel-body\">O atrakcyjnej lokalizacji Hotelu Panorama stanowi r\u00F3wnie\u017C bezpo\u015Bredni dost\u0119p do w\u0119z\u0142a komunikacyjnego umo\u017Cliwiaj\u0105cego \u0142atwy dojazd do dowolnie wybranego miejsca w Krakowie, Kopalni Soli w Wieliczce czy trasy wylotowej z Krakowa w kierunku Zakopanego.\nDogodna lokalizacja hotelu pozwala na spokojny wypoczynek i zarazem unikni\u0119cie zgie\u0142ku ruchliwego centrum.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Script to Activate the Carousel -->\n<script>\n  $('.carousel').carousel({\n    interval: 5000\n  })\n</script>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map