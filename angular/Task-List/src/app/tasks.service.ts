import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private task: { task: string; date: Date };

  constructor() {}

  getTask(): object {
    return this.task;
  }
}
