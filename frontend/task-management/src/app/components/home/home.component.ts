import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Task } from "src/app/interfaces/task";
import { TaskService } from "src/app/services/task.service";

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  taskStatuses = [
    {
      name: "To Do",
      value: "todo"
    },
    {
      name: "In Progress",
      value: "in_progress"
    },
    {
      name: "Done",
      value: "done"
    }
  ];

  userTasks!: Task[];

  constructor(private taskService: TaskService, private fb: FormBuilder) { }

  taskForm = new FormGroup({
    id: new FormControl<number | null>(null),
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
    status: new FormControl<string>('', Validators.required),
  });

  ngOnInit(): void {
    this.getUserTasks();
  }

  resetUserTask() {
    this.taskForm.reset();
  }

  openEditUserTask(userTask: Task) {
    const userTaskObject = {
      id: userTask.id,
      title: userTask.title,
      description: userTask.description,
      status: userTask.status
    };

    this.taskForm.patchValue(userTaskObject);
  }

  addOrUpdateUserTask() {
    let taskFormValue = this.taskForm.value;

    if (this.taskForm.get("id")?.value) {
      // UPDATE
      this.taskService.putUserTask(taskFormValue).subscribe(
        (response) => {
          console.log("Successfully updated task");
          this.getUserTasks();
          $("#addTaskModal").modal('hide');
        },
        (error) => {
          $("#addTaskModal").modal('hide');
          console.error("Error updating task");
        }
      )
    }
    else {
      // CREATE
      this.taskService.addUserTask(taskFormValue).subscribe(
        (response) => {
          this.getUserTasks();
          $("#addTaskModal").modal('hide');

          console.log("Successfully saved task");
          this.resetUserTask();
        },
        (error) => {
          $("#addTaskModal").modal('hide');
          console.error("Error saving task");
        }
      )
    }
  }

  getUserTasks() {
    // REQUEST
    this.taskService.getUserTasks().subscribe(
      (response) => {
        this.userTasks = response;
      },
      (error) => {
        console.error("Error fetching user tasks");
      }
    )
  }

  deleteUserTask(id: number) {
    // DELETE
    this.taskService.deleteUserTask(id).subscribe(
      (response) => {
        console.info("Succesfully deleted the task");
        this.getUserTasks();
      },
      (error) => {
        console.error("Error deleting the task");
      }
    )
  }

}
