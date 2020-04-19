import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss'],
})
export class ActiveUsersComponent implements DoCheck {
  users: { name: string; status: string }[] = [];

  constructor(private userService: UsersService) {}

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('changed state');
    this.users = this.userService.users
      .filter((obj) => obj.status === 'active')
      .map((obj) => ({ name: obj.name, status: obj.status }));
  }

  onSwitch(obj) {
    this.userService.switchToInactive(obj);
  }
}
