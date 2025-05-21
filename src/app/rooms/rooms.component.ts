import { Component } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: false,
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  minPrice = 0;
  maxPrice = 1000;
  roomType = '';
  checkInDate = '';
  checkOutDate = '';
  guests = 2;
  rooms: any[] = [];

  constructor(
    private roomService: RoomService,
    private router: Router 
  ) {
    this.applyFilter();
  }

  applyFilter() {
    this.roomService.getAllRooms().subscribe({
      next: (allRooms) => {
        this.rooms = allRooms.filter(room =>
          room.pricePerNight >= this.minPrice &&
          room.pricePerNight <= this.maxPrice &&
          (!this.roomType || this.matchRoomType(room.roomTypeId)) &&
          room.maximumGuests >= this.guests
        );
        console.log('Filtered Rooms:', this.rooms);
      },
      error: (error: any) => {
        console.error('Error fetching rooms:', error);
      }
    });
  }

  resetFilter() {
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.roomType = '';
    this.checkInDate = '';
    this.checkOutDate = '';
    this.guests = 2;
    this.rooms = [];
  }

  matchRoomType(typeId: number): boolean {
    const map: { [key: string]: number } = {
      'Single Room': 1,
      'Double Room': 2,
      'Deluxe Room': 3
    };
    return map[this.roomType] === typeId;
  }

  mapRoomType(typeId: number): string {
    const map: { [key: number]: string } = {
      1: 'Single Room',
      2: 'Double Room',
      3: 'Deluxe Room'
    };
    return map[typeId] || 'Unknown Room Type';
  }
}
