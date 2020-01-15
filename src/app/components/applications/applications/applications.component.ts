import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { Navigation } from '@core/enums/navigation.enum';
import { ApiService } from '@core/services/api.service';
import { environment } from 'src/environments/environment';
import { Tasks } from '@core/interfaces/tasks';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  public tasks = [];
  private priorities = [];
  public showCreatingForm: boolean = false;
  public showEdittingForm: boolean = true;
  public addingForm = {
    name: '',
    description: ''
  }
  public responseStatus = {
    message: null,
    result: false,
    showStatus: false
  }
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
    }, error => alert(error), 
    () => console.log(this.tasks));
  }

  // [innerHTML]="sanitizeServersideHtml(task.name)"
  sanitizeServersideHtml(untrustedHtml: string) {
    return this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
  }
  searchText: string;
  public createTaskButton = () => this.showCreatingForm = !this.showCreatingForm;
  public editTaskButton = () => this.showEdittingForm = !this.showEdittingForm;

  message: string;
  result: boolean;
  showStatus: boolean;
  private setResponseStatus(message: string, result: boolean, showStatus: boolean){
    this.message = message;
    this.result = result;
    this.showStatus = showStatus;
  }
  private clearStatusMessage = (fun?) => setTimeout(()=>{
    this.setResponseStatus.call(this.responseStatus,null,false,false); 
    if(fun) fun()
  }, 1500);

  public addTask = () => {
    this.apiService.post(environment.AddTask,this.addingForm).subscribe(res=>{
      this.getPriorities();
      this.addingForm.description = "";
      this.addingForm.name = "";
      this.setResponseStatus.call(this.responseStatus,'Задача успешно добавлена!',true,true);
      this.clearStatusMessage(this.createTaskButton);
    },
    error=> {
      this.setResponseStatus.call(this.responseStatus,error.message,true,true);
    })
  }
}
