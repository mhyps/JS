import { Component, Output, EventEmitter } from '@angular/core';
import { ListOfTasksModel } from '../list-of-tasks-model';

@Component({
  selector: 'app-add-tasks-header',
  templateUrl: './add-tasks-header.component.html',
  styleUrls: ['./add-tasks-header.component.scss'],
})
export class AddTasksHeaderComponent {
  taskInput: string;
  listOfTasks: Array<ListOfTasksModel> = [];

  @Output()
  public found = new EventEmitter<any>();

  addToList(): void {
    const task = new ListOfTasksModel(this.taskInput, new Date());
    this.taskInput = '';
    this.listOfTasks.push(task);
    this.found.emit(this.listOfTasks);
  }
}
