import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {of} from 'rxjs';

@Injectable()
export class UserService {

  private url = 'http://labs.fpv.umb.sk:8080/api/customers';

  private customers: User[] = [
    {
      id: 1,
      firstName: 'Adam',
      lastName: 'Malý'
    },
    {
      id: 2,
      firstName: 'Andrej',
      lastName: 'Stredný'
    },
    {
      id: 2,
      firstName: 'Anton',
      lastName: 'Veľký'
    }
  ];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // return this.http.get<User[]>(this.url);
    return of(this.customers);
  }

  getUser(userId: number): Observable<User> {
    //return this.http.get<User>(`${this.url}/${userId}`);
    return of(this.customers[0]);
  }


  createUser(user: User): Observable<number> {
    return this.http.post<number>(this.url, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${userId}`);
  }
}
