import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FeedComponent } from './feed/feed.component';
import { NbLayoutModule, NbSidebarModule, NbChatModule } from '@nebular/theme';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [ChatComponent, UsersListComponent, FeedComponent],
  exports: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbChatModule,
  ],
})
export class ChatModule {}
