import { Component, OnInit } from '@angular/core';

import { Capm } from '../capm/capm';

@Component({
  selector: 'app-capm-form',
  templateUrl: './capm-form.component.html',
  styleUrls: ['./capm-form.component.css']
})
export class CapmFormComponent implements OnInit {

  model = new Capm(0, 2.064, .56, 6.0);

  submitted = false;

  newCapm() { this.model = new Capm(0, 0, 0, 0) }

  onsubmit() { this.submitted = true; }

  // clean up after dev
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
