// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Routing module
import { TasksRoutingModule } from './tasks-routing.module';
// Components
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskListComponent } from './task-dashboard/task-list/task-list.component';
import { TaskListItemComponent } from './task-dashboard/task-list/task-list-item/task-list-item.component';
// Pipes
import { FilterDataPipe } from './pipe/filter-data.pipe';
import { AddCardComponent } from './task-dashboard/task-list/add-card/add-card.component';
import { AddListFormComponent } from './task-dashboard/add-list-form/add-list-form.component';

@NgModule({
  declarations: [
    TaskDashboardComponent,
    TaskListComponent,
    TaskListItemComponent,
    FilterDataPipe,
    AddCardComponent,
    AddListFormComponent,
  ],
  imports: [CommonModule, TasksRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [FilterDataPipe],
})
export class TasksModule {}
