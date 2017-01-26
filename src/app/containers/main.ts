import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services';
@Component({
    selector: 'main-container',
    template: require('./main-container.html'),
    styleUrls: ['./main-container.css']
})
export class MainContainerComponent implements OnInit {
    public position: wa.map.IMapPosition;

    public markers: wa.map.IMarker[];
    constructor(private weatherService: WeatherService) { }

    ngOnInit(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.position = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                this.weatherService.GetWeatherForCities(position, 50, true, 'metric').subscribe(info => {
                    this.markers = info.list.map(city => {
                        return {
                            position: {
                                lat: this.position.lat,
                                lng: this.position.lng
                            }
                        }
                    })
                })
            })
        }
    }
}
