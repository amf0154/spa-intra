import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { Navigation } from '@core/enums/navigation.enum';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private navigationService: NavigationService) {
    this.navigationService.setNavigation(Navigation.base);
   }

  ngOnInit() {
  }

}
