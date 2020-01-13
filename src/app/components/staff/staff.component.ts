import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { Navigation } from '@core/enums/navigation.enum';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private navigationService: NavigationService) {
    this.navigationService.setNavigation(Navigation.staff);
  }

  ngOnInit() {
  }

}
