import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
 import { google } from 'google-maps';

 declare var google: google;
@Component({
  selector: 'app-delivery-polygon',
  templateUrl: './delivery-polygon.component.html',
  styleUrls: ['./delivery-polygon.component.css']
})
export class DeliveryPolygonComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(18.5793, 73.8143),
  });
  var triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
  ];
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(this.map);
  }
}

// var map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 5,
//   center: {lat: 24.886, lng: -70.268},
//   mapTypeId: 'terrain'
// });

// // Define the LatLng coordinates for the polygon's path.
// var triangleCoords = [
//   {lat: 25.774, lng: -80.190},
//   {lat: 18.466, lng: -66.118},
//   {lat: 32.321, lng: -64.757},
//   {lat: 25.774, lng: -80.190}
// ];

// // Construct the polygon.
// var bermudaTriangle = new google.maps.Polygon({
//   paths: triangleCoords,
//   strokeColor: '#FF0000',
//   strokeOpacity: 0.8,
//   strokeWeight: 2,
//   fillColor: '#FF0000',
//   fillOpacity: 0.35
// });
// bermudaTriangle.setMap(map);
