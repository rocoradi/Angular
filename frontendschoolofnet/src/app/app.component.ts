import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './services/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private task: Task = new Task();
  private tasks: Task[] = new Array();

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    console.log('teste');
    return this.findAll();
  }

  findAll(): void {
    this.taskService.findAll().subscribe(res => {
      console.log(res);
      this.tasks = res;
    });
  }

  create(): void {
    this.taskService
        .create(this.task)
        .subscribe(response => {
          return this.findAll();
    });
  }
}
