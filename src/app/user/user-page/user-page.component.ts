import {Component, TemplateRef} from '@angular/core';
import {User} from '../../common/model/user.model';
import {UserService} from '../../common/service/user.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ToastService} from 'angular-toastify';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];

  formatter = (item: User) => {
    return item.lastName;
  };

  constructor(private service: UserService,
              private toastService: ToastService,
              private router: Router,
              private modalService: NgbModal) {
    this.getPersons();
  }

  getPersons(): void {
    this.service.getUsers().pipe(untilDestroyed(this)).subscribe((persons: User[]) => {
      this.persons = persons;
    });
  }

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content,
      { size: 'sm' });
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

  search: OperatorFunction<string, readonly any[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: string) =>
        term.length < 2 ? [] : this.persons?.filter((v) => v.lastName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );
}
