# Product Types

Products can have a Product Type (type). A type can be used for grouping products based on specifics characteristics. A type can also be used at runtime to determine and drive code functionality..



## Create Product Type

**Description:**

Creates a product type

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/type


**Body:**

```js
{
  "code" : "ecoproduct",
  "order" : 1,
  "descriptions" : [ 
    {
        "language" : "en",
        "name" : "Eco Product"
    },
    {
        "language" : "fr",
        "name" : "Produit Ecologique"
    }  
  ]
}
```


**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 50
}
```



## Edit Product Type

**Description:**

Edit a product type

**Method:**

PUT

**Url:**

{{url}}/api/v1/private/product/type/50


**Body:**

```js
{
  "code" : "ecoproduct",
  "order" : 1,
  "descriptions" : [ 
    {
        "language" : "en",
        "name" : "Eco Product"
    },
    {
        "language" : "fr",
        "name" : "Produit Écologique"
    }  
  ]
}
```


**Response:**

**status: OK**

**code: 200**

```js

```



## Get product type

**Description:**

Get a product type by id

**Method:**

GET

**Url:**

{{url}}/api/v1/private/product/type/50


**Body:**

```js
{
  "code" : "ecoproduct",
  "order" : 1,
  "descriptions" : [ 
    {
        "language" : "en",
        "name" : "Eco Product"
    },
    {
        "language" : "fr",
        "name" : "Produit Écologique"
    }  
  ]
}
```


**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 50,
    "code": "ecoproduct",
    "visible": false,
    "allowAddToCart": false,
    "description": {
        "id": 2,
        "language": "en",
        "name": "Eco Product",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## List Product Types

**Description:**

List product types by store. Request parameter stpre&#x3D;&#39;CODE&quot; can be used for filtering the store. If no request parameter is used then the system will use the user&#39;s associated store

**Method:**

GET

**Url:**

{{url}}/api/v1/private/product/types


**Body:**

```js
{
  "code" : "ecoproduct",
  "order" : 1,
  "descriptions" : [ 
    {
        "language" : "en",
        "name" : "Eco Product"
    },
    {
        "language" : "fr",
        "name" : "Produit Écologique"
    }  
  ]
}
```


**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 0,
    "recordsTotal": 1,
    "recordsFiltered": 10,
    "list": [
        {
            "id": 50,
            "code": "ecoproduct",
            "visible": false,
            "allowAddToCart": false,
            "description": {
                "id": 2,
                "language": "en",
                "name": "Eco Product",
                "description": null,
                "friendlyUrl": null,
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": null
            }
        }
    ]
}
```



## Delete Product Type

**Description:**

Delete a product type by id

**Method:**

DELETE

**Url:**

{{url}}/api/v1/private/product/type/50



**Response:**

**status: OK**

**code: 200**

```js

```



