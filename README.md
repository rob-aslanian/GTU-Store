# Backend - Robert

**Using**

- Ruby
- Ruby on Rails
- JWT
- MySQL
- Mailer
- Swagger

```
rails serve

```

### Routes

```

SWAGGER PATH ------> http://localhost:3000/api

______________________________________________

//////__________ USERS __________//////
    GET    /api/v1/users(.:format)
    POST   /api/v1/users(.:format)
           BODY: {
             "first_name": ANY
             "last_name": ANY
             "email": NOT_REPEAT
             "password": MIN_6_LENGTH
           }
    GET    /api/v1/users/:id(.:format)
    PATCH  /api/v1/users/:id(.:format)
    PUT    /api/v1/users/:id(.:format)
    DELETE /api/v1/users/:id(.:format)

//////__________ AUTH __________//////
    POST   /api/v1/auth/login(.:format)
    GET    /api/v1/auth/verify/:token(.:format)

//////__________ IMAGES __________//////
    POST   /api/v1/upload/user/:id(.:format)
    DELETE /api/v1/upload/user/:id(.:format)

//////__________ CATEGORIES __________//////
    GET    /api/v1/categories(.:format)

//////__________ ITEMS __________//////
    GET    /api/v1/item?from=INT&to=INT(.:format) 
    GET    /api/v1/item/:id(.:format)
    POST   /api/v1/item(.:format) 
        [FormData]BODY: {
             "title": ANY
             "description": ANY
             "price": NUMBER
             "category_id": ID
             "images[]": BLOB
           } 
    DELETE /api/v1/item/:id(.:format)
    PUT    /api/v1/item/:id(.:format) @@@ MUST IMPROVE @@@


```

# Frontend - David

**Using**

- @Angular 8
- @Ngb Boostrap
- @FontAwsome
- @NGRX
- JWT: @auth0/angular-jwt
- SASS
- @kolkov/angular-editor


**For run project to development mode use**
```
npm start
```
