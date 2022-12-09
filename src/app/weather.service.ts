import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './enviroment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private  http:HttpClient) { }
  getweather(cityName:string){
    this.http.get(environment.weatherapiBAseURL), {
      header: new HttpHeaders()
      .set(environment.XrapidHostNAme, environment.XrapidHostValue)
      .set(environment.XrapidKeyHostNAme, environment.XrapidKeyHosValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units','metric')
      .set('mode', 'json ')
   
    }
  }
}
