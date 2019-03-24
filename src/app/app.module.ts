// Initial Module Loaders
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CityPairFormComponent } from './city-pair-form/city-pair-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DateDropdownComponent } from './date-dropdown/date-dropdown.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

// Create list of module to break out later
const MATERIAL_MODULES = [
  MatToolbarModule, 
  MatSidenavModule,
  MatSelectModule,
  MatCheckboxModule
  ];

const SHARED_MODULES = [
  // Will be the modules that will go into the shared 
  // folder in the 
  // future once the size is too large
];






// A Route has no routes until you configure it.

const appRoutes: Routes = [
  { path: 'search-results', component: SearchResultComponent },
  { path: 'flight-detail',      component: FlightDetailComponent 
  },
  { path: 'landing',      component: SearchFormComponent 
  },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
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
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
  MATERIAL_MODULES,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
