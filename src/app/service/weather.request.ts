export class WeatherRequest {
    private apiKey: string = "576de4e5729ef7c7449df047a9ad2ceb"
    private weatherApi: string = 'http://api.openweathermap.org/data/2.5/find';

    private mockData: JSON = require("./weather.mock.json");

    constructor() { }

    public GetWeatherForSities(position: Position, citiesCount: number, isMock: boolean): string {
        if (isMock) {
            console.log(this.mockData);
            let stringyfyData = JSON.stringify(this.mockData);
            return stringyfyData;
        }
        else {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', `${this.weatherApi}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=${citiesCount}&appid=${this.apiKey}&units=metric`, false);
            xhr.send();

            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            }
            else {
                console.log(xhr.responseText);
                return xhr.responseText;
            }

        }


    }

    
}