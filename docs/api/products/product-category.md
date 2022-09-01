# Product Category

Create a category of products. Items (product definitions) can be associated to multiple category. Product instances cannot be associated to a category. Only the product definition can.



## Create Category

**Description:**

Creates a category

**Method:**

POST

**Url:**

{{url}}/api/v1/private/category


**Body:**

```js
{
  "code" : "cotton-shirts",
  "sortOrder" : 0,
  "visible" : true,
  "parent" : null,
  "descriptions" : [ {
    "language" : "en",
    "name" : "Cotton Shirts",
    "friendlyUrl" : "cotton-shirts",
    "title" : "Standard cotton t-shirts"
  }]
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 10651,
    "code": "cotton-shirts",
    "sortOrder": 0,
    "visible": true,
    "featured": false,
    "lineage": null,
    "depth": 0,
    "parent": null,
    "descriptions": [
        {
            "id": 0,
            "language": "en",
            "name": "Cotton Shirts",
            "description": null,
            "friendlyUrl": "cotton-shirts",
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": "Standard cotton t-shirts"
        }
    ],
    "children": []
}
```



## Modify category

**Description:**

Modify a Category

**Method:**

PUT

**Url:**

{{url}}/api/v1/private/category/10651


**Body:**

```js
{
  "code" : "cotton-shirts",
  "sortOrder" : 1,
  "visible" : true,
  "parent" : null,
  "descriptions" : [ {
    "language" : "en",
    "name" : "Cotton Shirts",
    "friendlyUrl" : "cotton-shirts",
    "title" : "Standard cotton t-shirts"
  }]
}
```


**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 10651,
    "code": "cotton-shirts",
    "sortOrder": 1,
    "visible": true,
    "featured": false,
    "lineage": null,
    "depth": 0,
    "parent": null,
    "descriptions": [
        {
            "id": 0,
            "language": "en",
            "name": "Cotton Shirts",
            "description": null,
            "friendlyUrl": "cotton-shirts",
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": "Standard cotton t-shirts"
        }
    ],
    "children": []
}
```



## Get Category

**Description:**

Modify a Category

**Method:**

GET

**Url:**

{{url}}/api/v1/category/10651


**Body:**

```js
{
  "code" : "cotton-shirts",
  "sortOrder" : 1,
  "visible" : true,
  "parent" : null,
  "descriptions" : [ {
    "language" : "en",
    "name" : "Cotton Shirts",
    "friendlyUrl" : "cotton-shirts",
    "title" : "Standard cotton t-shirts"
  }]
}
```


**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 10700,
    "code": "cotton-shirts",
    "sortOrder": 0,
    "visible": true,
    "featured": false,
    "lineage": "/10700/",
    "depth": 0,
    "parent": null,
    "description": {
        "id": 371,
        "language": "en",
        "name": "Cotton Shirts",
        "description": null,
        "friendlyUrl": "cotton-shirts",
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": "Standard cotton t-shirts"
    },
    "productCount": 0,
    "store": "DEFAULT",
    "children": []
}
```



## List Category

**Description:**

Get a category hierarchy for a given MerchantStore

**Method:**

GET

**Url:**

{{url}}/api/v1/category?store-DEFAULT


**Body:**

```js
{
  "code" : "cotton-shirts",
  "sortOrder" : 1,
  "visible" : true,
  "parent" : null,
  "descriptions" : [ {
    "language" : "en",
    "name" : "Cotton Shirts",
    "friendlyUrl" : "cotton-shirts",
    "title" : "Standard cotton t-shirts"
  }]
}
```


**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 10700,
    "code": "cotton-shirts",
    "sortOrder": 0,
    "visible": true,
    "featured": false,
    "lineage": "/10700/",
    "depth": 0,
    "parent": null,
    "description": {
        "id": 371,
        "language": "en",
        "name": "Cotton Shirts",
        "description": null,
        "friendlyUrl": "cotton-shirts",
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": "Standard cotton t-shirts"
    },
    "productCount": 0,
    "store": "DEFAULT",
    "children": []
}
```



## Add product to category

**Description:**

Add a product to a category

This url adds product ID 251 to category 100  
  
Product and category must have the same merchant store

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/26650/category/10651



**Response:**

**status: Created**

**code: 201**

```js

```



## Remove product from category

**Description:**

Add a product to a category

This url adds product ID 251 to category 100  
  
Product and category must have the same merchant store

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/26650/category/10651



**Response:**

**status: OK**

**code: 200**

```js

```



## Delete Category

**Description:**

Delete a Category

**Method:**

DELETE

**Url:**

{{url}}/api/v1/private/category/10651



**Response:**

**status: OK**

**code: 200**

```js

```



