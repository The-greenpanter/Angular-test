import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data.model';  // (Optional) Import if using the model

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  stationId: string = '';
  forecastData: any = null;  // Can use WeatherData type if defined
  chartOptions: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.stationId = this.route.snapshot.params['stationId'];
    this.getForecast();
  }

  getForecast() {
    this.weatherService.getForecast(this.stationId)
      .subscribe(data => {
        this.forecastData = data;
        this.prepareChartData();
      });
  }

  prepareChartData() {
    // Extract temperature data and format for Chart.js
    const labels: string[] = [];
    const temperatures: number[] = [];
    // ... (Logic to extract labels and temperatures from forecastData)

    this.chartOptions = {
      type: 'line',  // Chart type: line chart in this case
      data: {
        labels,
        datasets: [{
          label: 'Temperature (°C)',
          data: temperatures,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        // Additional Chart.js configuration options for scaling, titles, etc.
      }
    };
  }
}
