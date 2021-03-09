import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockTaskService } from '../services/mock-task.service';
import { TaskService } from '../services/task.service';

import { TaskDashboardComponent } from './task-dashboard.component';

describe('TaskDashboardComponent', () => {
  let component: TaskDashboardComponent;
  let fixture: ComponentFixture<TaskDashboardComponent>;
  let service: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDashboardComponent],
      providers: [TaskService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(TaskService);
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  it('Subscribing to $getTaskList should return list of tasks', (done: DoneFn) => {
    service.$getTaskList.subscribe((tasks) => {
      expect(component.taskList).toEqual(tasks);
      done();
    });
  });

  it('Subscribing to $getTaskStatusList should return list of task statuses', (done: DoneFn) => {
    service.$getTaskStatusList.subscribe((statuses) => {
      expect(component.taskStatuses).toEqual(statuses);
      done();
    });
  });

  it('addItemToListButtonClicked method should be called on click of Add another list button', () => {
    component.addItemToListButtonClicked();
    expect(component.isAddListClicked).toBeTrue();
  });

  it('addItemToList method should be called on click of save list button should show list allready exists error', () => {
    component.addItemToList('Done');
    fixture.detectChanges();
    expect(component.listExistsError).toBeTrue();
    component.isAddListClicked = false;
    expect(component.isAddListClicked).toBeFalse();
  });

  it('addItemToList method should be called on click of save list button of add list form container', () => {
    component.addItemToList('Partially Done');
    fixture.detectChanges();
    expect(component.listExistsError).toBeFalse();
    expect(component.taskStatuses).toEqual(MockTaskService.updatedTaskStatuses);
    component.isAddListClicked = false;
    expect(component.isAddListClicked).toBeFalse();
  });

  it('addCardTolist method should be called on click of save card button of add card form container', () => {
    let cardItem = {
      name: 'Pay Light Bill',
      status: 'TO_DO',
    };
    component.addCardTolist(cardItem);
    fixture.detectChanges();
    expect(component.taskList).toEqual(MockTaskService.updatedTasks);
  });

  it('cancelClicked method should be called on click of cancel button of add list form container', () => {
    component.cancelClicked();
    expect(component.isAddListClicked).toBeFalse();
  });

  it('cancelAddCardClicked method should be called on click of cancel button of add card form container', () => {
    let taskStatus = 'DONE';
    spyOn(component, 'changeAddCardFormState');
    component.cancelAddCardClicked(taskStatus);
    fixture.detectChanges();
    expect(component.changeAddCardFormState).toHaveBeenCalledWith(taskStatus);
  });
});
