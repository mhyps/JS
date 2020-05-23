import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { user } from '../chat/users-list/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    // zmienic metode zdobywania id po podlaczeniu backendu
    const usersSize = this.userService.getSize();
    const newUser = new user(usersSize + 1, form.value.displayName);
    this.userService.addUser(newUser);
    this.router.navigate(['chat']);
  }
}
