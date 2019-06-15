// Initial Module Loaders
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CityPairFormComponent } from './city-pair-form/city-pair-form.component';
import { SearchResultComponent } from './+search-result/search-result.component';
import { DateDropdownComponent } from './date-dropdown/date-dropdown.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FlightDetailComponent } from './+flight-detail/flight-detail.component';
import { FlightInfoBarComponent } from './flight-info-bar/flight-info-bar.component';
import { SideNavCityPairComponent } from './side-nav-city-pair/side-nav-city-pair.component';
import { SideNavAircraftTimeComponent } from './side-nav-aircraft-time/side-nav-aircraft-time.component';
import { CrewCardComponent } from './+flight-detail/crew-card/crew-card.component';
import { HistoryNavigationComponent } from './+flight-detail/history-navigation/history-navigation.component';

// Create list of module to break out later
const MATERIAL_MODULES = [
  MatToolbarModule, 
  MatSidenavModule,
  MatSelectModule,
  MatCheckboxModule
  ];




@NgModule({
  declarations: [
    AppComponent,
    MenuNavigationComponent,
    SearchFormComponent,
    CityPairFormComponent,
    SearchResultComponent,
    DateDropdownComponent,
    FlightDetailComponent,
    PageNotFoundComponent,
    FlightInfoBarComponent,
    SideNavCityPairComponent,
    SideNavAircraftTimeComponent,
    CrewCardComponent,
    HistoryNavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
  MATERIAL_MODULES,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
