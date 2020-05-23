import { Component, OnInit } from '@angular/core';
import { user } from '../users-list/user.model';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  loggedUser: user = undefined;
  numberOfOnlineUsers: number = undefined;
  title: string = '';
  chat: any[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.numberOfOnlineUsers = this.userService.getSize();
    this.title = 'Number of online users: ' + this.numberOfOnlineUsers;
    this.loggedUser = this.userService.getUser(this.numberOfOnlineUsers - 1);
    console.log(this.loggedUser.name);
  }

  sendMessage(chat, event) {
    chat.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: this.loggedUser.name,
        // avatar:'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
      },
    });
  }
}
