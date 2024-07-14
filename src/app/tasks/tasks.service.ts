import { Injectable } from '@angular/core';
import { NewTaskData, Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks : Task[] = [
    {
      id: "t1",
      userId: "u1",
      title: "tile",
      summary: "summaryrrr",
      dueDate: "2024/1/2"
    },
    {
      id: "t2",
      userId: "u1",
      title: "tile2",
      summary: "summaryrrr2",
      dueDate: "2024/1/3"
    }
  ];

  constructor() { 
    const tasks = localStorage.getItem("tasks");
    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId : string){
    return this.tasks.filter(task => userId === task.userId);
  }

  addTask(taskData : NewTaskData, userId : string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId ,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id : string){
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
