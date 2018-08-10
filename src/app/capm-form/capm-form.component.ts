import { Component, OnInit } from '@angular/core';

import { Capm } from '../capm/capm';

@Component({
  selector: 'app-capm-form',
  templateUrl: './capm-form.component.html',
  styleUrls: ['./capm-form.component.css']
})
export class CapmFormComponent implements OnInit {

  koModel = new Capm(0, 2.064, .56, 6);

  submitted = false;

  onsubmit() { this.submitted = true; }

  // clean up after dev
  get diagnostic() { return JSON.stringify(this.koModel); }

  constructor() { }

  ngOnInit() {
  }

}
