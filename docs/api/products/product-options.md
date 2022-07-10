# Product Options

Product Options can be used for creating product variants that customer can select.



## Create option

**Description:**

API for the creation of a product option

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
      "name": "Color",
      "language": "en"
    },
    {
      "name": "Couleur",
      "language": "fr"
    }
  ],
  "order": 1,
  "type": "radio"
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 1,
    "code": "color",
    "type": "radio",
    "readOnly": false,
    "order": 0,
    "description": {
        "id": 1,
        "language": "en",
        "name": "Color",
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

API for the creation of a product option

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option/value


**Body:**

```js
{
  "code": "white",
  "descriptions": [
    {
      "name": "White",
      "language": "en"
    },
    {
      "name": "Blanc",
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
    "code": "white",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 0,
    "price": null,
    "description": {
        "id": 1,
        "language": "en",
        "name": "White",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Get product options

**Description:**

Get product options

**Method:**

GET

**Url:**

{{url}}/api/v1/private/product/options



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 0,
    "recordsTotal": 2,
    "recordsFiltered": 0,
    "options": [
        {
            "id": 1,
            "code": "color",
            "type": "radio",
            "readOnly": false,
            "order": 0,
            "description": null,
            "descriptions": [
                {
                    "id": 2,
                    "language": "fr",
                    "name": "Couleur",
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null
                },
                {
                    "id": 1,
                    "language": "en",
                    "name": "Color",
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null
                }
            ]
        },
        {
            "id": 3,
            "code": "size",
            "type": "select",
            "readOnly": false,
            "order": 0,
            "description": null,
            "descriptions": [
                {
                    "id": 5,
                    "language": "en",
                    "name": "Size",
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null
                },
                {
                    "id": 6,
                    "language": "fr",
                    "name": "Grandeur",
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null
                }
            ]
        }
    ]
}
```



## Udate product option

**Description:**

API for the update of a product option  
The same applies for editing a product option value  
  
PUT &#x2F;api&#x2F;v1&#x2F;product&#x2F;option&#x2F;value

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/{{id}}


**Body:**

```js
{
  "code": "size",
  "descriptions": [
    {
      "name": "Size",
      "language": "en"
    },
    {
      "name": "Grandeur",
      "language": "fr"
    }
  ],
  "order": 4,
  "type": "select"
}
```



## Delete product option

**Description:**

API for deleting a product option  
The same applies for deleting a product option value

DELETE &#x2F;api&#x2F;v1&#x2F;product&#x2F;option&#x2F;value  
  
** If an option is attached to a product variants or attribute, the attachment should be removed first

**Method:**

DELETE

**Url:**

{{url}}/api/v1/private/product/{{id}}




