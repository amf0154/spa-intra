import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from '@components/applications/applications/applications.component';
import { BaseComponent } from './components/base/base.component';
import { StaffComponent } from './components/staff/staff.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AssetsComponent } from './components/assets/assets.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotfoundComponent } from './components/errors/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/applications', pathMatch: 'full' },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'base', component: BaseComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
