import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Názov projektu';

  changeProjectTitle(title: string): void {
    this.title = title;
  }
}
