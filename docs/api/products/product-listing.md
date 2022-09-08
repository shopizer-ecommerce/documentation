# Product Listing

API for listing products based on different filters. All requests accept paging parameters 'page=' and expected page size 'count='. All query also accept the store 'store=' and language 'language=\`'. Response will display the following fields:

"totalPages": 10,  
"number": 20,  
"recordsTotal": 185,

totalPages is the number of expected pages based on the number of records. number is the count sent in the request. recordsTotal is the total number of item in storage.  
  
Filters can be combined in query for instance:  
  
/api/v2/products?manufacturerId=100&optionValueCodes=white,large



## Page products (list)

**Description:**

List all products

single or multiple filters can be applied.

**Method:**

GET

**Url:**

localhost:8080/api/v1/products



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 10,
    "number": 20,
    "recordsTotal": 185,
    "recordsFiltered": 0,
    "products": [
        {
            "id": 26000,
            "productShipeable": false,
            "available": false,
            "visible": true,
            "sortOrder": 0,
            "dateAvailable": "2022-06-22",
            "creationDate": "2022-06-22",
            "price": 7399,
            "quantity": 40,
            "sku": "3HS22004720X",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": -1,
            "productIsFree": false,
            "productSpecifications": {
                "height": null,
                "weight": null,
                "length": null,
                "width": null,
                "model": null,
                "manufacturer": null,
                "dimensionUnitOfMeasure": "cm",
                "weightUnitOfMeasure": "kg"
            },
            "rating": 0,
            "ratingCount": 0,
            "refSku": "3HS22004720X",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25598,
                "language": "en",
                "name": "Kids Status Helmet",
                "description": "<ul><li>Kids offroad helmet exclusively for Replica eDrive</li><li>Removable, washable, moisture-wicking inner lining and cheek pads</li><li>Kids specific helmet shell</li><li>Peak adjustable with screws</li><li>Exclusively for Husqvarna Motorcycles by 100%</li></ul>",
                "friendlyUrl": "kids-status-helmet",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Kids Status Helmet"
            },
            "productPrice": {
                "id": 51052,
                "originalPrice": "SEK7,399.00",
                "finalPrice": "SEK7,399.00",
                "discounted": false,
                "description": {
                    "id": 51081,
                    "language": "en",
                    "name": null,
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null,
                    "priceAppender": null
                }
            },
            "finalPrice": "SEK7,399.00",
            "originalPrice": "SEK7,399.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2350,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/3HS22004720X/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/e/e9c5e3f1-1093-4957-82fb-c927702dc21f.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/e/e9c5e3f1-1093-4957-82fb-c927702dc21f.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            ...,
}
```



## List items in specific category

**Description:**

List all products filter by category (1 to multiple)

**Method:**

GET

**Url:**

{{url}}/api/v12products



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 2,
    "recordsTotal": 2,
    "recordsFiltered": 0,
    "products": [
        {
            "id": 26850,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 5,
            "dateAvailable": "2022-09-02",
            "creationDate": "2022-09-04",
            "price": 34,
            "quantity": 1000,
            "sku": "PRBSK01",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
            "productIsFree": false,
            "productSpecifications": {
                "height": 12,
                "weight": 250,
                "length": 8,
                "width": 14,
                "model": null,
                "manufacturer": null,
                "dimensionUnitOfMeasure": "cm",
                "weightUnitOfMeasure": "kg"
            },
            "rating": 0,
            "ratingCount": 0,
            "refSku": null,
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25628,
                "language": "en",
                "name": "Nike Sport Shirt",
                "description": "Nike sport shirt",
                "friendlyUrl": "nike-sport-shirt",
                "keyWords": "",
                "highlights": "",
                "metaDescription": "",
                "title": "Nike Sport Shirt"
            },
            "productPrice": {
                "id": 51900,
                "originalPrice": "SEK34.00",
                "finalPrice": "SEK34.00",
                "discounted": false,
                "description": {
                    "id": 51111,
                    "language": "en",
                    "name": null,
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null,
                    "priceAppender": null
                }
            },
            "finalPrice": "SEK34.00",
            "originalPrice": "SEK34.00",
            "discounted": false,
            "image": null,
            "images": [],
            "manufacturer": {
                "id": 100,
                "code": "nike",
                "order": 0,
                "description": {
                    "id": 32,
                    "language": "en",
                    "name": "Nike",
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null
                }
            },
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10800,
                    "code": "sport-shirts",
                    "sortOrder": 10,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10800/",
                    "depth": 0,
                    "parent": null,
                    "description": {
                        "id": 373,
                        "language": "en",
                        "name": "Training Shirts",
                        "description": null,
                        "friendlyUrl": "training-shirts",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Training Shirts"
                    },
                    "productCount": 0,
                    "store": "DEFAULT",
                    "children": []
                }
            ],
            "type": {
                "id": 150,
                "code": "default",
                "visible": true,
                "allowAddToCart": true,
                "description": null
            },
            "canBePurchased": true,
            "owner": null
        },
        ...
    ]
}
```



