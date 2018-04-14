import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Task } from './task';

@Injectable()
export class TaskService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers});
  }

  findAll(): Observable<Task[]> {
    return this.http
               .get('http://localhost:8080/tasks')
               .map((res: Response) => res.json());
  }

  create(task: Task): Observable<Task> {
    return this.http
               .post('http://localhost:8080/tasks', JSON.stringify(task), this.options)
               .map((res: Response) => res.json());
  }
}
