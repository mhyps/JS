import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.scss'],
})
export class ListOfTasksComponent {
  @Input()
  public listOfTasks: Array<any> = [];

  deleteTask(index) {
    this.listOfTasks.splice(index, 1);
  }
}
