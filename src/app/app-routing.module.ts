import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskAddComponent } from './task-add/task-add.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "prodotti", component: TaskListComponent },
  { path: "prodotti/nuovo", component: TaskAddComponent},
  { path: "prodotti/:id", component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
