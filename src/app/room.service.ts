import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  [x: string]: any;
  private apiUrl = 'https://hotelbooking.stepprojects.ge/api/Rooms/GetAll';

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
