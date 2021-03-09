// Angular related import
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Models
import { Task, TaskStatus } from '../models/task.model.';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [
    {
      name: 'Pay electricity bill',
      status: 'TO_DO'
    },
    {
      name: 'Iron clothes',
      status: 'IN_PROGRESS',
    },
    {
      name: 'Buy running shoes',
      status: 'DONE',
    },
    {
      name: 'Make grocery list',
      status: 'TO_DO',
    },
    {
      name: 'Buy vegetables',
      status: 'IN_PROGRESS',
    },
  ];
  public taskStatuses: TaskStatus[] = [];
  public $getTaskList = new BehaviorSubject<Task[]>(this.tasks);
  public $getTaskStatusList = new BehaviorSubject<TaskStatus[]>([]);

  constructor() {
    this.taskStatuses = [];
    this.tasks.forEach((task) => {
      let statusName = task.status.toUpperCase().split('_').join(' ');
      if (!this.checkIfStatusExists(task.status)) {
        this.taskStatuses.push({
          name: task.status,
          label: statusName,
          showAddCardForm: false,
        });
      }
    });
    this.$getTaskStatusList.next(this.taskStatuses);
  }
  /**
   *
   * @param taskToAdded: task will be added in the list
   */
  public updateTaskList(taskToAdded: Task): void {
    this.tasks.push(taskToAdded);
    this.$getTaskList.next(this.tasks);
  }

  /**
   *
   * @param taskStatusToBeAdded: task status that need to be added in list
   */
  public updateTaskStatus(taskStatusToBeAdded: TaskStatus): void {
    this.taskStatuses.push(taskStatusToBeAdded);
    this.$getTaskStatusList.next(this.taskStatuses);
  }

  public checkIfStatusExists(name: string) : TaskStatus | undefined {
    return this.taskStatuses.find(
      (status) => status.name.toLowerCase() == name.toLowerCase()
    );
  }
}
