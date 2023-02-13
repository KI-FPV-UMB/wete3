import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    id: number,
    name: string;
    surname: string
  }> = [];

  menu = Menu;

  actualMenu: Menu = Menu.USERS;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }

  savePerson(): void {
    if (this.form.controls.id.value) {
      const index = this.persons.findIndex(person => person.id === this.form.controls.id.value);
      if (index !== -1) {
        this.persons[index] = this.form.value;
      }
    } else {
      this.persons.push({
        id: Date.now(),
        name: this.form.controls.name.value,
        surname: this.form.controls.surname.value
      });
    }
    this.form.reset();
  }

  editPerson(index: number): void {
    this.form.setValue(this.persons[index]);
  }

  deletePerson(index: number): void {
    this.persons.splice(index, 1);
  }
}
