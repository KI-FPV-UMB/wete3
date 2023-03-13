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
          
  /customers:
    post:
      tags:
        - customers
      summary: Create customer
      operationId: createCustomer
      requestBody:
        description: Update an existent pet in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateCustomerDto'
        required: true
      responses:
        '201':
          description: CREATED
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CustomerDto'
        '400':
          description: Bad request
        '404':
          description: Not found
        '405':
          description: Validation exception
    get:
      tags:
        - customers
      summary: Get all customers or filtered by name
      operationId: getCustomers
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
                $ref: '#/components/schemas/CustomersDto'
        '405':
          description: Invalid input
          
  /customers/{customerId}:
    get:
      tags:
        - customers
      summary: Find customer by ID
      operationId: getCustomerById
      parameters:
        - name: customerId
          in: path
          description: ID of customer to return
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
                $ref: '#/components/schemas/CustomerDto'
        '400':
          description: Bad request
        '404':
          description: Not found
    put:
      tags:
        - customers
      summary: Updates a customer
      operationId: updateCustomer
      parameters:
        - name: customerId
          in: path
          description: ID of customer that needs to be updated
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateCustomerDto'
      responses:
        '405':
          description: Invalid input

    delete:
      tags:
        - customers
      summary: Deletes a customer
      operationId: deleteCustomer
      parameters:
        - name: customerId
          in: path
          description: Customer id to delete
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '400':
          description: Bad request

  /bookCategories:
    post:
      tags:
        - bookCategories
      summary: Create book category
      operationId: createBookCategory
      requestBody:
        description: Update an existent book category in the database
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateBookCategoryDto'
        required: true
      responses:
        '201':
          description: CREATED
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookCategoryDto'
        '400':
          description: Bad request
        '404':
          description: Not found
        '405':
          description: Validation exception
    get:
      tags:
        - bookCategories
      summary: Get all bookCategory or filtered by name
      operationId: getBookCategories
      parameters:
        - name: name
          in: query
          description: First name to filter with
          required: false
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookCategoriesDto'
        '405':
          description: Invalid input
          
  /bookCategories/{bookCategoryId}:
    get:
      tags:
        - bookCategories
      summary: Find book category by ID
      operationId: getBookCategoryById
      parameters:
        - name: bookCategoryId
          in: path
          description: ID of book category to return
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
                $ref: '#/components/schemas/BookCategoryDto'
        '400':
          description: Bad request
        '404':
          description: Not found
    put:
      tags:
        - bookCategories
      summary: Updates a book
      operationId: updateBookCategory
      parameters:
        - name: bookCategoryId
          in: path
          description: ID of book category that needs to be updated
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateBookCategoryDto'
      responses:
        '405':
          description: Invalid input

    delete:
      tags:
        - bookCategories
      summary: Deletes a bookCategory
      operationId: deleteBookCategory
      parameters:
        - name: bookCategoryId
          in: path
          description: Book category id to delete
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '400':
          description: Bad request

  /borrowings:
    post:
      tags:
        - borrowings
      summary: Create borrowing
      operationId: createBorrowing
      requestBody:
        description: Update an existent borrowing in the database
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateBorrowingDto'
        required: true
      responses:
        '201':
          description: CREATED
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BorrowingDto'
        '400':
          description: Bad request
        '404':
          description: Not found
        '405':
          description: Validation exception
    get:
      tags:
        - borrowings
      summary: Get all borrowings or filtered by name
      operationId: getBorrowings
      parameters:
        - name: name
          in: query
          description: Name to filter with
          required: false
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BorrowingsDto'
        '405':
          description: Invalid input  
          
  /borrowing/{borrowingId}:
    get:
      tags:
        - borrowings
      summary: Find borrowing by ID
      operationId: getBorrowingById
      parameters:
        - name: borrowingId
          in: path
          description: ID of borrowing to return
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
        - borrowings
      summary: Updates a borrowing
      operationId: updateBorrowing
      parameters:
        - name: borrowingId
          in: path
          description: ID of borrowing that needs to be updated
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateBorrowingDto'
      responses:
        '405':
          description: Invalid input

    delete:
      tags:
        - borrowings
      summary: Deletes a borrowing
      operationId: deleteBorrowing
      parameters:
        - name: borrowingId
          in: path
          description: Borrowing id to delete
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

          
    CreateBookCategoryDto:
      required:
        - name
      properties:
        name:
          type: string
          example: Sci-fi

    BookCategoryDto:
      properties:
        id:
          type: integer
          format: int64
          example: 10
        name:
          type: string
          example: Sci-fi
    
    BookCategoriesDto:
      properties:
        bookCategoriess:
          type: array
          items:
            $ref: '#/components/schemas/BookCategoryDto'
    
    CreateCustomerDto:
      required:
        - firstName
        - lastName
      properties:
        firstname:
          type: string
          example: John
        lastName:
          type: string
          example: Carrot

    CustomerDto:
      properties:
        id:
          type: integer
          format: int64
          example: 10
        firstName:
          type: string
          example: John
        lastName:
          type: string
          example: Carrot
    CustomersDto:
      properties:
        customers:
          type: array
          items:
            $ref: '#/components/schemas/CustomerDto'
            
    CreateBorrowingDto:
      required:
        - name
      properties:
        book: 
          $ref: '#/components/schemas/BookDto'
        customer:
          $ref: '#/components/schemas/CustomerDto'
        category:
          $ref: '#/components/schemas/BookCategoryDto'
    BorrowingDto:
      properties:
        id:
          type: integer
          format: int64
          example: 10
        book: 
          $ref: '#/components/schemas/BookDto'
        customer:
          $ref: '#/components/schemas/CustomerDto'
        category:
          $ref: '#/components/schemas/BookCategoryDto'
    BorrowingsDto:
      properties:
        borrowings:
          type: array
          items:
            $ref: '#/components/schemas/BorrowingDto'





```
