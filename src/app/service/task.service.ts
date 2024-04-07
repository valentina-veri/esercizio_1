import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskAddDTO } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:3000/tasks")
  }

  getTasksById(id: number): Observable<Task> {
    return this.http.get<Task>("http://localhost:3000/tasks/" + id)
  }

  addTask(task: TaskAddDTO): Observable<Task> {
    return this.http.post<Task>("http://localhost:3000/tasks", task)
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete("http://localhost:3000/tasks/" + id)
  }
}
