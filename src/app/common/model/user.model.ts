import {PaginableResponse} from './pagination.model';

export interface User {
  id: number,
  firstName: string;
  lastName: string
}

export interface UserResponse extends PaginableResponse {
  content: User[];
}

export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS'
}
