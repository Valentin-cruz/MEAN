import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city: string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&APPID=62ee15950957d712fe0ee85a0afaa84b`)
    .pipe(map((data:any) => data.json()))
    .toPromise();
  }

}