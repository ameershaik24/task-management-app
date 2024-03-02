import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Task } from "../interfaces/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  serverUrl: string = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  // CREATE
  addUserTask(payload: any): Observable<Task> {
    const apiPath = "/tasks/tasks";
    const apiUrl = `${this.serverUrl}${apiPath}`

    return this.http.post<Task>(apiUrl, payload);
  }

  // READ
  getUserTasks(): Observable<Task[]> {
    const apiPath = "/tasks/tasks";
    const apiUrl = `${this.serverUrl}${apiPath}`

    return this.http.get<Task[]>(apiUrl);
  }

  // UPDATE
  putUserTask(payload: any): Observable<Task> {
    const id = payload["id"];
    const apiPath = `/tasks/tasks/${id}`;
    const apiUrl = `${this.serverUrl}${apiPath}`

    return this.http.put<Task>(apiUrl, payload);
  }

  // DELETE
  deleteUserTask(id: number): Observable<null> {
    const apiPath = `/tasks/tasks/${id}`;
    const apiUrl = `${this.serverUrl}${apiPath}`

    return this.http.delete<null>(apiUrl);
  }
}
