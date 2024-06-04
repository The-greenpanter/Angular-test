import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { WeatherData } from '../weather-data.model';  // Import if using the model

@Component({
  selector: 'weather-app',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
}),
export class WeatherComponent implements OnInit {

  stationId: string = '';
  forecastData: any = null;  // Can use WeatherData type if defined
  chartOptions: any;
lineChartLabels: any;
lineChartData: any;
lineChartOptions: any;
lineChartColors: any;
lineChartLegend: any;
lineChartType: any;
lineChartPlugins: any;

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
    const labels = [];
    const temperatures = [];
    // ... (Logic to extract labels and temperatures from forecastData)
    this.chartOptions = {
      // Configure Chart.js options: labels, datasets, etc.
    };
  }
}
