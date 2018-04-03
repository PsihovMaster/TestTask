import { Component, OnInit, NgModule } from '@angular/core';
import { NavService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  name = '';
  text = '';
  constructor(public testService: NavService) {}


  ngOnInit() {

  }
}
