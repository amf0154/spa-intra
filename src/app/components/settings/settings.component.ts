import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { Navigation } from '@core/enums/navigation.enum';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private navigationService: NavigationService) {
    this.navigationService.setNavigation(Navigation.settings);
  }

  ngOnInit() {
  }

}
