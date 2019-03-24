import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './search-result.component';
import { DateDropdownComponent } from '../date-dropdown/date-dropdown.component';
import {SearchResultService} from '../search-result.service';
import {SearchResultRoutingModule} from  './search-result-routing.module';


// HttpModule was deprecated use HttpClientModule
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SearchResultRoutingModule
  ],
  exports: [],
  declarations: [SearchResultComponent, DateDropdownComponent],
  providers: [SearchResultService],
})
export class SearchResultsModule { }
