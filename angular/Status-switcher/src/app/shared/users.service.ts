import { Injectable } from '@angular/core';
import { CounterSwitchesService } from './counter-switches.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: { name: string; status: string }[] = [
    { name: 'Max', status: 'active' },
    { name: 'Paul', status: 'active' },
    { name: 'Brock', status: 'active' },
    { name: 'Chad', status: 'inactive' },
  ];

  constructor(private counterService: CounterSwitchesService) {}

  switchToInactive(obj: { name: string; status: string }) {
    this.counterService.counter++;

    const index = this.users.findIndex(
      (array) => array.name === obj.name && array.status === obj.status
    );

    this.users[index].status = 'inactive';
  }

  switchToActive(obj: { name: string; status: string }) {
    this.counterService.counter++;
    const index = this.users.findIndex(
      (array) => array.name === obj.name && array.status === obj.status
    );

    this.users[index].status = 'active';
  }
}
