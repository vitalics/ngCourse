import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
    private apiKey: string = '576de4e5729ef7c7449df047a9ad2ceb';
    private weatherApi: string = 'http://api.openweathermap.org/data/2.5/find';

    private mockData = require('./weather.data.json');

    constructor(
        private http: Http
    ) { }

    public GetWeatherForCities(position: Position, citiesCounts: number, isMock: boolean, units?: string) {
        if (isMock) {
            return Observable.of(this.mockData);
        }

        if (citiesCounts < 0 || citiesCounts > 50 || this.isEmptyOrSpaces(units)) {
            units = 'metric';
            return Observable.of(this.mockData);
        }

        let params = new URLSearchParams();
        params.set('lat', position.coords.latitude.toString());
        params.set('lng', position.coords.longitude.toString());
        params.set('ctn', citiesCounts.toString());
        params.set('appid', this.apiKey);
        params.set('units', units);

        return this.http.get(`${this.weatherApi}`, { search: params }).map(r => r.json());
    }
    // is empty or spaces have string 
    private isEmptyOrSpaces(str: string): boolean {
        return str === null || str.match(/^ *$/) !== null;
    }
}