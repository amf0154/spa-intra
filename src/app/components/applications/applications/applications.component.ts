import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { Navigation } from '@core/enums/navigation.enum';
import { ApiService } from '@core/services/api.service';
import { environment } from 'src/environments/environment';
import { Tasks } from '@core/interfaces/tasks';
import { Task } from '@core/interfaces/task';
import { NewTask } from '@core/interfaces/newTask';
import { ResponseStatus } from '@core/interfaces/responseStatus';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})

export class ApplicationsComponent implements OnInit {
  public tasks = new Array();
  public showCreatingForm: boolean = false;
  public showEdittingForm: boolean = false;
  public editMode: boolean = false;
  public responseMessage: string = null;
  public statuses = new Array();
  public users = new Array();
  public addingForm = {} as NewTask;
  public taskById = {} as Task;
  public responseStatus = {} as ResponseStatus;
  private priorities = new Array();
  private message: string;
  private result: boolean;
  private showStatus: boolean;

  constructor(
    private navigationService: NavigationService, 
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {
    this.navigationService.setNavigation(Navigation.applications);
  }

  ngOnInit() {
    this.getPriorities();
  }

  private getPriorities = () => {
    this.apiService.get(environment.Priorities).subscribe((priorities: []) => {
      this.priorities = priorities;
      this.getTasks();
    }, error => alert(error))
  }
  
  public getPriorityColor = (id: Number) => '5px solid' + this.priorities.filter(priority => priority.id == id)[0].rgb;

  private getTasks = () => {
    this.apiService.get(environment.GetTasks).subscribe((tasks: Tasks) => {
      this.tasks = tasks.value.reverse();
    }, error => alert(error));
  }

  public createTaskButton = () => {
    this.showEdittingForm ? this.showEdittingForm = !this.showEdittingForm : '';
    this.showCreatingForm = !this.showCreatingForm
  };

  public editTaskButton = () => this.showEdittingForm = !this.showEdittingForm;

  private setResponseStatus(message: string, result: boolean, showStatus: boolean){
    this.message = message;
    this.result = result;
    this.showStatus = showStatus;
  }

  private clearStatusMessage = (fun?) => setTimeout(()=> {
    this.setResponseStatus.call(this.responseStatus,null,false,false); 
    if(fun) fun()
  }, 1500);

  public addTask = () => {
    this.apiService.post(environment.Task,this.addingForm).subscribe((res: Task)=>{
      this.getPriorities();
      this.addingForm.description = "";
      this.addingForm.name = "";
      this.setResponseStatus.call(this.responseStatus,'Задача успешно добавлена!',true,true);
      this.clearStatusMessage(this.createTaskButton);
    },
    error=> this.setResponseStatus.call(this.responseStatus,error.message,true,true));
  }

  public showTask = (id: number) =>{
    this.showCreatingForm ? this.showCreatingForm = !this.showCreatingForm : '';
    this.apiService.get(environment.TaskById + id).subscribe((task: Task)=>{
      this.taskById = task;
      this.getStatuses();
      this.showEdittingForm = true;
    }, error=>alert(error.message));
  }

  public addComment = () => {
    this.responseMessage = 'Комментарий успешно добавлен!';
    this.sendData();
  }

  public editTask = () => this.editMode = true;

  public saveTask = () => {
    this.editMode = false;
    this.responseMessage = 'Задача обновлена!';
    delete this.taskById.lifetimeItems;
    delete this.taskById.tags;
    this.sendData();
  }

  private sendData = () => {
    this.apiService.put(environment.Task, this.taskById).subscribe(() => {
      this.setResponseStatus.call(this.responseStatus,this.responseMessage,true,true);
      this.clearStatusMessage();
      this.showTask(this.taskById.id);
    }, error=>alert(error.message));
  }

  private getStatuses = () => {
    this.apiService.get(environment.Statuses).subscribe((statuses: []) => {
      this.statuses = statuses;
      this.getUsers();
    }, error => alert(error));
  }

  private getUsers = () => {
    this.apiService.get(environment.Users).subscribe((users: []) => {
      this.users = users;
    }, error => alert(error));
  }

  public commentsFilter = comments => comments.filter(comment=> comment.comment);

  sanitizeServersideHtml(untrustedHtml: string) {
    return this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
  }
}
