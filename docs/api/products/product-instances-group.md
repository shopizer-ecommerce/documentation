# Product Instances Group

ProductInstances can be part of a ProductInstanceGroup allowing to share common resources.  
  
Example: all white T Shirts product instances are part of o common group with an image of a white T Shirt.



## Create Product Instance Group

**Description:**

Create a product instance group using all product instances id in an array

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/productInstanceGroup


**Body:**

```js
{
  "productInstances": [1003,1002]

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



## Update Product Instance Group

**Description:**

Edit product instance group for adding and removing product instance id

**Method:**

PUT

**Url:**

{{url}}/api/v2/private/product/productInstanceGroup/50


**Body:**

```js
{
  "productInstances": [1003]

}
```


**Response:**

**status: OK**

**code: 200**

```js

```



## List Product Instances Group

**Description:**

List product instances group for a given store and a specific product definition.

**Method:**

GET

**Url:**

{{url}}/api/v2/private/product/26650/productInstanceGroup?store=DEFAULT



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
            "id": 50,
            "images": [],
            "productInstances": [
                {
                    "id": 1002,
                    "productShipeable": true,
                    "available": false,
                    "visible": true,
                    "sortOrder": 1,
                    "dateAvailable": "2022-02-23",
                    "creationDate": null,
                    "store": "DEFAULT",
                    "productId": 26650,
                    "sku": "A256TMW",
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
                },
                {
                    "id": 1003,
                    "productShipeable": true,
                    "available": false,
                    "visible": true,
                    "sortOrder": 10,
                    "dateAvailable": "2022-02-23",
                    "creationDate": null,
                    "store": "DEFAULT",
                    "productId": 26650,
                    "sku": "A256TLW",
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
                        "id": 150,
                        "code": "size-large",
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
                            "id": 750,
                            "code": "large",
                            "name": "Large",
                            "defaultValue": false,
                            "sortOrder": 0,
                            "image": null,
                            "price": null,
                            "description": null
                        }
                    },
                    "code": "colour-white:size-large",
                    "images": [],
                    "inventory": []
                }
            ]
        }
    ]
}
```



## Get Product Instance Group

**Description:**

Get product instance group details

**Method:**

GET

**Url:**

{{url}}/api/v2/private/product/productInstanceGroup/50



**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 50,
    "images": [],
    "productInstances": [
        {
            "id": 1002,
            "productShipeable": true,
            "available": false,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-02-23",
            "creationDate": null,
            "store": "DEFAULT",
            "productId": 26650,
            "sku": "A256TMW",
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
        },
        {
            "id": 1003,
            "productShipeable": true,
            "available": false,
            "visible": true,
            "sortOrder": 10,
            "dateAvailable": "2022-02-23",
            "creationDate": null,
            "store": "DEFAULT",
            "productId": 26650,
            "sku": "A256TLW",
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
                "id": 150,
                "code": "size-large",
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
                    "id": 750,
                    "code": "large",
                    "name": "Large",
                    "defaultValue": false,
                    "sortOrder": 0,
                    "image": null,
                    "price": null,
                    "description": null
                }
            },
            "code": "colour-white:size-large",
            "images": [],
            "inventory": []
        }
    ]
}
```



## Add Product Instance Group images

**Description:**

Add an image to the product instance group

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/productInstanceGroup/51/image

**Header**

```
"key": "Content-Type",
"value": "multipart/form-data"
```

**Payload**

```
"formdata": [
	{
	  "key": "file",
	  "type": "file",
	  "src": "/Users/carlsamson/Documents/csti/shopizer/images/misc/white-tshirt.jpeg"
	},
	{
	  "order": "0",
	}

```

**Response:**

**status: Created**

**code: 201**

```js

```



## Delete Product Instance Group

**Description:**

Delete a product instance group

**Method:**

DELETE

**Url:**

{{url}}/api/v2/private/product/productInstanceGroup/1



**Response:**

**status: OK**

**code: 200**

```js

```



## Delete Product Instance Group Image

**Description:**

Remove an image to a product instance group

**Method:**

DELETE

**Url:**

{{url}}/api/v2/private/product/productInstanceGroup/51/image/1



**Response:**

**status: OK**

**code: 200**

```js

```