## List items having a name like

**Description:**

List all products filtered by name

**Method:**

GET

**Url:**

localhost:8080/api/v1/products



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 1,
    "recordsTotal": 1,
    "recordsFiltered": 0,
    "products": [
        {
            "id": 26850,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 5,
            "dateAvailable": "2022-09-02",
            "creationDate": "2022-09-04",
            "price": 34,
            "quantity": 1000,
            "sku": "PRBSK01",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
            "productIsFree": false,
            "productSpecifications": {
                "height": 12,
                "weight": 250,
                "length": 8,
                "width": 14,
                "model": null,
                "manufacturer": null,
                "dimensionUnitOfMeasure": "cm",
                "weightUnitOfMeasure": "kg"
            },
        ...
    ]
}
```



## List items filtered by manufacturer

**Description:**

List all products filter by a specific category id.

**Method:**

GET

**Url:**

localhost:8080/api/v1/products



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 1,
    "recordsTotal": 1,
    "recordsFiltered": 0,
    "products": [
        {
            "id": 26900,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 7,
            "dateAvailable": "2022-09-06",
            "creationDate": "2022-09-06",
            "price": 32,
            "quantity": 0,
            "sku": "ATRS01",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
            "productIsFree": false,
             "canBePurchased": false,
            "owner": null,
            ...
        }
    ]
}
```



## List items filtered by option value id(s)

**Description:**

List all products filter by product option value id (1 .. n)

**Method:**

GET

**Url:**

