import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  
  // template
  templateUrl: './app.component.html',
  // template: `
  // <h1>  hello from the inline template </h1>
  // <p> hey there I am learning angular</p>
  // `,

  // scss
  styleUrl: './app.component.scss',
  // styles:[`
  //   h1 { color:red;}
  //   `]
})

export class AppComponent {
  title = 'hotel_inventory_app';
}
