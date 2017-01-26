import { Component, OnInit, Output, EventEmitter, ViewChild, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'my-map',
    template: require('./map.component.html'),
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    @Input() public position: wa.map.IMapPosition;
    @Input() public markers: wa.map.IMarker[];

    @ViewChild('waMap') public mapElement: ElementRef;

    private map: google.maps.Map;
    private googleMarkers: google.maps.Marker[] = [];
    private bounds: google.maps.LatLngBounds;
    private infoWindow: google.maps.InfoWindow;

    public ngOnInit(): void {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['position'] && !changes['position'].isFirstChange()) {
            this.map.setCenter(new google.maps.LatLng(this.position.lat, this.position.lng));
        }

        if (changes['markers'] && !changes['markers'].isFirstChange() && this.markers && this.markers.length) {
            this.changeMarkers();
        }
    }

    private changeMarkers(): void {
        this.bounds = new google.maps.LatLngBounds();
        this.googleMarkers.forEach(m => m.setMap(null));
        this.googleMarkers = [];
        this.googleMarkers = this.markers.map(m => {
            let marker = new google.maps.Marker({
                position: {
                    lat: m.position.lat,
                    lng: m.position.lng
                },
                map: this.map,
                title: 'Click to view weather information'
            });

            marker.addListener('click', () => {
                this.infoWindow.setContent(m.infotext);
                this.infoWindow.open(this.map, marker);
            });

            this.bounds.extend(marker.getPosition());

            return marker;
        });
        this.map.fitBounds(this.bounds);
    }
}