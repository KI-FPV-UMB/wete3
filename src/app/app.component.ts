import {Component} from '@angular/core';



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


  menu = Menu;
  actualMenu = Menu.USERS;




  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }
}
