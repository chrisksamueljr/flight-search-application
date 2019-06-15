import { Component, OnInit } from '@angular/core';
import { SearchResultService } from './search-result.service';
// import { SearchResultsType } from './search-result.type';

interface Config {
  heroesUrl: string;
  textfile: string;
}
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  flightsResults;

  constructor(
    private searchResultService: SearchResultService
  ) { 
    this.flightsResults = this.searchResultService.getSearchResults();
  }


  ngOnInit() {
  // this.getResults();
  // this.showConfig();  
  
  }

}
