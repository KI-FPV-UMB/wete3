import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../common/model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input()
  set personData(person: User | undefined) {
    if (person) {
      this.form.setValue(person);
    }
  }

  @Output()
  personToCreate = new EventEmitter<User>();

  @Output()
  personToUpdate = new EventEmitter<User>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  savePerson(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.personToUpdate.emit(this.prepareUser(this.form.controls.id.value));
      } else {
        this.personToCreate.emit(this.prepareUser());
      }
      this.form.reset();
    }
  }

  private prepareUser(id?: number): User {
    return {
      id: id !== undefined ? id : Date.now(),
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
    };
  }
}
