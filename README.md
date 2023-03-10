# Wete3

# Specification of project Library
Basic functions of application:
- create, edit, delete of book, book category and customer
- list and show detail of book, book category, customer and borrowings
- create borrowing and return borrowed book to library

## Domain model


# API
## Customers
### Create customer
```
POST http://localhost:8080/api/customers

REQUEST BODY: {
"firstname": "Janko",
"lastname": "Mrkvicka",
"contact": "janko.mrkvicka@example.com"
}
```

### List customers
```
GET http://localhost:8080/api/customers?lastname=<customer last name search string>

RESPONSE BODY: [
    {
    "id": 1,
    "name": "Janko Mrkvicka",
    "contact": "janko.mrkvicka@example.com"
    },
    {
    "id": 2,
    "name": "Jozko Hrach",
    "contact": "jozko.hrach@example.com"    
    }
]
```

### Get customer by id
```
GET http://localhost:8080/api/customers/{customerId}

RESPONSE BODY: {
    "id": 1,
    "name": "Janko Mrkvicka",
    "contact": "janko.mrkvicka@example.com"
}
```

### Update customer
```
PUT http://localhost:8080/api/customers/{customerId}

REQUEST BODY: {
    "firstName": "Janko",
    "lastName": "Mrkvicka mladsi",
    "contact": "janko.mrkvicka.mladsi@example.com"
}

RESPONSE BODY: {
    "id": 1,
    "name": "Janko Mrkvicka mladsi",
    "contact": "janko.mrkvicka.mladsi@example.com"
}
```

### Delete customer
```
DELETE http://localhost:8080/api/customers/{customerId}
```


## Books
### Create new book title
```
POST http://localhost:8080/api/books

REQUEST BODY: {
    "authorFirstname":"Peter",
    "authorLastname" : "Lynch",
    "title" : "One up on Wall Street",
    "isbn" : "ISBN12A69C",
    "count" : 10
}
```

### List all book titles
```
GET http://localhost:8080/api/books?title=<title search string>

RESPONSE BODY: [
{
    "id": 1,
    "name":"Peter Lynch",
    "title" : "One up on Wall Street",
    "isbn" : "ISBN12A69C",
    "count" : 10
},
{
    ...
}
]
```

### Get book title by id
```
GET http://localhost:8080/api/books/{bookId}

RESPONSE BODY: {
    "id": 1,
    "authorFirstname":"Peter",
    "authorLastname" : "Lynch",
    "title" : "One up on Wall Street",
    "isbn" : "ISBN12A69C",
    "count" : 10
}
```

### Update book title
```
PUT http://localhost:8080/api/books/{bookId}

REQUEST BODY: {
    "authorFirstname":"Peter",
    "authorLastname" : "Lynch",
    "title" : "One up on Wall Street",
    "isbn" : "ISBN12A69C",
    "count" : 10
}

RESPONSE BODY: {
    "id": 1,
    "authorFirstname":"Peter",
    "authorLastname" : "Lynch",
    "title" : "One up on Wall Street",
    "isbn" : "ISBN12A69C",
    "count" : 10
}
```

### Delete book title
```
DELETE http://localhost:8080/api/books/{bookId}
```


## Borrowings
### Create borrowing
```
POST http://localhost:8080/api/borrowings

REQUEST BODY: {
    "customerId": 4,
    "bookId" : 5
}
```

### List borrowings
```
GET http://localhost:8080/api/borrowings

RESPONSE BODY: [
{
    "id": 1,
    "customerId" : 1,
    "customerName": "Janko Mrkvicka",
    "bookId": 3,
    "authorName": "J. R. R. Tolkien",
    "title": "Hobbit"
},
{
    ...
}
]
```

### Get borrowing by id
```
GET http://localhost:8080/api/borrowings/{borrowingId}

RESPONSE BODY: {
    "id": 1,
    "customerId" : 1,
    "customerName": "Janko Mrkvicka",
    "bookId": 3,
    "authorName": "J. R. R. Tolkien",
    "title": "Hobbit"
}
```

### Return book (delete borrowing)
```
DELETE http://localhost:8080/api/borrowing/{id}
```
