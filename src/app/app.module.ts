import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
