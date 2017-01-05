export class Main {
    private map: google.maps.Map;
    private infoWindow: google.maps.MVCObject;
    private service: google.maps.places.PlacesService;

    constructor() {
    }

    public initMap(): void {

        let pyrmont = { lat: -33.867, lng: 151.195 };

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15,
            styles: [{
                stylers: [{ visibility: 'simplified' }]
            }, {
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }]
        });

        this.infoWindow = new google.maps.InfoWindow();
        this.service = new google.maps.places.PlacesService(this.map);

        this.service.nearbySearch({
            location: pyrmont,
            radius: 500,
            types: ['store']
        }, this.callback);
    }
    public createMarker(place: any) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: this.map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function () {
            this.infowindow.setContent(place.name);
            this.infowindow.open(this.map, this);
        });
    }
    public callback(results: any, status: any): void {
        let myMain: Main = new Main();
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                myMain.createMarker(results[i]);
            }
        }
    }
}