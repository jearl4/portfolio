import { Component, OnInit } from '@angular/core';

import { Capm } from '../capm/capm';

@Component({
  selector: 'app-capm-form',
  templateUrl: './capm-form.component.html',
  styleUrls: ['./capm-form.component.css']
})
export class CapmFormComponent implements OnInit {

  model = new Capm(0, 2.064, .50, 6.0);

  submitted = false;

  newCapm() { this.model = new Capm(0, 0, 0, 0); }

  onSubmit() {
    this.submitted = true;
    //this.model.rateOfReturn = this.model.riskFreeRate + this.model.beta * (this.model.marketRate - this.model.riskFreeRate);
  }

  // clean up after dev
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
