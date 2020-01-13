import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { Navigation } from '@core/enums/navigation.enum';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  constructor(private navigationService: NavigationService) {
    this.navigationService.setNavigation(Navigation.assets);
  }

  ngOnInit() {
  }

}
