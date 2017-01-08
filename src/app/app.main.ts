/// <reference path="../../node_modules/@types//googlemaps/index.d.ts" />
import { WeatherRequest } from './service/weather.request';
export class Main {

    private map: google.maps.Map;
    private marker: google.maps.Marker;

    private options: PositionOptions = {
        enableHighAccuracy: true,
        maximumAge: 0
    }

    public currentCoordinates: Coordinates;

    constructor() {
        this.initMap();


    }

    public initMap(): void {
        let currlocation;
        if (navigator.geolocation) {
            currlocation = navigator.geolocation.getCurrentPosition((position: Position) => {
                this.currentCoordinates = position.coords;

                console.log('Your current position is:');
                console.log(`Latitude : ${position.coords.latitude}`);
                console.log(`Longitude: ${position.coords.longitude}`);
                console.log(`More or less ${position.coords.accuracy} meters.`);

                let mylocation = {
                    lat: this.currentCoordinates.latitude,
                    lng: this.currentCoordinates.longitude
                }

                this.map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: mylocation
                })

                this.marker = new google.maps.Marker({
                    position: mylocation,
                    map: this.map
                });

                let weatherRequest: WeatherRequest = new WeatherRequest();

                let data = weatherRequest.GetWeatherForSities(position, 50, true);

                // for (let i = 0; i < 50; i++) {
                //     data.
                // }

                return this.currentCoordinates;
            });
        }


    }
}