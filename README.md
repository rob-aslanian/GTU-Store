# Backend - Robert

**Using**

- Ruby
- Ruby on Rails
- JWT
- MySQL
- Mailer

```
rails serve

```

### Routes

```
//////__________ USERS __________//////
    GET    /api/v1/users(.:format)
    POST   /api/v1/users(.:format)
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
    DELETE /api/v1/item/:id(.:format)
    PUT    /api/v1/item/:id(.:format) @@@ MUST IMPROVE @@@


```

# Frontend - David

**Using**

- @Angular 8
- @Ngb Boostrap
- @FontAwsome
- @NGRX
- JWT
- SASS

```
ng serve
```
