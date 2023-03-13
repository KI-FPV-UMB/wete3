import { Component } from '@angular/core';
import {User} from "../../common/model/user.model";
import {UserService} from "../../common/service/user.service";

@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css']
})
export class BorrowingPageComponent {
users?: User[];

constructor(private userService: UserService) {
  this.getUsers();
}

public getUsers(){
  this.userService.getUsers().subscribe(users => {
    this.users = users;
  })
}
}
