import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';

const routes: Routes = [{ path: '', component: ChatComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChatRoutingModule {}
