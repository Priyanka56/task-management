import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './404/page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'task-dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
