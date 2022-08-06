# Admin API Documentation

## Endpoints
List of available endpoints:

  &nbsp;

- `GET /admin`
- `GET /admin/:id`
- `POST /admin`
- `PUT /admin/:id`
- `PATH /admin/:id`
- `DELETE /admin/:id`

 &nbsp;

- `GET /admin/histories`
- `GET /admin/histories/:id`
- `POST /admin/histories/`


&nbsp;

&nbsp;

## 1. GET /admin
+ _Response (200 - Success)_
  ```json
    [
      {
        "username": "string",
        "email": "string",
        "role": "string",
        "createdAt": "Date",
      },
      {
        "username": "string",
        "email": "string",
        "role": "string",
        "createdAt": "Date",
      },
      ...
    ]
  ```

&nbsp;

## 2. POST /register

Request:
+ headers
  ```json
    {
      "Token": "string"
    }
  ```
+ body:

  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string",
    "role": "string",
  }
  ```

+ _Response (201 - Created)_

  ```json
  {
    "Message": "Admin created successfully",
  }
  ```

+ _Response (400 - Bad Request)_

  ```json
  { "message": "Username is required" }
  OR
  { "message": "Username address already in use!" }
  OR
  { "message": "Email is required" }
  OR
  { "message": "Email address already in use!" }
  OR
  { "message": "Password is required" }
  OR
  { "message": "Minimal Character Password 6" }
  ```

&nbsp;

## . Global Error Response
+ _Response (500 - Internal Server Error)_
  ```json
      {
        "message": "Internal Server Error",
      },
  ```