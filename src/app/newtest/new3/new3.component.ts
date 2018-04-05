import { Component, OnInit, NgModule } from '@angular/core';
import { NavService } from '../../services/test.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-new3',
  templateUrl: './new3.component.html',
  styleUrls: ['./new3.component.scss']
})
export class New3Component implements OnInit {

  // users = ['Fobos', 'Deimos', 'Tanatos'];
  // items = [{name: 'item1'}, {name: 'item2'}, {name: 'item3'}];
  first = '';
  second = '';
  isNowEdited;
  constructor(public testService: NavService) { }

  // updateNameList(user: {name: string}) {
  //   this.users.push('user');
  // }

  ngOnInit() {
  }

  reset() {
    this.first = '';
    this.second = '';
    this.isNowEdited = null;
  }

  add() {
    const newUser: User = { id: this.testService.users.length + 1, name: this.first, surname: this.second };
    this.testService.users.push(newUser);
    this.reset();
  }
  update(id) {
    const edituser = this.testService.users.find(e => e.id === id);
    edituser.name = this.first;
    edituser.surname = this.second;
    this.reset();
  }
  delete(index) {
    this.testService.users.splice(index, 1);
  }

  getUserForUpdate(id) {
    this.isNowEdited = id;
    const edituser = this.testService.users.find(e => e.id === id);
    this.first = edituser.name;
    this.second = edituser.surname;
  }
  // let countryApp = NgModule('countryApp', []);
  // countryApp.controller('CountryCtrl', function ($scope, $http) {
  //   $http.get('countries.json').success(function(data) {
  //     $scope.countries = data;
  //   });
  // });

}
