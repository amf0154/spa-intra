import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { ApplicationsComponent } from './components/applications/applications/applications.component';
import { BaseComponent } from './components/base/base.component';
import { StaffComponent } from './components/staff/staff.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AssetsComponent } from './components/assets/assets.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotfoundComponent } from './components/errors/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ApplicationsComponent,
    BaseComponent,
    StaffComponent,
    ClientsComponent,
    AssetsComponent,
    SettingsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
