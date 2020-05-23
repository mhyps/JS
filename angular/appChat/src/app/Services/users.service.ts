import { Injectable } from '@angular/core';
import { user } from '../chat/users-list/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersChanged = new Subject<user[]>();

  private users: user[] = [
    new user(1, 'Mateusz'),
    new user(2, 'Piotr'),
    new user(3, 'Paweł'),
  ];

  getUsers(): user[] {
    return this.users.slice();
  }

  getUser(index: number): user {
    return this.users[index];
  }

  getSize(): number {
    return this.users.length;
  }

  addUser(newUser: user): void {
    this.users.push(newUser);
    this.usersChanged.next(this.users.slice());
  }
}
