import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }

  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${environment.API_BASE_URL}?q=${city}&units=imperial&appid=${environment.API_KEY}`)
  }
}
