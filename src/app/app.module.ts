import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { MainContainerComponent, CardsContainer } from './containers';

import {
    AppBarComponent,
    InfoCardComponent,
    SidemenuComponent,
    CardCreatorComponent,
    MapComponent
} from './ui';

import { WeatherService } from './services'
// styles
import 'style!./app.css';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MainContainerComponent,
        AppBarComponent,
        InfoCardComponent,
        CardsContainer,
        SidemenuComponent,
        CardCreatorComponent,
        MapComponent
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule { }