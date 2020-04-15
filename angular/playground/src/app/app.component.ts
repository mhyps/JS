import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  even: Number;
  odd: Number;

  onChangeLister(number) {
    if (number % 2 === 0) {
      this.even = number;
    } else {
      this.odd = number;
    }
  }
}
