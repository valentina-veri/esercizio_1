import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []

  constructor(private ts: TaskService) { }

  ngOnInit(): void {
    this.ts.getTasks()
      .subscribe({
        next: (tasks) => {
          this.tasks = tasks;
          console.log(this.tasks)
        }
      })
  }

}
