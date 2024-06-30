import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IRoom, IRooms } from './rooms';


@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent {

  hotelName = "Hilton Hotel"
  numberOfRooms = 10
  hideRooms = false

  rooms: IRoom = {
    totalRooms: 20,
    availableRooms : 10,
    bookedRooms: 5
  }

  roomList: IRooms[] = [
    {
      roomNumber: 32,
      roomType: "deluxe Room",
      amenities: "air conditioner free wifi, tv",
      price: 1000,
      photos: "https.google.com",
      checkinTime: new Date("11-nov-2021"),
      checkoutTime: new Date("12-nov-2021"),
      rating: 4
    },
    {
      roomNumber: 42,
      roomType: "small Room",
      amenities: "air conditioner free wifi, tv",
      price: 1000,
      photos: "https.gyro.com",
      checkinTime: new Date("11-nov-2021"),
      checkoutTime: new Date("12-nov-2021"),
      rating: 4
    },
    {
      roomNumber: 97,
      roomType: "medium Room",
      amenities: "air conditioner free wifi, tv",
      price: 1000,
      photos: "https.hello.com",
      checkinTime: new Date("11-nov-2021"),
      checkoutTime: new Date("12-nov-2021"),
      rating: 4
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  someVariable = "value2"

}
