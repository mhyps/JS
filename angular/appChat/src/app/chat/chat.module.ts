import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FeedComponent } from './feed/feed.component';
import { MsgInputComponent } from './msg-input/msg-input.component';
import { NbLayoutModule, NbSidebarModule, NbChatModule } from '@nebular/theme';

@NgModule({
  declarations: [
    ChatComponent,
    UsersListComponent,
    FeedComponent,
    MsgInputComponent,
  ],
  exports: [ChatComponent],
  imports: [CommonModule, NbLayoutModule, NbSidebarModule, NbChatModule],
})
export class ChatModule {}
