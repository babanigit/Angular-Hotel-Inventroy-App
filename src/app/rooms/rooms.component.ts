import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IRoom } from './rooms';


@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent {

  hotelName= "Hilton Hotel"
  numberOfRooms= 10
  hideRooms=false
  
  rooms:IRoom = {
    totalRooms: 20,
    // availableRooms : 10,
    bookedRooms : 5
  }

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  toggle() {
    this.hideRooms=!this.hideRooms;
  }

  someVariable = "value2"

}
