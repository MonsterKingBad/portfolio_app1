import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class api2 {

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get<any[]>("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll");
  }
  
}
