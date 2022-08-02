# Product Properties

Properties (attributes) adds extension to the product core attributes by allowing the creation of custom properties (attributes).



## Create option

**Description:**

API for the creation of a product option. A product option is necessary for creating a product attribute. readonly field for a product option dedicated to become a product attribute must have **readonly** field set to true

Examples of product options for attribute:

\- Maximum Heat  
\- Minimum Heat  
\- Weight Capacity  
\-...

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option


**Body:**

```js
{
  "code": "fabric",
  "readonly": true,
  "descriptions": [
    {
      "name": "Fabric",
      "language": "en"
    },
    {
      "name": "Matériel",
      "language": "fr"
    }
  ]
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 2,
    "code": "fabric",
    "type": null,
    "readOnly": false,
    "order": 0,
    "description": {
        "id": 4,
        "language": "en",
        "name": "Fabric",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create option value

**Description:**

API for the creation of a product option value. Product option value in this situation will be used to create product attribute with predefined lists of product option and product option value

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option/value


**Body:**

```js
{
  "code": "coton",
  "descriptions": [
    {
      "name": "Coton",
      "language": "en"
    },
    {
      "name": "Coton",
      "language": "fr"
    }
  ],
  "order": 0
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 1,
    "code": "coton",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 0,
    "price": null,
    "description": {
        "id": 2,
        "language": "en",
        "name": "Coton",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create Product Property (With Option and predefined Option value)

**Description:**

Create a product custom property using a predefined product option and a predefined product option value

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/1/attribute


**Body:**

```js
{
  "attributeDisplayOnly": true,
  "option": {
    "id": 2
  },
  "optionValue": {
    "id": 1
  },
  "sortOrder": 0
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 1
}
```



## Create Product Property (With Option and no predefined Option value)

**Description:**

Create a product custom property using a predefined product option and no predefined option value. That is any text you may want to add as an option value. As long as the value contains all defined languages.

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/50/attribute


**Body:**

```js
{
  "attributeDisplayOnly": true,
  "option": {
    "id": 2
  },
  "optionValue": {
    "descriptions": [
      {
        "name":"Lin",
        "language":"fr"

      },
      {
        "name":"Linen",
        "language":"en"

      }
     ]
  },
  "sortOrder": 0
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 50
}
```



## List product properties

**Description:**



**Method:**

GET

**Url:**

{{url}}/api/v1/private/product/50/attributes



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 1,
    "recordsTotal": 1,
    "recordsFiltered": 0,
    "attributes": [
        {
            "id": 50,
            "sortOrder": 0,
            "attributeDefault": false,
            "attributeDisplayOnly": true,
            "productAttributeWeight": "0",
            "productAttributePrice": null,
            "productAttributeUnformattedPrice": null,
            "option": {
                "id": 2,
                "code": "fabric",
                "type": null,
                "readOnly": false,
                "order": 0,
                "description": {
                    "id": 4,
                    "language": "en",
                    "name": "Fabric",
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null
                }
            },
            "optionValue": {
                "id": 50,
                "code": "8ce3ae8f-6f05-4191-a635-3c76a42d439a",
                "name": null,
                "defaultValue": false,
                "sortOrder": 0,
                "image": null,
                "order": 0,
                "price": null,
                "description": {
                    "id": 4,
                    "language": "en",
                    "name": "Linen",
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null
                }
            }
        }
    ]
}
```



## Get product property

**Description:**



**Method:**

GET

**Url:**

{{url}}/api/v1/private/product/50/attribute/50



**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 50,
    "sortOrder": 0,
    "attributeDefault": false,
    "attributeDisplayOnly": true,
    "productAttributeWeight": "0",
    "productAttributePrice": null,
    "productAttributeUnformattedPrice": null,
    "option": {
        "id": 2,
        "code": "fabric",
        "type": null,
        "readOnly": false,
        "order": 0,
        "description": {
            "id": 4,
            "language": "en",
            "name": "Fabric",
            "description": null,
            "friendlyUrl": null,
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": null
        }
    },
    "optionValue": {
        "id": 50,
        "code": "8ce3ae8f-6f05-4191-a635-3c76a42d439a",
        "name": null,
        "defaultValue": false,
        "sortOrder": 0,
        "image": null,
        "order": 0,
        "price": null,
        "description": {
            "id": 4,
            "language": "en",
            "name": "Linen",
            "description": null,
            "friendlyUrl": null,
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": null
        }
    }
}
```



## Remove a product property

**Description:**

Removes a property from a product

**Method:**

DELETE

**Url:**

{{url}}/api/v1/private/product/50/attribute/50



**Response:**

**status: OK**

**code: 200**

```js

```



