import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { SearchResultComponent } from './+search-result/search-result.component';

import { SearchFormComponent } from './search-form/search-form.component';
export const routes: Routes = [
  {path: '', redirectTo: 'landing',  pathMatch: 'full'},
  {path: 'searchresults', component: SearchResultComponent},
  {path: 'landing', component: SearchFormComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
