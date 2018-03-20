import { Component, OnInit } from '@angular/core'
import { Model } from './model';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  model = new Model("name", this.numberOne);

  constructor() {
    this.title = "something";
  }

  ngOnInit(){

  }
}