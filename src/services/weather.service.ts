import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

let weatherData = require('./weather-data.json');

@Injectable()
export class WeatherService {

    private weatherApi: string = 'http://api.openweathermap.org/data/2.5/find';

    public constructor(private http: Http) { }

    public getWeatherForCities(position: Position, citiesCount: number, isMock?: boolean): Observable<wa.entities.ICitiesInfos> {
        if (isMock) {
            return Observable.of(weatherData);
        }

        return this.http.get(`${this.weatherApi}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=${citiesCount}&appid=a8f5a2be89e408a117d1cbf534303578&units=metric`)
            .map(r => r.json());
    }
}