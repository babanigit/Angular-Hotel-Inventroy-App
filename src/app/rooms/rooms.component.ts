import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent {

  hotelName= "Hilton Hotel"
  numberOfRooms= 10
  hideRooms=false

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  toggle() {
    this.hideRooms=!this.hideRooms;
  }

}
