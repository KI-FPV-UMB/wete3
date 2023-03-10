# Wete3

# Specification of project Library
Basic functions of application:
- create, edit, delete of book, book category and customer
- list and show detail of book, book category, customer and borrowings
- create borrowing and return borrowed book to library

## Domain model

```plantuml

class Book {

}

class BookCategory {

}

class Customer {

}

class Borrowing {

}

```

## FE requirements
- component for each feature (Book, BookCategory, Customer, Borrowing)
- usage of Angular Forms
- navigation between features by Routing
- ...

# API
API is specified using OpenAPI v3. You can render this API via [Swagger editor](https://editor.swagger.io/).

## OpenAPI
```yaml
openapi: 3.0.3
info:
  title: Wete3 Library - OpenAPI
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
  version: 1.0.11
tags:
  - name: bookCategories
    description: Book categories such as Romance, Sci-fi etc.
  - name: books
    description: Books such as Dune, Lord of the rings etc.
  - name: customers
    description: Customers - as people who can borrow a book.
  - name: borrowings
    description: Which book is borrowed by which customer.

paths:
  /books:
    post:
      tags:
        - books
      summary: Create book
      operationId: createBook
      requestBody:
        description: Update an existent pet in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateBookDto'
        required: true
      responses:
        '201':
          description: CREATED
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookDto'
        '400':
          description: Bad request
        '404':
          description: Not found
        '405':
          description: Validation exception
    get:
      tags:
        - books
      summary: Get all books or filtered by name
      operationId: getBooks
      parameters:
        - name: firstName
          in: query
          description: First name to filter with
          required: false
          schema:
            type: string
        - name: lastName
          in: query
          description: Last name to filter with
          required: false
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BooksDto'
        '405':
          description: Invalid input

  /books/{bookId}:
    get:
      tags:
        - books
      summary: Find book by ID
      operationId: getBookById
      parameters:
        - name: bookId
          in: path
          description: ID of book to return
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookDto'
        '400':
          description: Bad request
        '404':
          description: Not found
    put:
      tags:
        - books
      summary: Updates a book
      operationId: updateBook
      parameters:
        - name: bookId
          in: path
          description: ID of book that needs to be updated
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateBookDto'
      responses:
        '405':
          description: Invalid input

    delete:
      tags:
        - books
      summary: Deletes a book
      operationId: deleteBook
      parameters:
        - name: bookId
          in: path
          description: Book id to delete
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '400':
          description: Bad request

components:
  schemas:
    CreateBookDto:
      required:
        - name
        - category
      properties:
        name:
          type: string
          example: Dune
        number:
          type: integer
          format: int64
          example: 117
          default: 0
        category:
          $ref: '#/components/schemas/BookCategoryDto'

    BookDto:
      properties:
        id:
          type: integer
          format: int64
          example: 10
        name:
          type: string
          example: Surely you're joking Mr Feynman!
        category:
          $ref: '#/components/schemas/BookCategoryDto'
        number:
          type: integer
          format: int64
          example: 45
        status:
          type: string
          description: book status for borrow
          enum:
            - AVAILABLE
            - NOT_AVAILABLE
    BooksDto:
      properties:
        books:
          type: array
          items:
            $ref: '#/components/schemas/BookDto'

    BookCategoryDto:
      properties:
        name:
          type: string
          example: Sci-fi





```
