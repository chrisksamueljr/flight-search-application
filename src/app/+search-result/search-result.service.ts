import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { SearchResultsType } from './search-result.type';

interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  jsonServerUrl = 'http://localhost:3000/SearchResult';

  constructor(private http: HttpClient) { }

  getSearchResults() {
    return this.http.get('./assets/search-results.json')
  }

}
