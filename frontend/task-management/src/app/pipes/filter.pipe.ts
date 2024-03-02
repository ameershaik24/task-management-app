import { Pipe, PipeTransform } from "@angular/core";

import { Task } from "../interfaces/task";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userTasks: Task[], selectedStatus: string): Task[] {
    let filteredTasks = userTasks;

    if (selectedStatus != "") {
      filteredTasks = userTasks.filter(task => task.status.toLowerCase() == selectedStatus);
    }

    return filteredTasks
  }

}
