import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.scss']
})
export class AddNameComponent implements OnInit {

  userName = '';
  name = '';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddUser = new EventEmitter<{name: string}>();

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.onAddUser.emit({
      name: this.userName
    });
    this.userName = '';
  }

}
