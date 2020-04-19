import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss'],
})
export class InactiveUsersComponent implements OnInit, DoCheck {
  users: { name: string; status: string }[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.users = this.userService.users.reduce((user, { name, status }) => {
      status === 'inactive' && user.push({ name, status });
      return user;
    }, []);
  }

  onSwitch(obj) {
    this.userService.switchToActive(obj);
  }
}
