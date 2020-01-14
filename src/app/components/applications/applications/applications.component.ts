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
    this.apiService.get(environment.Priorities).subscribe((res: []) => {
      this.priorities = res;
      this.getTasks();
    }, error => alert(error))
  }
  
  public getPriorityColor = (id: Number) => '5px solid' + this.priorities.filter(priority => priority.id == id)[0].rgb;

  private getTasks = () => {
    this.apiService.get(environment.GetTasks).subscribe((res: Tasks) => {
      this.tasks = res.value;
    }, error => alert(error), () => console.log(this.tasks));
  }

  // [innerHTML]="sanitizeServersideHtml(task.name)"
  sanitizeServersideHtml(untrustedHtml: string) {
    return this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
  }
}