{{url}}/api/v2/products?optionValueIds=800,700



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 1,
    "number": 1,
    "recordsTotal": 1,
    "recordsFiltered": 0,
    "products": [
        {
            "id": 26750,
            "productShipeable": true,
            "available": true,
            ... 
         },
            "canBePurchased": false,
            "owner": null
        }
    ]
}
```



## List items filtered by option value code(s)

**Description:**

List products filter by option value code.

**Method:**

GET

**Url:**

{{url}}/api/v2/products?optionValueCodes=coton



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 2,
    "number": 100,
    "recordsTotal": 185,
    "recordsFiltered": 0,
    "products": [
        {
            "id": 26000,
            "productShipeable": false,
            "available": false,
            "visible": true,
            "sortOrder": 0,
            "dateAvailable": "2022-06-22",
            "creationDate": "2022-06-22",
            "price": 7399,
            "quantity": 40,
            "sku": "3HS22004720X",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": -1,
            "productIsFree": false,
            "productSpecifications": {
                "height": null,
                "weight": null,
                "length": null,
                "width": null,
                "model": null,
                "manufacturer": null,
                "dimensionUnitOfMeasure": "cm",
                "weightUnitOfMeasure": "kg"
            },
            "rating": 0,
            "ratingCount": 0,
            "refSku": "3HS22004720X",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25598,
                "language": "en",
                "name": "Kids Status Helmet",
                "description": "<ul><li>Kids offroad helmet exclusively for Replica eDrive</li><li>Removable, washable, moisture-wicking inner lining and cheek pads</li><li>Kids specific helmet shell</li><li>Peak adjustable with screws</li><li>Exclusively for Husqvarna Motorcycles by 100%</li></ul>",
                "friendlyUrl": "kids-status-helmet",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Kids Status Helmet"
            },
            "productPrice": {
                "id": 51052,
                "originalPrice": "SEK7,399.00",
                "finalPrice": "SEK7,399.00",
                "discounted": false,
                "description": {
                    "id": 51081,
                    "language": "en",
                    "name": null,
                    "description": null,
                    "friendlyUrl": null,
                    "keyWords": null,
                    "highlights": null,
                    "metaDescription": null,
                    "title": null,
                    "priceAppender": null
                }
            },
            "finalPrice": "SEK7,399.00",
            "originalPrice": "SEK7,399.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2350,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/3HS22004720X/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/e/e9c5e3f1-1093-4957-82fb-c927702dc21f.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/e/e9c5e3f1-1093-4957-82fb-c927702dc21f.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [
                {
                    "id": 102,
                    "code": "SIZE_HELMET",
                    "type": "select",
                    "readOnly": false,
                    "name": "Size",
                    "lang": "en",
                    "variant": true,
                    "optionValues": [
                        {
                            "id": 100,
                            "code": "SIZE_HELMET-S-47-48",
                            "name": null,
                            "defaultValue": false,
                            "sortOrder": 20,
                            "image": null,
                            "order": 0,
                            "price": null,
                            "description": {
                                "id": 0,
                                "language": "en",
                                "name": "S/47-48",
                                "description": "S/47-48",
                                "friendlyUrl": null,
                                "keyWords": null,
                                "highlights": null,
                                "metaDescription": null,
                                "title": null
                            }
                        },
                        {
                            "id": 101,
                            "code": "SIZE_HELMET-M-49-50",
                            "name": null,
                            "defaultValue": false,
                            "sortOrder": 30,
                            "image": null,
                            "order": 0,
                            "price": null,
                            "description": {
                                "id": 0,
                                "language": "en",
                                "name": "M/49-50",
                                "description": "M/49-50",
                                "friendlyUrl": null,
                                "keyWords": null,
                                "highlights": null,
                                "metaDescription": null,
                                "title": null
                            }
                        },
                        {
                            "id": 102,
                            "code": "SIZE_HELMET-L-51-52",
                            "name": null,
                            "defaultValue": false,
                            "sortOrder": 30,
                            "image": null,
                            "order": 0,
                            "price": null,
                            "description": {
                                "id": 0,
                                "language": "en",
                                "name": "L/51-52",
                                "description": "L/51-52",
                                "friendlyUrl": null,
                                "keyWords": null,
                                "highlights": null,
                                "metaDescription": null,
                                "title": null
                            }
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "id": 100,
                    "productShipeable": false,
                    "available": false,
                    "visible": true,
                    "sortOrder": 1,
                    "dateAvailable": "2022-02-22",
                    "creationDate": null,
                    "store": "DEFAULT",
                    "productId": 26000,
                    "sku": "3HS220047202",
                    "defaultSelection": false,
                    "variant": {
                        "id": 2,
                        "code": "helmet-size-s-47-48",
                        "date": null,
                        "sortOrder": 0,
                        "defaultValue": false,
                        "option": {
                            "id": 102,
                            "code": "SIZE_HELMET",
                            "type": "select",
                            "readOnly": false,
                            "name": "Size",
                            "lang": "en",
                            "variant": false,
                            "optionValues": []
                        },
                        "optionValue": {
                            "id": 602,
                            "code": "SIZE_HELMET-S-47-48",
                            "name": "S/47-48",
                            "defaultValue": false,
                            "sortOrder": 0,
                            "image": null,
                            "price": null,
                            "description": null
                        }
                    },
                    "variantValue": null,
                    "code": "helmet-size-s-47-48",
                    "images": [],
                    "inventory": [
                        {
                            "id": 25951,
                            "quantity": 40,
                            "region": "*",
                            "regionVariant": null,
                            "owner": null,
                            "dateAvailable": null,
                            "available": true,
                            "productQuantityOrderMin": -1,
                            "productQuantityOrderMax": 1,
                            "creationDate": null,
                            "store": {
                                "id": 1,
                                "code": "DEFAULT",
                                "name": "MCSport",
                                "defaultLanguage": "en",
                                "currency": "SEK",
                                "inBusinessSince": "2021-01-03",
                                "email": "info@mcsport.se",
                                "phone": "08-594 307 70",
                                "template": null,
                                "useCache": true,
                                "currencyFormatNational": false,
                                "retailer": true,
                                "dimension": "CM",
                                "weight": "KG",
                                "currentUserLanguage": null,
                                "address": {
                                    "stateProvince": "Stockholm",
                                    "country": "CA",
                                    "address": "V&amp;auml;stbergav&amp;auml;gen 24",
                                    "postalCode": "12630",
                                    "city": "H&amp;auml;gersten",
                                    "active": true
                                },
                                "logo": null,
                                "parent": null,
                                "supportedLanguages": [
                                    {
                                        "code": "en",
                                        "id": 1
                                    },
                                    {
                                        "code": "sv",
                                        "id": 4
                                    }
                                ],
                                "readableAudit": null
                            },
                            "sku": "3HS220047202",
                            "prices": [
                                {
                                    "id": 51052,
                                    "originalPrice": "SEK7,399.00",
                                    "finalPrice": "SEK7,399.00",
                                    "discounted": false,
                                    "description": {
                                        "id": 51081,
                                        "language": "en",
                                        "name": "DEFAULT",
                                        "description": null,
                                        "friendlyUrl": null,
                                        "keyWords": null,
                                        "highlights": null,
                                        "metaDescription": null,
                                        "title": null,
                                        "priceAppender": null
                                    }
                                }
                            ]
                        }
                    ]
                },
                ...
 
    ]
}
```



