import {Component} from '@angular/core';
import {User} from '../../common/model/user.model';
import {UserService} from '../../common/service/user.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];

  person?: User;

  constructor(private service: UserService) {
    this.getPersons();
  }

  getPersons(): void {
    this.service.getUsers().pipe(untilDestroyed(this)).subscribe((persons: User[]) => {
      this.persons = persons;
    });
  }

  createPerson(person: User): void {
    this.service.createUser(person).pipe(untilDestroyed(this)).subscribe(() => {
      console.log('Osoba bola úspešne uložená.');
      this.getPersons();
    })
  }

  updatePerson(person: User): void {
    this.service.updateUser(person).pipe(untilDestroyed(this)).subscribe(() => {
      console.log('Osoba bola úspešne zmenená.');
      this.getPersons();
    })
  }

  selectPersonToUpdate(personId: number): void {
    this.service.getUser(personId).pipe(untilDestroyed(this)).subscribe((person: User) => {
      this.person = person;
    });
  }

  deletePerson(personId: number): void {
    this.service.deleteUser(personId).pipe(untilDestroyed(this)).subscribe(() => {
      console.log('Osoba bola úspešne zmazaná.');
      this.getPersons();
    })
  }
}
