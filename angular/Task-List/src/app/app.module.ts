import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTasksHeaderComponent } from './add-tasks-header/add-tasks-header.component';
import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddTasksHeaderComponent, ListOfTasksComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
