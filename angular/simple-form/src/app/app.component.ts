import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscriptions: Array<string> = ['Basic', 'Advanced', 'Pro'];
  onSubmit(form: NgForm): void {
    console.log(form.value);
    form.reset();
  }
}
