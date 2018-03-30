import { Component, OnInit, NgModule } from '@angular/core';
import { NavService } from './services/test.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  name = '';
  constructor(public testService: NavService) {}


  ngOnInit() {}


}


// var app = angular.module("myApp", []);
// app.controller('myCtrl', function($scope) {
//      $scope.user = {
//           name: {
//                required: true,
//                minlength: 5,
//                maxlength: 25
//           }
//      }
// });
