import { Component, OnInit } from '@angular/core';

export interface Tile {
  // color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {
      text: 'TEST1', cols: 1, rows: 1},
    { text: 'TEST2', cols: 1, rows: 1 },
    { text: 'TEST3', cols: 1, rows: 1 }
  ];

  ngOnInit() {
  }

}
