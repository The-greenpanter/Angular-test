import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-weather',
  templateUrl: '/src/app/weather/weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public lineChartData: ChartDataset<'line'>[] = [{ data: [], label: 'Temperature' }];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartPlugins = [];
  public lineChartType: ChartType = 'line';

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const location = params.get('id');
      if (location) {
        this.weatherService.getForecast(location).subscribe((data: any) => {
          this.lineChartLabels = data.properties.periods.map((d: any) => new Date(d.startTime).toLocaleString());
          this.lineChartData[0].data = data.properties.periods.map((d: any) => d.temperature);
        });
      }
    });
  }
}
