import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../task/task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule], //ngModel,入力の双方向バインディングを使用するために必要
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId! : string;
  @Output() closeDialog = new EventEmitter<void>();
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  constructor(
    private tasksService: TasksService) {
  }

  onCloseDialoge(){
    this.closeDialog.emit();
  }

  
  onSubmit(){
    console.log(this.enteredTitle, this.enteredSummary, this.enteredDate);
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.onCloseDialoge();
  }

}
