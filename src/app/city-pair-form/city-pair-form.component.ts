import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'city-pair-form',
  templateUrl: './city-pair-form.component.html',
  styleUrls: ['./city-pair-form.component.scss']
})
export class CityPairFormComponent implements OnInit {
  

  constructor(
    private router: Router ,

  ) { }

  ngOnInit() {

  }

  submitForm() {
    this.router.navigate(['searchresults'])
  }
}
