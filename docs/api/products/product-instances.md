# Product Instances

A Product Instance is a product definition with a SKU and Variants.

A Product definition will become a Product Instance when variants are attached to it. An example for this is a simple Product instance (TShirt) will possibly have product instances such as TShirt Medium Black or TShirt Small White.

The product instance will be decorated with variants and will have a specific SKU attached to it.



## Create Product Instance

**Description:**

Creates a product instance

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/26100/instance


**Body:**

```js
{
  "visible": true,
  "dateAvailable": "2022-07-01",
  "sortOrder": 1,
  "sku" : "A256TSW",
  "variant": 4,
  "variantValue": 100
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 150
}
```



## Update Product Instance

**Description:**



**Method:**

PUT

**Url:**

{{url}}/api/v2/private/product/26100/instance/150


**Body:**

```js
{
  "visible": true,
  "dateAvailable": "2022-07-01",
  "sortOrder": 2,
  "sku" : "A256TSW",
  "variant": 4,
  "variantValue": 100
}
```


**Response:**

**status: OK**

**code: 200**

```js

```



## Check if Product instance exists

**Description:**



**Method:**

GET

**Url:**

{{url}}/api/v2/private/product/26100/instance/A256TSW/unique



**Response:**

**status: OK**

**code: 200**

```js
{
    "exists": true
}
```



## List product instances

**Description:**



**Method:**

GET

**Url:**

{{url}}/api/v2/private/product/26100/instances



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
            "id": 150,
            "productShipeable": true,
            "available": false,
            "visible": true,
            "sortOrder": 2,
            "dateAvailable": "2022-07-01",
            "creationDate": null,
            "store": "DEFAULT",
            "productId": 26100,
            "sku": "A256TSW",
            "defaultSelection": false,
            "variant": {
                "id": 4,
                "code": "colour-white",
                "date": null,
                "sortOrder": 0,
                "defaultValue": false,
                "option": {
                    "id": 100,
                    "code": "COLOUR",
                    "type": "select",
                    "readOnly": false,
                    "name": "Colour",
                    "lang": "en",
                    "variant": false,
                    "optionValues": []
                },
                "optionValue": {
                    "id": 600,
                    "code": "white",
                    "name": "White",
                    "defaultValue": false,
                    "sortOrder": 0,
                    "image": null,
                    "price": null,
                    "description": null
                }
            },
            "variantValue": {
                "id": 100,
                "code": "size-medium",
                "date": null,
                "sortOrder": 0,
                "defaultValue": false,
                "option": {
                    "id": 150,
                    "code": "size",
                    "type": "select",
                    "readOnly": false,
                    "name": "Size",
                    "lang": "en",
                    "variant": false,
                    "optionValues": []
                },
                "optionValue": {
                    "id": 700,
                    "code": "medium",
                    "name": "Medium",
                    "defaultValue": false,
                    "sortOrder": 0,
                    "image": null,
                    "price": null,
                    "description": null
                }
            },
            "code": "colour-white:size-medium",
            "images": [],
            "inventory": []
        }
    ]
}
```



## Get Product Instance

**Description:**



**Method:**

GET

**Url:**

{{url}}/api/v2/private/product/26100/instance/150



**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 150,
    "productShipeable": true,
    "available": false,
    "visible": true,
    "sortOrder": 2,
    "dateAvailable": "2022-07-01",
    "creationDate": null,
    "store": "DEFAULT",
    "productId": 26100,
    "sku": "A256TSW",
    "defaultSelection": false,
    "variant": {
        "id": 4,
        "code": "colour-white",
        "date": null,
        "sortOrder": 0,
        "defaultValue": false,
        "option": {
            "id": 100,
            "code": "COLOUR",
            "type": "select",
            "readOnly": false,
            "name": "Colour",
            "lang": "en",
            "variant": false,
            "optionValues": []
        },
        "optionValue": {
            "id": 600,
            "code": "white",
            "name": "White",
            "defaultValue": false,
            "sortOrder": 0,
            "image": null,
            "price": null,
            "description": null
        }
    },
    "variantValue": {
        "id": 100,
        "code": "size-medium",
        "date": null,
        "sortOrder": 0,
        "defaultValue": false,
        "option": {
            "id": 150,
            "code": "size",
            "type": "select",
            "readOnly": false,
            "name": "Size",
            "lang": "en",
            "variant": false,
            "optionValues": []
        },
        "optionValue": {
            "id": 700,
            "code": "medium",
            "name": "Medium",
            "defaultValue": false,
            "sortOrder": 0,
            "image": null,
            "price": null,
            "description": null
        }
    },
    "code": "colour-white:size-medium",
    "images": [],
    "inventory": []
}
```



## Delete Product Instance

**Description:**



**Method:**

DELETE

**Url:**

{{url}}/api/v2/private/product/26100/instance/150



**Response:**

**status: OK**

**code: 200**

```js

```



