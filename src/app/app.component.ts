import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private readonly weatherService: WeatherService) { }

  city: string = 'Philadelphia';
  weatherData?: WeatherData;
  sideBarOpen = false;

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }

  onSubmit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    })
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  onSuggestion(city: string) {
    this.getWeatherData(city);
    this.city = '';
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
