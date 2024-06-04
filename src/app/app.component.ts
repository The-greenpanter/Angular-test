import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from './weather.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public lineChartData: ChartDataset[] = [{ data: [], label: 'Temperature' }];
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
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const location = params['id'];
      this.weatherService.getForecast(location).subscribe((data: any) => {
        this.lineChartLabels = data.map((d: any) => new Date(d.time).toLocaleString());
        this.lineChartData[0].data = data.map((d: any) => d.temperature);
      });
      
    });
  }
}
