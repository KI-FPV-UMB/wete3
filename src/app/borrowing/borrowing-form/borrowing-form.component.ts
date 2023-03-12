import {Component, Input} from '@angular/core';
import {User} from '../../common/model/user.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {

  @Input()
  users?: User[];

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      user: new FormControl(null),
      book: new FormControl(null)
    })
  }

  saveBorrowing(): void {
    console.log('VALUE:', this.form.value);
  }
}
