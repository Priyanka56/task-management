import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

import { MockTaskService } from './mock-task.service';

describe('TaskService', () => {
  let service: TaskService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
     service = TestBed.inject(TaskService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('updateTaskList method should update the task list with new item', () => {
    let itemToUpdateInList = {
      name: 'Pay Light Bill',
      status: 'TO_DO',
    };
    let updatedTaskList = MockTaskService.updatedTasks;
    service.updateTaskList(itemToUpdateInList);
    expect(service.tasks).toEqual(updatedTaskList);
  });

  it('updateTaskStatus method should update the status list with new item', () => {
    let itemToUpdateInStatusList = {
      name: 'PARTIALLY_DONE',
      label: 'Partially Done',
      showAddCardForm: false,
    };
    let updatedStatusList = MockTaskService.updatedTaskStatuses;
    service.updateTaskStatus(itemToUpdateInStatusList);
    expect(service.taskStatuses).toEqual(updatedStatusList);
  });

  it('checkIfStatusExists method should check if name exists in statuses array and return the object', () => {
    let name = 'DONE';    
    expect(service.checkIfStatusExists(name)).toEqual(MockTaskService.statusItemFound);
  });

  it('checkIfStatusExists method should check if name exists in statuses array and return the undefined if not found', () => {
    let name = 'Complete';    
    expect(service.checkIfStatusExists(name)).toEqual(undefined);
  });
});
