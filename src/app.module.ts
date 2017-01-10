import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { WeatherService } from './services';

import { AppComponent } from './app.component';

import {
    HeaderComponent,
    FooterComponent
} from './containers';

import 'style!./app.css';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        AppComponent
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule { }