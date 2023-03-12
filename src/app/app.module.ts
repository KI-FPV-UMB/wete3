import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './common/service/user.service';
import {AngularToastifyModule, ToastService} from 'angular-toastify';
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserFormComponent,
    UserListComponent,
    BookPageComponent,
    BorrowingPageComponent,
    UserDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularToastifyModule
  ],
  providers: [
    UserService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
