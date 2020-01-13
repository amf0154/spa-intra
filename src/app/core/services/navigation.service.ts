import { Injectable } from '@angular/core';
import { Navigation } from '@core/enums/navigation.enum';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationStatus = new Subject<Navigation>();

  constructor() { }

  public selectedNavigation = (): Observable<Navigation>  => this.navigationStatus.asObservable();
  public setNavigation = (navigation: Navigation) => this.navigationStatus.next(navigation);
  
}
