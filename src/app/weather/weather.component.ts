import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { WeatherData } from '../weather-data.model';  // Import if using the model

@Component({
  selector: 'weather-app',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  stationId: string = '';
  forecastData: WeatherData | null = null;  // Use WeatherData type if defined
  chartOptions!: ChartOptions;

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
    // ... (Logic to extract date/time from forecastData and format for labels)
    // ... (Logic to extract temperature values from forecastData and populate temperatures)

    this.chartOptions = {
      responsive: true, // Makes the chart responsive to screen size
      scales: {
        xAxes: 
          {
            ticks: {
              display: true  // Display labels on the X-axis
            }
          }
        ,
        yAxes: 
          {
            ticks: {
              display: true  // Display labels on the Y-axis
            }
          }
      }
    };
  }
}
