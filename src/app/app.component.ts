import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../app/hello-world/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title;

  constructor(private hw: HelloWorldService) { }

  ngOnInit() {
    this.hw.getTitle()
      .subscribe(data => this.title = data);

    console.log(this.title);
  }
}
