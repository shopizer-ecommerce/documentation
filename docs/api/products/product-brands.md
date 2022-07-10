# Product Brands


An API that can be used for managing product brands, manufacturers or collections.

## Create Product Prand / Manufacturer

**Description:**

API for creating a manufacturer &#x2F; Brand

**Method:**

POST

**Url:**

{{url}}/api/v1/private/manufacturer


**Body:**

```js
{
  "code" : "gilden-like",
  "order" : 1,
  "descriptions" : [ 
      {
        "language" : "en",
        "name" : "Gilden Like"
      }, 
      {
        "language" : "fr",
        "name" : "Gilden Like"
      }
  ]
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 50,
    "code": "gilden-like",
    "order": 1,
    "descriptions": [
        {
            "id": 0,
            "language": "en",
            "name": "Gilden Like",
            "description": null,
            "friendlyUrl": null,
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": null
        },
        {
            "id": 0,
            "language": "fr",
            "name": "Gilden Like",
            "description": null,
            "friendlyUrl": null,
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": null
        }
    ]
}
```



## Update Product Brand/ Manufacturer

**Description:**

API for updating a brand

**Method:**

PUT

**Url:**

{{url}}/api/v1/private/manufacturer/50


**Body:**

```js
{
    "order": 10,
    "code": "gilden-like",
    "descriptions": [
        {
            "language": "en",
            "name": "Gilden Like"
        },
        {
            "language": "fr",
            "name": "De Gilden"
        }
    ]
}
```


**Response:**

**status: OK**

**code: 200**

```js

```



## List Product Brands / Manufacturers

**Description:**

API for updating a brand

**Method:**

GET

**Url:**

{{url}}/api/v1/manufacturer?count=25&page=0



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 0,
    "recordsTotal": 2,
    "recordsFiltered": 0,
    "manufacturers": [
        {
            "id": 1,
            "code": "DEFAULT",
            "order": 0,
            "description": {
                "id": 1,
                "language": "en",
                "name": "DEFAULT",
                "description": "DEFAULT",
                "friendlyUrl": null,
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": null
            }
        },
        {
            "id": 50,
            "code": "gilden-like",
            "order": 0,
            "description": {
                "id": 2,
                "language": "en",
                "name": "Gilden Like",
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



## Get Product Brand / Manufacturer

**Description:**

Get a Brand &#x2F; Manufacturer

**Method:**

GET

**Url:**

{{url}}/api/v1/manufacturer/1



**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 1,
    "code": "DEFAULT",
    "order": 0,
    "description": {
        "id": 1,
        "language": "en",
        "name": "DEFAULT",
        "description": "DEFAULT",
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Delete Product Brand / Manufacturer

**Description:**

Delete a Brand &#x2F; Manufacturer by id

**Method:**

DELETE

**Url:**

{{url}}/api/v1/private/manufacturer/50



**Response:**

**status: OK**

**code: 200**

```js

```



