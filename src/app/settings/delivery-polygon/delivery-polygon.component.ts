/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delivery-polygon',
  templateUrl: './delivery-polygon.component.html',
  styleUrls: ['./delivery-polygon.component.css']
})
export class DeliveryPolygonComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement, mapProp);
  }
}
