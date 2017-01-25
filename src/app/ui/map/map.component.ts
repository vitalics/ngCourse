import { Component, OnInit, Output, EventEmitter, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'my-map',
    template: require('./map.component.html'),
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    @Input() public position: wa.map.IMapPosition;
    @Input() public markers: wa.map.IMarker[] = [];

    @ViewChild('waMap') public mapElement: ElementRef;

    private map: google.maps.Map;
    private googleMarkers: google.maps.Marker[] = [];
    private bounds: google.maps.LatLngBounds;
    private infoWindow: wa.map.InfoWindow;

    constructor() { }

    ngOnInit() {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
}