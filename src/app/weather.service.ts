import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getForecast(stationId: string): Observable<any> {
    const url = `https://api.weather.gov/gridpoints/${stationId}/31,80/forecast`;
    return this.http.get(url);
  }
}
