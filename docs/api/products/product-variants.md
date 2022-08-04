# Product Variants

Product variants will add the possibility to attach options to a product.

Examples of product variants are:

\- White T Shirt  
\- Medium Black T Shirt

It essentially adds variations to a product definition.  
  
Requires the creation of Option then option Values



## Create an Option - color

**Description:**



**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option


**Body:**

```js
{
  "code": "color",
  "descriptions": [
    {
      "description": "Color",
      "language" : "en",
      "name": "Color",
      "title": "Color"
    }
  ],
  "order": 10,
  "type": "select"
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 50,
    "code": "color",
    "type": "select",
    "readOnly": false,
    "order": 0,
    "description": {
        "id": 5,
        "language": "en",
        "name": "Color",
        "description": "Color",
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create an Option Value

**Description:**



**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option/value


**Body:**

```js
{
  "code": "white",
  "defaultValue": true,
  "descriptions": [
    {
      "description": "White",
      "language": "en",
      "name": "White"
    }
  ],
  "sortOrder": 10
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 100,
    "code": "white",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 10,
    "price": null,
    "description": {
        "id": 5,
        "language": "en",
        "name": "White",
        "description": "White",
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create Product Variant

**Description:**

Creates a Product Variant that contains an option and an option value.

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/variant


**Body:**

```js
{
  "code": "color-white",
  "defaultValue": true,
  "option": 50,
  "optionValue": 100,
  "sortOrder": 0
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 0
}
```



## List Variants

**Description:**

List variants for a given Merchant Store

**Method:**

GET

**Url:**

{{url}}/api/v2/private/product/variant?store=DEFAULT



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 1,
    "recordsTotal": 1,
    "recordsFiltered": 0,
    "items": [
        {
            "id": 1,
            "code": "color-white",
            "date": null,
            "sortOrder": 0,
            "defaultValue": false,
            "option": {
                "id": 50,
                "code": "color",
                "type": "select",
                "readOnly": false,
                "name": "Color",
                "lang": "en",
                "variant": false,
                "optionValues": []
            },
            "optionValue": {
                "id": 100,
                "code": "white",
                "name": "White",
                "defaultValue": false,
                "sortOrder": 0,
                "image": null,
                "price": null,
                "description": null
            }
        }
    ]
}
```



## Get Variant

**Description:**



**Method:**

GET

**Url:**

{{url}}/api/v2/private/product/variant/1



**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 1,
    "code": "color-white",
    "date": null,
    "sortOrder": 0,
    "defaultValue": false,
    "option": {
        "id": 50,
        "code": "color",
        "type": "select",
        "readOnly": false,
        "name": "Color",
        "lang": "en",
        "variant": false,
        "optionValues": []
    },
    "optionValue": {
        "id": 100,
        "code": "white",
        "name": "White",
        "defaultValue": false,
        "sortOrder": 0,
        "image": null,
        "price": null,
        "description": null
    }
}
```



## Remove Variant

**Description:**

Removes a property from a product

**Method:**

DELETE

**Url:**

{{url}}/api/v2/private/product/variant/1



**Response:**

**status: OK**

**code: 200**

```js

```



