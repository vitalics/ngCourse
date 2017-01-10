webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var http_1 = __webpack_require__(24);
	var services_1 = __webpack_require__(25);
	var app_component_1 = __webpack_require__(354);
	var containers_1 = __webpack_require__(356);
	__webpack_require__(361);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule
	        ],
	        declarations: [
	            containers_1.HeaderComponent,
	            containers_1.FooterComponent,
	            app_component_1.AppComponent
	        ],
	        providers: [services_1.WeatherService],
	        bootstrap: [app_component_1.AppComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(26));


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(24);
	var rxjs_1 = __webpack_require__(27);
	var weatherData = __webpack_require__(353);
	var WeatherService = (function () {
	    function WeatherService(http) {
	        this.http = http;
	        this.weatherApi = 'http://api.openweathermap.org/data/2.5/find';
	    }
	    WeatherService.prototype.getWeatherForCities = function (position, citiesCount, isMock) {
	        if (isMock) {
	            return rxjs_1.Observable.of(weatherData);
	        }
	        return this.http.get(this.weatherApi + "?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&cnt=" + citiesCount + "&appid=a8f5a2be89e408a117d1cbf534303578&units=metric")
	            .map(function (r) { return r.json(); });
	    };
	    return WeatherService;
	}());
	WeatherService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], WeatherService);
	exports.WeatherService = WeatherService;


/***/ },

