import {Component} from '@angular/core';
import {User} from '../../common/model/user.model';
import {UserService} from '../../common/service/user.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ToastService} from 'angular-toastify';
import {Router} from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];

  constructor(private service: UserService,
              private toastService: ToastService,
              private router: Router) {
    this.getPersons();
  }

  getPersons(): void {
    this.service.getUsers().pipe(untilDestroyed(this)).subscribe((persons: User[]) => {
      this.persons = persons;
    });
  }

  createPerson(person: User): void {
    this.service.createUser(person).pipe(untilDestroyed(this)).subscribe(() => {
      this.toastService.success('Osoba bola úspešne uložená.');
      this.getPersons();
    }, () => {
      this.toastService.error('Chyba. Osoba nebola uložená.');
    })
  }

  selectPersonToUpdate(personId: number): void {
    this.router.navigate(['user', personId]);
  }

  deletePerson(personId: number): void {
    if (window.confirm('Naozaj chcete vymazať osobu?')) {
      this.service.deleteUser(personId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Osoba bola úspešne zmazaná.');
        this.getPersons();
      }, () => {
        this.toastService.error('Chyba. Osoba nebola zmazaná.');
      })
    }
  }
}
