import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  searchOptionsArray = ['Origin & Destination', 'Origin & Destination', 'Origin & Destination'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.initForm();
  }

  initForm() {
    return this.fb.group({
      searchOption: ['', Validators.required],
      origin: ['PHX', Validators.required],
      destination: ['LAS', Validators.required],
      date: ['', Validators.required],
      timeCheck: false,
    });
  }

  search() {
    console.log(this.searchForm.value);
  }

}
