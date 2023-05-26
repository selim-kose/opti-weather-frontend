import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forecast } from 'src/app/common/forecast';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  forecast!: Forecast;

  constructor(private weatherService: WeatherServiceService, private router: Router) { }


  ngOnInit(): void {
    this.getForcast();
  }

  getForcast() {
    this.router.navigateByUrl('/get')
    this.weatherService.getForecast().subscribe(data => {
      this.forecast = data
      console.log(this.forecast.temp)
    });
  }

}
