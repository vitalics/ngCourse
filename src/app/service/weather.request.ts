export class WeatherRequest {
    private weatherApi: string = 'http://api.openweathermap.org/data/2.5/find';

    constructor() { }

    public GetWeatherForSities(position: Position, citiesCount: number): void {

        // let xhr: XMLHttpRequest = new XMLHttpRequest();

        // xhr.open('GET', `${this.weatherApi}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=${citiesCount}&appid=a8f5a2be89e408a117d1cbf534303578&units=metric`, true)
        // xhr.send();
        // if (xhr.readyState != 4) return;

        // if (xhr.status != 200) {
        //     // обработать ошибку
        //     alert(xhr.status + ': ' + xhr.statusText);
        // } else {
        //     // вывести результат
        //     alert(xhr.responseText);
        // }

        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'myservice/username?id=some-unique-id');
        // xhr.onload = function () {
        //     if (xhr.status === 200) {
        //         alert('User\'s name is ' + xhr.responseText);
        //     }
        //     else {
        //         alert('Request failed.  Returned status of ' + xhr.status);
        //     }
        // };
        // xhr.send();
    }
}