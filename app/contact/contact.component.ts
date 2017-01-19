import { Component, OnInit} from '@angular/core';
declare var google: any;

@Component({
    selector: 'contact',
    moduleId: module.id,
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
    ngOnInit() {
        var myLocation = new google.maps.LatLng(50.029418, 19.925624);
        var mapProp = {
            center: myLocation,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Hotel Panorama"
        });

        var map = new google.maps.Map(document.getElementById("map1"), mapProp);
        marker.setMap(map);
    }
}