/***/ 353:
/***/ function(module, exports) {

	module.exports = {
		"message": "accurate",
		"cod": "200",
		"count": 50,
		"list": [
			{
				"id": 625665,
				"name": "Mahilyow",
				"coord": {
					"lon": 30.33639,
					"lat": 53.913891
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889019,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 700924,
				"name": "Mogilëv",
				"coord": {
					"lon": 30.35,
					"lat": 53.900002
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889242,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 627631,
				"name": "Karabanovka",
				"coord": {
					"lon": 30.364721,
					"lat": 53.946388
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889243,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 620853,
				"name": "Tishovka",
				"coord": {
					"lon": 30.283333,
					"lat": 53.883331
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889243,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 623255,
				"name": "Polykovichi",
				"coord": {
					"lon": 30.335278,
					"lat": 53.965832
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889244,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 816214,
				"name": "Gay",
				"coord": {
					"lon": 30.298332,
					"lat": 53.96389
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889244,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 629471,
				"name": "Buynichy",
				"coord": {
					"lon": 30.263889,
					"lat": 53.850555
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889245,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 620205,
				"name": "Veyno",
				"coord": {
					"lon": 30.383329,
					"lat": 53.833328
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889245,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 618768,
				"name": "Zhukovo",
				"coord": {
					"lon": 30.291389,
					"lat": 53.985832
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889246,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 816218,
				"name": "Palykavichy Pyershyya",
				"coord": {
					"lon": 30.349167,
					"lat": 53.993057
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889246,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 625072,
				"name": "Mahilyowski Rayon",
				"coord": {
					"lon": 30.25,
					"lat": 53.833328
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889246,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 622341,
				"name": "Selets",
				"coord": {
					"lon": 30.241112,
					"lat": 53.826942
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889247,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 624318,
				"name": "Kadino",
				"coord": {
					"lon": 30.520281,
					"lat": 53.883888
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889247,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 626360,
				"name": "Kupely",
				"coord": {
					"lon": 30.316668,
					"lat": 54.033333
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889248,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 620182,
				"name": "Vil’chitsy",
				"coord": {
					"lon": 30.34499,
					"lat": 53.7812
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889248,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 815847,
				"name": "Ramanavichy",
				"coord": {
					"lon": 30.560989,
					"lat": 53.872292
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889249,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 626634,
				"name": "Krasnitsa Pervaya",
				"coord": {
					"lon": 30.191,
					"lat": 53.79768
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889249,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 630391,
				"name": "Barsuki",
				"coord": {
					"lon": 30.320278,
					"lat": 54.055557
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889250,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 626638,
				"name": "Krasnitsa",
				"coord": {
					"lon": 30.184723,
					"lat": 53.789165
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889250,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 625881,
				"name": "Lubnishche",
				"coord": {
					"lon": 30.104179,
					"lat": 53.96764
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889252,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 626633,
				"name": "Krasnitsa Vtoraya",
				"coord": {
					"lon": 30.183332,
					"lat": 53.783333
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889254,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 625245,
				"name": "Myazhysyatki",
				"coord": {
					"lon": 30.168056,
					"lat": 53.770557
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889254,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 629163,
				"name": "Dashkawka",
				"coord": {
					"lon": 30.261021,
					"lat": 53.736969
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889255,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 627664,
				"name": "Kamennyye Lavy",
				"coord": {
					"lon": 30.301666,
					"lat": 54.091667
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889255,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 815261,
				"name": "Pushcha",
				"coord": {
					"lon": 30.128056,
					"lat": 53.753056
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889256,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 625642,
				"name": "Makhovoye",
				"coord": {
					"lon": 30.299999,
					"lat": 54.116669
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889255,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 620141,
				"name": "Vishow",
				"coord": {
					"lon": 29.97098,
					"lat": 53.982609
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889256,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 814948,
				"name": "Podbrod’ye",
				"coord": {
					"lon": 30.098333,
					"lat": 53.726112
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889258,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 626005,
				"name": "Litovsk",
				"coord": {
					"lon": 30.316668,
					"lat": 54.147221
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889257,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 625073,
				"name": "Mahilyowskaya Voblasts’",
				"coord": {
					"lon": 30.75,
					"lat": 54
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889257,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 628776,
				"name": "Dubrovka",
				"coord": {
					"lon": 30.083332,
					"lat": 53.700001
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889259,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 812538,
				"name": "Dan’kovichi",
				"coord": {
					"lon": 30.327499,
					"lat": 54.173058
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889259,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 621849,
				"name": "Slasteny",
				"coord": {
					"lon": 30.77194,
					"lat": 53.996109
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889260,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 622455,
				"name": "Ryzhkovichi",
				"coord": {
					"lon": 30.316668,
					"lat": 54.183334
				},
				"main": {
					"temp": -12.38,
					"temp_min": -12.38,
					"temp_max": -12.38,
					"pressure": 1016.18,
					"sea_level": 1039.11,
					"grnd_level": 1016.18,
					"humidity": 76
				},
				"dt": 1480889261,
				"wind": {
					"speed": 3.32,
					"deg": 301.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 623228,
				"name": "Poplavshchina",
				"coord": {
					"lon": 30.045834,
					"lat": 53.691113
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480889261,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 814943,
				"name": "Rudki",
				"coord": {
					"lon": 30.027222,
					"lat": 53.676388
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480889262,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 622034,
				"name": "Shklow",
				"coord": {
					"lon": 30.291945,
					"lat": 54.210835
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889192,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 628402,
				"name": "Glukhaya Seliba",
				"coord": {
					"lon": 30.021944,
					"lat": 53.659168
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480889263,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 619095,
				"name": "Zarovtsy",
				"coord": {
					"lon": 30.245832,
					"lat": 54.232498
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889263,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 621563,
				"name": "Stakhovshchina",
				"coord": {
					"lon": 30.016666,
					"lat": 53.639721
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480889263,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 812490,
				"name": "Nizovtsy",
				"coord": {
					"lon": 30.239721,
					"lat": 54.25111
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889264,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 628549,
				"name": "Gal’kovka",
				"coord": {
					"lon": 30.010834,
					"lat": 53.621113
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480889264,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 621769,
				"name": "Slobodka",
				"coord": {
					"lon": 30.250834,
					"lat": 54.277222
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889265,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 618716,
				"name": "Zolotva",
				"coord": {
					"lon": 29.983334,
					"lat": 53.599998
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480889265,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 629395,
				"name": "Chavusy",
				"coord": {
					"lon": 30.97122,
					"lat": 53.807529
				},
				"main": {
					"temp": -8.38,
					"temp_min": -8.38,
					"temp_max": -8.38,
					"pressure": 1014.15,
					"sea_level": 1038.62,
					"grnd_level": 1014.15,
					"humidity": 90
				},
				"dt": 1480889266,
				"wind": {
					"speed": 3.87,
					"deg": 319.502
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 64
				},
				"weather": [
					{
						"id": 803,
						"main": "Clouds",
						"description": "broken clouds",
						"icon": "04n"
					}
				]
			},
			{
				"id": 630245,
				"name": "Byalynichy",
				"coord": {
					"lon": 29.712629,
					"lat": 53.998348
				},
				"main": {
					"temp": -9.53,
					"temp_min": -9.53,
					"temp_max": -9.53,
					"pressure": 1016.5,
					"sea_level": 1039.43,
					"grnd_level": 1016.5,
					"humidity": 82
				},
				"dt": 1480889266,
				"wind": {
					"speed": 3.42,
					"deg": 298.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 629447,
				"name": "Bykhaw",
				"coord": {
					"lon": 30.246929,
					"lat": 53.519348
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480888976,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 619917,
				"name": "Vsenezh’ye",
				"coord": {
					"lon": 29.916668,
					"lat": 53.599998
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480889266,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 625240,
				"name": "Mezhniki",
				"coord": {
					"lon": 30.258333,
					"lat": 54.311668
				},
				"main": {
					"temp": -10.68,
					"temp_min": -10.68,
					"temp_max": -10.68,
					"pressure": 1013.34,
					"sea_level": 1038.78,
					"grnd_level": 1013.34,
					"humidity": 72
				},
				"dt": 1480889267,
				"wind": {
					"speed": 3.07,
					"deg": 285.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 20
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			},
			{
				"id": 628756,
				"name": "Dubrovo",
				"coord": {
					"lon": 29.9,
					"lat": 53.583332
				},
				"main": {
					"temp": -9.66,
					"temp_min": -9.66,
					"temp_max": -9.66,
					"pressure": 1020.56,
					"sea_level": 1040,
					"grnd_level": 1020.56,
					"humidity": 83
				},
				"dt": 1480889268,
				"wind": {
					"speed": 3.47,
					"deg": 306.002
				},
				"sys": {
					"country": ""
				},
				"clouds": {
					"all": 24
				},
				"weather": [
					{
						"id": 801,
						"main": "Clouds",
						"description": "few clouds",
						"icon": "02n"
					}
				]
			}
		]
	};

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'ng-app',
	        template: __webpack_require__(355)
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 355:
/***/ function(module, exports) {

	module.exports = "<div>\r\n    Hello\r\n</div>\r\n<hr>\r\n<ng-header></ng-header>\r\n<ng-footer></ng-footer>";

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(357));
	__export(__webpack_require__(359));


/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HeaderComponent = (function () {
	    function HeaderComponent() {
	    }
	    return HeaderComponent;
	}());
	HeaderComponent = __decorate([
	    core_1.Component({
	        selector: 'ng-header',
	        template: __webpack_require__(358)
	    }),
	    __metadata("design:paramtypes", [])
	], HeaderComponent);
	exports.HeaderComponent = HeaderComponent;


/***/ },

/***/ 358:
/***/ function(module, exports) {

	module.exports = "<div>WORLD</div>";

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    return FooterComponent;
	}());
	FooterComponent = __decorate([
	    core_1.Component({
	        selector: 'ng-footer',
	        template: __webpack_require__(360)
	    }),
	    __metadata("design:paramtypes", [])
	], FooterComponent);
	exports.FooterComponent = FooterComponent;


/***/ },

/***/ 360:
/***/ function(module, exports) {

	module.exports = "<footer>(c)2017. All rights reserved</footer>";

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(362);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(363)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/raw-loader/index.js!./app.css", function() {
				var newContent = require("!!./../node_modules/raw-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 362:
/***/ function(module, exports) {

	module.exports = "html,\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n* {\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}"

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});
//# sourceMappingURL=app.js.map