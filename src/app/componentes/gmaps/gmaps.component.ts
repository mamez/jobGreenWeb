import { Component, OnInit , ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'jg-gmaps',
  templateUrl: './gmaps.component.html',
  styles: []
})
export class GmapsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      var mapProp = {
        center: new google.maps.LatLng(18.5793, 73.8143),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
   }, 3000);
  }

}
