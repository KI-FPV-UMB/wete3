import { Component } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  persons: Array<{
    name: string,
    surname: string
  }> = [];

  menu = Menu;
  actualMenu = Menu.USERS;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      surname: new FormControl()
    })
  }

  savePerson(): void {
    this.persons.push(this.form.value);
    this.form.reset();
  }

  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }
}
