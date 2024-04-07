import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit {

  task?: Task

  constructor(private ts: TaskService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.ts.getTasksById(id)
      .subscribe(task => this.task = task)
  }

rimuovi(){
this.ts.deleteTask(this.task!.id)
.subscribe(dati => this.router.navigate(['/prodotti']))
}

}
