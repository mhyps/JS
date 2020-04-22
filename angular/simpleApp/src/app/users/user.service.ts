import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { id: 1, name: 'Bob', lastName: 'Boss', role: 'admin' },
    { id: 2, name: 'Patrick', lastName: 'Plysh', role: 'worker' },
    { id: 3, name: 'Kate', lastName: 'Jens', role: 'worker' },
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  constructor() {}
}
