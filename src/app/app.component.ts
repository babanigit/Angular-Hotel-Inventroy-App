import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
    selector: 'hinv-root',
    standalone: true,
    // template
    templateUrl: './app.component.html',
    // template: `
    // <h1>  hello from the inline template </h1>
    // <p> hey there I am learning angular</p>
    // `,
    // scss
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RoomsComponent ]
})

export class AppComponent {
  title = 'hotel_inventory_app';
}
