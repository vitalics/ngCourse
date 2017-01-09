import { mockWeatherData } from './weather.mock';
export class WeatherRequest {
    private apiKey: string = "576de4e5729ef7c7449df047a9ad2ceb"
    private weatherApi: string = 'http://api.openweathermap.org/data/2.5/find';

    constructor() { }

    public getWeather(position: Position, citiesCount: number, isMock: boolean): Promise {
        if (isMock) {
            return new Promise((resolve) => {
                resolve(mockWeatherData);
            })
        }

        let url: string = `${this.weatherApi}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=${citiesCount}&appid=${this.apiKey}&units=metric`;

        return this.sendRequest(url);
    }
    public sendRequest(url: string): Promise<T> {
        let promise = new Promise<T>((resolve, reject) => {
            let http = new XMLHttpRequest();
            http.open('GET', url, true);

            http.onreadystatechange = () => {
                if (http.readyState === XMLHttpRequest.DONE && http.status == 200) {
                    console.log('good');
                    resolve(JSON.parse(http.responseText));
                }
                else {
                    reject('api error');
                }
            }
            http.send();
        });

        return promise;

    }

    // if (isMock) {
    //     console.log(this.mockData);
    //     let stringyfyData = JSON.stringify(this.mockData);
    //     return stringyfyData;
    // }
    // else {

    //     let xhr = new XMLHttpRequest();

    //     xhr.open('GET', `${this.weatherApi}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=${citiesCount}&appid=${this.apiKey}&units=metric`, false);
    //     xhr.send();

    //     if (xhr.status != 200) {
    //         alert(xhr.status + ': ' + xhr.statusText);
    //     }
    //     else {
    //         console.log(xhr.responseText);
    //         return xhr.responseText;
    //     }
    // }


    public GetArrayOfposition(weatherData: JSON): Position {
        let latlng = weatherData.stringify('coord');


        for (let i = 0; i < latlng.length; i++) {

        }

        return latlng;
    }
}