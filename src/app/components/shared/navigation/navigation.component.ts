import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { Observable } from 'rxjs';
import { Navigation } from '@core/enums/navigation.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  active_item: Observable<Navigation>
  constructor(private navigationService: NavigationService) { 
    this.active_item = this.navigationService.selectedNavigation();
  }

  ngOnInit() {

  }
}
