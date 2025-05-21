import { Component } from '@angular/core';
import { HttpService } from '../api.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css'],
  standalone: false
})
export class GuestsComponent {
[x: string]: any;

  hotels: any[] = [];

  constructor(private httpService: HttpService) {
    this.httpService.getAllData().subscribe(data => {
      this.hotels = data;
    });
  }
}
