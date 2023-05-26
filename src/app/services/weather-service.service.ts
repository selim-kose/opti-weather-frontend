import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../common/forecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080/api'


  getForecast(): Observable<Forecast> {
    return this.httpClient.get<Forecast>(`${this.baseUrl}/get`);
  }
}
