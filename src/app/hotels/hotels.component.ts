import { Component } from '@angular/core';
import { api2 } from '../api2.service'; // Make sure this is the correct path

@Component({
  selector: 'app-hotels',
  standalone: false,
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  hotels: any[] = [];

  constructor(private apiService: api2) {
    this.apiService.getAllData().subscribe(data => {
      this.hotels = data;
    });
  }
}
