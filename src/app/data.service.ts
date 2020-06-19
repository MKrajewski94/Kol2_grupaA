import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IData } from './data';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<IData[]>{
    return this.http.get<IData[]>("https://kol2tai.herokuapp.com");
  }
  getSpecData(): Observable<IData[]>{
    return this.http.get<IData[]>("https://kol2tai.herokuapp.com");
  }
}
