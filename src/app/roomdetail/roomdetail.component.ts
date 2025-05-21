import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css'],
  standalone : false
})
export class RoomDetailComponent implements OnInit {
  roomData: any;
  checkIn: string = '';
  checkOut: string = '';
  customerName: string = '';
  customerPhone: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (roomId) {
      this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${roomId}`).subscribe(
        (data: any) => {
          this.roomData = data;
          console.log('Room data loaded:', this.roomData);
        },
        (error) => {
          console.error('Error fetching room data:', error);
        }
      );
    }
  }

  bookRoom(): void {
    if (!this.checkIn || !this.checkOut || !this.customerName || !this.customerPhone) {
      alert('Please fill in all required fields.');
      return;
    }

    const bookingData = {
      roomId: this.roomData.id,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      customerName: this.customerName,
      customerPhone: this.customerPhone,
    };

    this.http.post('https://hotelbooking.stepprojects.ge/api/Reservation', bookingData).subscribe(
      () => alert('Room booked successfully!'),
      (error) => {
        console.error('Booking failed:', error);
        alert('Failed to book the room.');
      }
    );
  }
}
