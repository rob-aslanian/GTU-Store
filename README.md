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
    ...Must to do


```

# Frontend - David

**Using**

- Angular 8
- Material UI
- JWT
- SASS

```
ng serve
```
