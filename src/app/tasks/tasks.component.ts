import { Component, Inject, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name? : string;
  @Input({required: true}) userId! : string;
  isAddingtask = false;

  constructor(private tasksService: TasksService) {
  }

  
  /**
   * 選択中ユーザのタスクのみにフィルターしたものを取得
   */
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }
  
  onStartAddTask(){
    this.isAddingtask = true;
  }

  onCloseDialog(){
    this.isAddingtask = false;
  }

}
