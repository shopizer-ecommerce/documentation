# Product images

Product images management.



## Add product images

**Description:**



**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/1/image



**Response:**

**status: Created**

**code: 201**

```js

```



## List product images

**Description:**

List product images

**Method:**

GET

**Url:**

{{url}}/api/v1/product/1/images



**Response:**

**status: OK**

**code: 200**

```js
[
    {
        "id": 2,
        "imageName": "white-tshirt.jpeg",
        "imageUrl": "http://localhost:80/products/DEFAULT/TSHIRTA/SMALL/white-tshirt.jpeg",
        "externalUrl": null,
        "videoUrl": null,
        "imageType": 0,
        "order": 0,
        "defaultImage": true
    }
]
```



## Update product image sort order

**Description:**

Updates an image sort order

**Method:**

PATCH

**Url:**

{{url}}/api/v1/private/product/1/image/1?order=1



**Response:**

**status: OK**

**code: 200**

```js

```



## Delete product image

**Description:**

Updates an image sort order

**Method:**

DELETE

**Url:**

{{url}}/api/v1/private/product/1/image/1



**Response:**

**status: OK**

**code: 200**

```js

```



