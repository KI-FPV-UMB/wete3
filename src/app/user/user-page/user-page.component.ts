import {Component} from '@angular/core';
import {User} from '../../common/model/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];

  person?: User;

  constructor(private http: HttpClient) {
    this.getPersons();
  }

  getPersons(): void {
    this.http.get<User[]>('http://labs.fpv.umb.sk:8080/api/customers').subscribe((persons: User[]) => {
      this.persons = persons;
    });
  }

  createPerson(person: User): void {
    this.http.post('http://labs.fpv.umb.sk:8080/api/customers', person).subscribe(() => {
      console.log('Osoba bola úspešne uložená.');
      this.getPersons();
    })
  }

  updatePerson(person: User): void {
    this.http.put(`http://labs.fpv.umb.sk:8080/api/customers/${person.id}`, person).subscribe(() => {
      console.log('Osoba bola úspešne zmenená.');
      this.getPersons();
    })
  }

  selectPersonToUpdate(personId: number): void {
    this.person = this.persons.find(person => person.id === personId);
  }

  deletePerson(personId: number): void {
    this.http.delete(`http://labs.fpv.umb.sk:8080/api/customers/${personId}`).subscribe(() => {
      console.log('Osoba bola úspešne zmazaná.');
      this.getPersons();
    })
  }
}
