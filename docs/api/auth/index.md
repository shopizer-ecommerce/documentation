---
title: Shopizer Authentication REST api documentation
---

# Authentication API Reference

## Administration authentication

Administration API (/private) require authentication. Authentication is performed through an endpoint accepting administration username and password. Subsequent calls to all private api require the presence of a Bearer token in the request header.

**Method:**

POST

**Url:**

{{url}}/api/v1/private/login


**Body:**

```js
{
  "username":"admin@shopizer.com",
  "password":"password"
}
```


**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 1,
    "token": "...eyJhbGciOiJIUzUxMiJ9....."
}
```

Private (admin) api subsequent requests require the token to be sent in the request header

```sh
curl --location --request GET 'http://localhost:8080/api/v1/private/product/types' \
--header 'Authorization: Bearer ...eyJhbGciOiJIUzUxMiJ9.....' \
--header 'Content-Type: application/json'
```

## Swagger documentations

All apis are described on Swaggerhub Shopizer repository

[Shopize Swagger Documentation](https://groups.google.com/forum/#!forum/shopizer)https://app.swaggerhub.com/apis-docs/shopizer/shopizer-rest-api/3.0.1