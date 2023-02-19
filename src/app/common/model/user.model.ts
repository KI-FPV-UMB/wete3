export interface User {
  id: number,
  name: string;
  surname: string
}

export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS'
}
