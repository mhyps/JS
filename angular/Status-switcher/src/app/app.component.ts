import { Component, OnInit, DoCheck } from '@angular/core';
import { CounterSwitchesService } from './shared/counter-switches.service';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  counter: number;

  constructor(
    private userService: UsersService,
    private counterService: CounterSwitchesService
  ) {}
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.counter = this.counterService.counter;
  }
}
