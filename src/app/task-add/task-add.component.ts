import { Component } from '@angular/core';
import { TaskAddDTO } from '../model/task';
import { TaskService } from '../service/task.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {

  nuovoTask: TaskAddDTO = new TaskAddDTO()

  constructor(private ts: TaskService, private router:Router) {

  }

  aggiungiTask() {
    this.ts.addTask(this.nuovoTask)
      .subscribe(dati => {
        this.nuovoTask = new TaskAddDTO()
      })

      this.router.navigate(["/prodotti"])
  }
}
