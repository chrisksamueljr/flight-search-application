import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

export const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
