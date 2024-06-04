import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getForecast(location: string): Observable<any> {
    let url = '';
    if (location === 'TOP') {
      url = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';
    } else if (location === 'LWX') {
      url = 'https://api.weather.gov/gridpoints/LWX/31,80/forecast';
    }

    return this.http.get(url).pipe(
      map((response: any) => {
        return response.properties.periods.map((period: any) => ({
          time: period.startTime,
          temperature: period.temperature
        }));
      })
    );
  }
}
