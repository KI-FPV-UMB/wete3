import {Component} from '@angular/core';
import {User} from '../../common/model/user.model';
import {UserService} from '../../common/service/user.service';
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];

  person?: User;

  constructor(private service: UserService, private toastService: ToastService, private router: Router) {
    this.getPersons();
  }

  getPersons(): void {
    this.service.getUsers().subscribe((persons: User[]) => {
        this.persons = persons;
    })
  }

  selectPersonToUpdate(personId: number): void{
    this.router.navigate(['user', personId])
  }

  createPerson(person: User): void {
    this.service.createUser(person)
      .subscribe(() => {
        console.log('OSOBA bola uspesne ulozena.')
        this.getPersons();
      })
  }



  updatePerson(person: User): void {
    this.service.updateUser(person)
      .subscribe(() => {
        console.log('OSOBA bola uspesne upravena.')
        this.getPersons();
      })
  }

  // selectPersonToUpdate(personId: number): void {
  //   this.service.getUser(personId)
  //     .subscribe((person: User) => {
  //       this.person = person;
  //     })
  // }

  deletePerson(personId: number): void {
    if(window.confirm('Naozaj chcete zmzat osobu?')){
      this.service.deleteUser(personId).subscribe(() => {
        this.toastService.success("Osoba bola uspesne odstranena");
        console.log('OSOBA bola uspesne zmazana.');
        this.getPersons();
      }, () => {
        this.toastService.error("Chyba. Osoba nebola zmazana.")
      })
    }
  }
}
