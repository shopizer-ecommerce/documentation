# Product Definition

Product definitions represent product metadata that can be used for multiple items (sku). For instance a product definition t-shirt is the metadata for small white t-shirt and medium white t-shirt.



## create product definition

**Description:**

Product definition can also be immediately attached to category by adding an array of category id in which the product will be created.

&#x60;&#x60;&#x60;
&quot;categories&quot;: [
{
&quot;id&quot;: 51
}
],
&#x60;&#x60;&#x60;

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product?lang=en&store=DEFAULT


**Body:**

```js
{
  "canBePurchased": true,
  "price": 29.00,
  "quantity": 100,
  "descriptions": [
    {
      "description": "T Shirt",
      "friendlyUrl": "t-shirt",
      "name": "T Shirt",
      "title": "T Shirt",
      "language": "en"
    }
  ],
  "identifier": "TSHIRT",
  "productSpecifications": {
    "dimensionUnitOfMeasure": "in",
    "height": 22,
    "length": 14,
    "weight": 0.225,
    "weightUnitOfMeasure": "lb",
    "manufacturer": "DEFAULT",
    "width": 36
  },
  "shipeable": true,
  "sortOrder": 10,
  "type": "GENERAL",
  "virtual": false,
  "visible": true
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 26050
}
```



## edit product definition

**Description:**

Edit product definition

**Method:**

PUT

**Url:**

{{url}}/api/v2/private/product/26750


**Body:**

```js
{
  "canBePurchased": true,
  "price": 29.00,
  "descriptions": [
    {
      "description": "Light cotton T Shirt",
      "friendlyUrl": "light-cotton-t-shirt",
      "name": "T Shirt",
      "title": "T Shirt",
      "language": "en"
    }
  ],
  "identifier": "TSHIRTA",
  "productSpecifications": {
    "dimensionUnitOfMeasure": "in",
    "height": 22,
    "length": 14,
    "weight": 0.225,
    "weightUnitOfMeasure": "lb",
    "manufacturer": "DEFAULT",
    "width": 36
  },
  "shipeable": true,
  "sortOrder": 10,
  "type": "GENERAL",
  "virtual": false,
  "visible": true
}
```


**Response:**

**status: OK**

**code: 200**

```js

```



## get product definition by id

**Description:**

Product definition can also be immediately attached to category by adding an array of category id in which the product will be created.

&#x60;&#x60;&#x60; json
&quot;categories&quot;: [
{
&quot;id&quot;: 51
}
],
&#x60;&#x60;&#x60;

**Method:**

GET

**Url:**

{{url}}/api/v2/private/product/26750?lang=en&store=DEFAULT



**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 26750,
    "visible": true,
    "shipeable": true,
    "virtual": false,
    "canBePurchased": true,
    "dateAvailable": "2022-09-01",
    "identifier": "TSHIRTA",
    "sku": null,
    "productSpecifications": {
        "height": 22,
        "weight": 0.23,
        "length": 14,
        "width": 36,
        "model": null,
        "manufacturer": null,
        "dimensionUnitOfMeasure": "cm",
        "weightUnitOfMeasure": "kg"
    },
    "sortOrder": 10,
    "type": {
        "id": 300,
        "code": "GENERAL",
        "visible": false,
        "allowAddToCart": false,
        "description": {
            "id": 9,
            "language": "en",
            "name": "General",
            "description": null,
            "friendlyUrl": null,
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": null
        }
    },
    "categories": [
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
    ],
    "manufacturer": {
        "id": 1,
        "code": "DEFAULT",
        "order": 999,
        "description": {
            "id": 1,
            "language": "en",
            "name": "DEFAULT",
            "description": "<p>  DEFAULT</p>\n",
            "friendlyUrl": "",
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": null
        }
    },
    "description": {
        "id": 25626,
        "language": "en",
        "name": "T Shirt",
        "description": "Light cotton T Shirt",
        "friendlyUrl": "light-cotton-t-shirt",
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": "T Shirt"
    },
    "properties": [],
    "images": [
        {
            "id": 2400,
            "imageName": "white-tshirt.jpeg",
            "imageUrl": "http://localhost:8080/static/products/DEFAULT/TSHIRTA/SMALL/white-tshirt.jpeg",
            "externalUrl": null,
            "videoUrl": null,
            "imageType": 0,
            "order": 0,
            "defaultImage": true
        }
    ],
    "inventory": {
        "id": 26950,
        "quantity": 100,
        "region": "*",
        "regionVariant": null,
        "owner": null,
        "dateAvailable": null,
        "available": true,
        "productQuantityOrderMin": 0,
        "productQuantityOrderMax": 0,
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
        "sku": "TSHIRTA",
        "prices": [
            {
                "id": 52050,
                "originalPrice": "SEK26.99",
                "finalPrice": "SEK25.99",
                "discounted": false,
                "description": null
            }
        ],
        "price": "25.99"
    }
}
```



## list product definitions

**Description:**

Product definition can also be immediately attached to category by adding an array of category id in which the product will be created.

&#x60;&#x60;&#x60; json
&quot;categories&quot;: [
{
&quot;id&quot;: 51
}
],
&#x60;&#x60;&#x60;

**Method:**

GET

**Url:**

{{url}}/api/v2/products?lang=en&store=DEFAULT&count=25



**Response:**

**status: OK**

**code: 200**

```js
{
    "totalPages": 8,
    "number": 25,
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
                {
                    "id": 101,
                    "productShipeable": false,
                    "available": false,
                    "visible": true,
                    "sortOrder": 1,
                    "dateAvailable": "2022-02-22",
                    "creationDate": null,
                    "store": "DEFAULT",
                    "productId": 26000,
                    "sku": "3HS220047203",
                    "defaultSelection": false,
                    "variant": {
                        "id": 50,
                        "code": "helmet-size-medium",
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
                            "id": 650,
                            "code": "SIZE_HELMET-M-49-50",
                            "name": "M/49-50",
                            "defaultValue": false,
                            "sortOrder": 0,
                            "image": null,
                            "price": null,
                            "description": null
                        }
                    },
                    "variantValue": null,
                    "code": "helmet-size-medium",
                    "images": [],
                    "inventory": []
                },
                {
                    "id": 102,
                    "productShipeable": false,
                    "available": false,
                    "visible": true,
                    "sortOrder": 1,
                    "dateAvailable": "2022-02-22",
                    "creationDate": null,
                    "store": "DEFAULT",
                    "productId": 26000,
                    "sku": "3HS220047204",
                    "defaultSelection": false,
                    "variant": {
                        "id": 51,
                        "code": "helmet-size-large",
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
                            "id": 651,
                            "code": "SIZE_HELMET-L-51-52",
                            "name": "L/51-52",
                            "defaultValue": false,
                            "sortOrder": 0,
                            "image": null,
                            "price": null,
                            "description": null
                        }
                    },
                    "variantValue": null,
                    "code": "helmet-size-large",
                    "images": [],
                    "inventory": []
                }
            ],
            "properties": [],
            "categories": [
                {
                    "id": 10050,
                    "code": "helmets",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10017//10050/",
                    "depth": 1,
                    "parent": {
                        "id": 10017,
                        "code": "equipment"
                    },
                    "description": {
                        "id": 243,
                        "language": "en",
                        "name": "HELMETS",
                        "description": "",
                        "friendlyUrl": "helmets",
                        "keyWords": "",
                        "highlights": "",
                        "metaDescription": "",
                        "title": ""
                    },
                    "productCount": 0,
                    "store": "DEFAULT",
                    "children": []
                }
            ],
            "type": {
                "id": 102,
                "code": "helmet",
                "visible": true,
                "allowAddToCart": true,
                "description": null
            },
            "canBePurchased": false,
            "owner": null
        },
        {
            "id": 25790,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 2356,
            "quantity": 1,
            "sku": "21008915044",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "21008915044",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25518,
                "language": "en",
                "name": "Licence plate holder support ",
                "description": "<ul><li>Visual highlight</li><li>Perfectly integrated into the motorcycle</li><li>Shortened design of the license plate holder support</li></ul>",
                "friendlyUrl": "licence-plate-holder-support-",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Licence plate holder support "
            },
            "productPrice": {
                "id": 50830,
                "originalPrice": "SEK2,356.00",
                "finalPrice": "SEK2,356.00",
                "discounted": false,
                "description": {
                    "id": 50919,
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
            "finalPrice": "SEK2,356.00",
            "originalPrice": "SEK2,356.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2263,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/21008915044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/7/7fbcf2b0-9062-40d7-a78d-9c2d9ff1bb02.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/7/7fbcf2b0-9062-40d7-a78d-9c2d9ff1bb02.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10605,
                    "code": "plastic-parts",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10605/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 356,
                        "language": "en",
                        "name": "Separate Plastic Parts",
                        "description": null,
                        "friendlyUrl": "separate-plastic-parts",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Separate Plastic Parts"
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
        {
            "id": 25824,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 1645,
            "quantity": 1,
            "sku": "23607940200",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "23607940200",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25586,
                "language": "en",
                "name": "Seat ",
                "description": "<ul><li>Resistant coating</li><li>Enables shorter drivers to also achieve the optimum seat height</li><li>Lower compared to the standard seat</li></ul>",
                "friendlyUrl": "seat-",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Seat "
            },
            "productPrice": {
                "id": 50898,
                "originalPrice": "SEK1,645.00",
                "finalPrice": "SEK1,645.00",
                "discounted": false,
                "description": {
                    "id": 51054,
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
            "finalPrice": "SEK1,645.00",
            "originalPrice": "SEK1,645.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2302,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/23607940200/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/9/9076af33-756b-4229-95d1-904788874506.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/9/9076af33-756b-4229-95d1-904788874506.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10353,
                    "code": "seats",
                    "sortOrder": 310,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003//10353/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 299,
                        "language": "en",
                        "name": "Seat & covers",
                        "description": "",
                        "friendlyUrl": "seat-covers",
                        "keyWords": "",
                        "highlights": "",
                        "metaDescription": "",
                        "title": ""
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
        {
            "id": 25812,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 1645,
            "quantity": 1,
            "sku": "25007940000",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25007940000",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25566,
                "language": "en",
                "name": "Seat",
                "description": "<ul><li>Resistant coating</li><li>Higher compared to the standard seat</li></ul><p></p>Specially designed for riders with a height of above 1.80 m.",
                "friendlyUrl": "seat",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Seat"
            },
            "productPrice": {
                "id": 50874,
                "originalPrice": "SEK1,645.00",
                "finalPrice": "SEK1,645.00",
                "discounted": false,
                "description": {
                    "id": 51007,
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
            "finalPrice": "SEK1,645.00",
            "originalPrice": "SEK1,645.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2292,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25007940000/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/b/b8a244e0-15c4-42d8-909e-43e12e1b8d40.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/b/b8a244e0-15c4-42d8-909e-43e12e1b8d40.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10353,
                    "code": "seats",
                    "sortOrder": 310,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003//10353/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 299,
                        "language": "en",
                        "name": "Seat & covers",
                        "description": "",
                        "friendlyUrl": "seat-covers",
                        "keyWords": "",
                        "highlights": "",
                        "metaDescription": "",
                        "title": ""
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
        {
            "id": 25813,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 1645,
            "quantity": 1,
            "sku": "25007940100",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25007940100",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25562,
                "language": "en",
                "name": "Seat",
                "description": "<ul><li>Resistant coating</li><li>Enables shorter drivers to also achieve the optimum seat height</li><li>Lower compared to the standard seat</li></ul>",
                "friendlyUrl": "seat",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Seat"
            },
            "productPrice": {
                "id": 50875,
                "originalPrice": "SEK1,645.00",
                "finalPrice": "SEK1,645.00",
                "discounted": false,
                "description": {
                    "id": 51009,
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
            "finalPrice": "SEK1,645.00",
            "originalPrice": "SEK1,645.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2290,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25007940100/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/6/6c1e6217-b60c-420a-abd5-262000b13114.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/6/6c1e6217-b60c-420a-abd5-262000b13114.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10353,
                    "code": "seats",
                    "sortOrder": 310,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003//10353/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 299,
                        "language": "en",
                        "name": "Seat & covers",
                        "description": "",
                        "friendlyUrl": "seat-covers",
                        "keyWords": "",
                        "highlights": "",
                        "metaDescription": "",
                        "title": ""
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
        {
            "id": 25787,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 651,
            "quantity": 1,
            "sku": "2500805400028",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "2500805400028",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25512,
                "language": "en",
                "name": "Spoiler set",
                "description": "null",
                "friendlyUrl": "spoiler-set",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Spoiler set"
            },
            "productPrice": {
                "id": 50824,
                "originalPrice": "SEK651.00",
                "finalPrice": "SEK651.00",
                "discounted": false,
                "description": {
                    "id": 50906,
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
            "finalPrice": "SEK651.00",
            "originalPrice": "SEK651.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2260,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/2500805400028/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/d/da121755-c08c-4107-82f5-841b4e9fa14e.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/d/da121755-c08c-4107-82f5-841b4e9fa14e.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10605,
                    "code": "plastic-parts",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10605/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 356,
                        "language": "en",
                        "name": "Separate Plastic Parts",
                        "description": null,
                        "friendlyUrl": "separate-plastic-parts",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Separate Plastic Parts"
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
        {
            "id": 25782,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 651,
            "quantity": 1,
            "sku": "25008054000HA",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25008054000HA",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25502,
                "language": "en",
                "name": "Spoiler set",
                "description": "null",
                "friendlyUrl": "spoiler-set",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Spoiler set"
            },
            "productPrice": {
                "id": 50814,
                "originalPrice": "SEK651.00",
                "finalPrice": "SEK651.00",
                "discounted": false,
                "description": {
                    "id": 50887,
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
            "finalPrice": "SEK651.00",
            "originalPrice": "SEK651.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2254,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25008054000HA/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/9/90c2ddb5-cb11-4117-9a98-de443e50f308.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/9/90c2ddb5-cb11-4117-9a98-de443e50f308.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10605,
                    "code": "plastic-parts",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10605/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 356,
                        "language": "en",
                        "name": "Separate Plastic Parts",
                        "description": null,
                        "friendlyUrl": "separate-plastic-parts",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Separate Plastic Parts"
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
        {
            "id": 25701,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 295,
            "quantity": 1,
            "sku": "25013960000",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25013960000",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25334,
                "language": "en",
                "name": "Footbrake cylinder extender",
                "description": "<ul><li>Increases the volume of the rear master cylinder</li><li>Additional cooling ribs minimize the heating of the brake fluid</li><li>Eliminates “fading” almost completely</li></ul>",
                "friendlyUrl": "footbrake-cylinder-extender",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Footbrake cylinder extender"
            },
            "productPrice": {
                "id": 50649,
                "originalPrice": "SEK295.00",
                "finalPrice": "SEK295.00",
                "discounted": false,
                "description": {
                    "id": 50554,
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
            "finalPrice": "SEK295.00",
            "originalPrice": "SEK295.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2156,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25013960000/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/3/3b9b7685-75de-4c9b-b58a-c575de1ceb1d.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/3/3b9b7685-75de-4c9b-b58a-c575de1ceb1d.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10603,
                    "code": "bling",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10603/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 352,
                        "language": "en",
                        "name": "Bling Bling",
                        "description": null,
                        "friendlyUrl": "bling-bling",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebars"
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
        {
            "id": 25822,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 1645,
            "quantity": 1,
            "sku": "25107940100",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25107940100",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25581,
                "language": "en",
                "name": "Seat",
                "description": "<ul><li>Resistant coating</li><li>Higher compared to the standard seat</li></ul><p></p>Specially designed for riders with a height of above 1.90 m",
                "friendlyUrl": "seat",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Seat"
            },
            "productPrice": {
                "id": 50894,
                "originalPrice": "SEK1,645.00",
                "finalPrice": "SEK1,645.00",
                "discounted": false,
                "description": {
                    "id": 51046,
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
            "finalPrice": "SEK1,645.00",
            "originalPrice": "SEK1,645.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2300,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25107940100/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/d/dfa26577-94f6-47ed-9c98-0ec319db604e.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/d/dfa26577-94f6-47ed-9c98-0ec319db604e.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10353,
                    "code": "seats",
                    "sortOrder": 310,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003//10353/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 299,
                        "language": "en",
                        "name": "Seat & covers",
                        "description": "",
                        "friendlyUrl": "seat-covers",
                        "keyWords": "",
                        "highlights": "",
                        "metaDescription": "",
                        "title": ""
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
        {
            "id": 25816,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 1645,
            "quantity": 1,
            "sku": "25107940200",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25107940200",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25569,
                "language": "en",
                "name": "Seat",
                "description": "<ul><li>Resistant coating</li><li>Enables shorter drivers to also achieve the optimum seat height</li><li>Lower compared to the standard seat</li></ul>",
                "friendlyUrl": "seat",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Seat"
            },
            "productPrice": {
                "id": 50878,
                "originalPrice": "SEK1,645.00",
                "finalPrice": "SEK1,645.00",
                "discounted": false,
                "description": {
                    "id": 51008,
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
            "finalPrice": "SEK1,645.00",
            "originalPrice": "SEK1,645.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2293,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25107940200/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/0/0805282e-0bbd-46a4-87c5-2e0b642e7699.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/0/0805282e-0bbd-46a4-87c5-2e0b642e7699.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10353,
                    "code": "seats",
                    "sortOrder": 310,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003//10353/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 299,
                        "language": "en",
                        "name": "Seat & covers",
                        "description": "",
                        "friendlyUrl": "seat-covers",
                        "keyWords": "",
                        "highlights": "",
                        "metaDescription": "",
                        "title": ""
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
        {
            "id": 25721,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 344,
            "quantity": 2,
            "sku": "25530902144",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25530902144",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25384,
                "language": "en",
                "name": "Factory Racing ignition cover plug",
                "description": "<ul><li>CNC milled from high-strength aluminum</li><li>Elegant anodized surface</li><li>Visual highlight</li></ul>",
                "friendlyUrl": "factory-racing-ignition-cover-plug",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Factory Racing ignition cover plug"
            },
            "productPrice": {
                "id": 50690,
                "originalPrice": "SEK344.00",
                "finalPrice": "SEK344.00",
                "discounted": false,
                "description": {
                    "id": 50643,
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
            "finalPrice": "SEK344.00",
            "originalPrice": "SEK344.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2189,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25530902144/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/4/48aa44ca-d8ec-4264-9b25-97e573af8d3f.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/4/48aa44ca-d8ec-4264-9b25-97e573af8d3f.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10603,
                    "code": "bling",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10603/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 352,
                        "language": "en",
                        "name": "Bling Bling",
                        "description": null,
                        "friendlyUrl": "bling-bling",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebars"
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
        {
            "id": 25708,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 533,
            "quantity": 1,
            "sku": "25534931044",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25534931044",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25353,
                "language": "en",
                "name": "Gear shift lever step plate",
                "description": "<ul><li>CNC milled from high-strength aluminum</li><li>Elegant anodized surface</li><li>Visual highlight</li></ul><p></p>With 7 mm wider stepping surface than standard.",
                "friendlyUrl": "gear-shift-lever-step-plate",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Gear shift lever step plate"
            },
            "productPrice": {
                "id": 50666,
                "originalPrice": "SEK533.00",
                "finalPrice": "SEK533.00",
                "discounted": false,
                "description": {
                    "id": 50590,
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
            "finalPrice": "SEK533.00",
            "originalPrice": "SEK533.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2166,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25534931044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/0/05501c23-9e1d-493a-84ed-1a51c570894a.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/0/05501c23-9e1d-493a-84ed-1a51c570894a.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10603,
                    "code": "bling",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10603/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 352,
                        "language": "en",
                        "name": "Bling Bling",
                        "description": null,
                        "friendlyUrl": "bling-bling",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebars"
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
        {
            "id": 25732,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 462,
            "quantity": 1,
            "sku": "25538941044",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "25538941044",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25402,
                "language": "en",
                "name": "Factory Racing oil filter cover",
                "description": "<ul><li>CNC milled from high-strength aluminum</li><li>Elegant anodized surface</li><li>Visual highlight</li></ul>",
                "friendlyUrl": "factory-racing-oil-filter-cover",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Factory Racing oil filter cover"
            },
            "productPrice": {
                "id": 50714,
                "originalPrice": "SEK462.00",
                "finalPrice": "SEK462.00",
                "discounted": false,
                "description": {
                    "id": 50686,
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
            "finalPrice": "SEK462.00",
            "originalPrice": "SEK462.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2199,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/25538941044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/5/5b645f06-8e8a-40c1-a185-2de105055364.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/5/5b645f06-8e8a-40c1-a185-2de105055364.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10603,
                    "code": "bling",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10603/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 352,
                        "language": "en",
                        "name": "Bling Bling",
                        "description": null,
                        "friendlyUrl": "bling-bling",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebars"
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
        {
            "id": 25725,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 236,
            "quantity": 1,
            "sku": "26130920044",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "26130920044",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25387,
                "language": "en",
                "name": "Oil plug",
                "description": "<ul><li>CNC milled from high-strength aluminum</li><li>Elegant anodized surface</li><li>Visual highlight</li><li>Includes drilling for safety wire</li></ul>",
                "friendlyUrl": "oil-plug",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Oil plug"
            },
            "productPrice": {
                "id": 50700,
                "originalPrice": "SEK236.00",
                "finalPrice": "SEK236.00",
                "discounted": false,
                "description": {
                    "id": 50658,
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
            "finalPrice": "SEK236.00",
            "originalPrice": "SEK236.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2191,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/26130920044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/3/3ea4bfe2-47ac-4834-87f6-f6fd29cfe9af.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/3/3ea4bfe2-47ac-4834-87f6-f6fd29cfe9af.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10603,
                    "code": "bling",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10603/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 352,
                        "language": "en",
                        "name": "Bling Bling",
                        "description": null,
                        "friendlyUrl": "bling-bling",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebars"
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
        {
            "id": 25663,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 236,
            "quantity": 8,
            "sku": "26602908000",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "26602908000",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25264,
                "language": "en",
                "name": "Handlebar muffs",
                "description": "<ul><li>Never again cold fingers!</li><li>Mounting over handlebar and switches</li><li>Better control during winter ride-outs</li></ul><p></p><ul><li>Never again cold fingers!</li><li>Mounting over handlebar and switches</li><li>Better control during winter ride-outs</li></ul>",
                "friendlyUrl": "handlebar-muffs",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Handlebar muffs"
            },
            "productPrice": {
                "id": 50576,
                "originalPrice": "SEK236.00",
                "finalPrice": "SEK236.00",
                "discounted": false,
                "description": {
                    "id": 50410,
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
            "finalPrice": "SEK236.00",
            "originalPrice": "SEK236.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2114,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/26602908000/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/9/9df24299-f11f-43cb-8bd0-1a7c7b09c15d.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/9/9df24299-f11f-43cb-8bd0-1a7c7b09c15d.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10600,
                    "code": "handguards",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10600/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 346,
                        "language": "en",
                        "name": "Hand Guards",
                        "description": null,
                        "friendlyUrl": "handguards",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Hand Guards"
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
        {
            "id": 25743,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 461,
            "quantity": 1,
            "sku": "26606001000DB",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "26606001000DB",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25424,
                "language": "en",
                "name": "Lower section of the air filter ",
                "description": "null",
                "friendlyUrl": "lower-section-of-the-air-filter-",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Lower section of the air filter "
            },
            "productPrice": {
                "id": 50736,
                "originalPrice": "SEK461.00",
                "finalPrice": "SEK461.00",
                "discounted": false,
                "description": {
                    "id": 50731,
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
            "finalPrice": "SEK461.00",
            "originalPrice": "SEK461.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2211,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/26606001000DB/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/6/6619d3a2-4f4f-4372-a61f-49411c65b6a4.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/6/6619d3a2-4f4f-4372-a61f-49411c65b6a4.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10605,
                    "code": "plastic-parts",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10605/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 356,
                        "language": "en",
                        "name": "Separate Plastic Parts",
                        "description": null,
                        "friendlyUrl": "separate-plastic-parts",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Separate Plastic Parts"
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
        {
            "id": 25784,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 344,
            "quantity": 1,
            "sku": "26608001000DB",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "26608001000DB",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25506,
                "language": "en",
                "name": "Headlight shroud",
                "description": "null",
                "friendlyUrl": "headlight-shroud",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Headlight shroud"
            },
            "productPrice": {
                "id": 50818,
                "originalPrice": "SEK344.00",
                "finalPrice": "SEK344.00",
                "discounted": false,
                "description": {
                    "id": 50894,
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
            "finalPrice": "SEK344.00",
            "originalPrice": "SEK344.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2256,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/26608001000DB/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/f/f256a3b2-68be-4afc-9810-9e6d810919f6.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/f/f256a3b2-68be-4afc-9810-9e6d810919f6.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10605,
                    "code": "plastic-parts",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10605/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 356,
                        "language": "en",
                        "name": "Separate Plastic Parts",
                        "description": null,
                        "friendlyUrl": "separate-plastic-parts",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Separate Plastic Parts"
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
        {
            "id": 25793,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 1408,
            "quantity": 5,
            "sku": "27008915044",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "27008915044",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25523,
                "language": "en",
                "name": "Licence plate holder support ",
                "description": "<ul><li>Visual highlight</li><li>Perfectly integrated into the motorcycle</li><li>Shortened design of the license plate holder support</li><li>Shows off the slender rear part to full advantage</li></ul>",
                "friendlyUrl": "licence-plate-holder-support-",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Licence plate holder support "
            },
            "productPrice": {
                "id": 50836,
                "originalPrice": "SEK1,408.00",
                "finalPrice": "SEK1,408.00",
                "discounted": false,
                "description": {
                    "id": 50931,
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
            "finalPrice": "SEK1,408.00",
            "originalPrice": "SEK1,408.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2266,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/27008915044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/4/444a28a1-05b5-4cba-be0e-517c77b09924.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/4/444a28a1-05b5-4cba-be0e-517c77b09924.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                },
                {
                    "id": 2267,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/27008915044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/7/72bf2086-0be5-4dbb-9998-87fe57d072da.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/7/72bf2086-0be5-4dbb-9998-87fe57d072da.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": false
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10605,
                    "code": "plastic-parts",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10605/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 356,
                        "language": "en",
                        "name": "Separate Plastic Parts",
                        "description": null,
                        "friendlyUrl": "separate-plastic-parts",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Separate Plastic Parts"
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
        {
            "id": 25710,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 296,
            "quantity": 2,
            "sku": "27013903000",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "27013903000",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25358,
                "language": "en",
                "name": "Brake fluid reservoir cover",
                "description": "<ul><li>CNC milled from high-strength aluminum</li><li>Elegant anodized surface</li><li>Visual highlight</li></ul>",
                "friendlyUrl": "brake-fluid-reservoir-cover",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Brake fluid reservoir cover"
            },
            "productPrice": {
                "id": 50670,
                "originalPrice": "SEK296.00",
                "finalPrice": "SEK296.00",
                "discounted": false,
                "description": {
                    "id": 50598,
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
            "finalPrice": "SEK296.00",
            "originalPrice": "SEK296.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2168,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/27013903000/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/3/3c5123f5-2484-467f-9206-c916102085ed.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/3/3c5123f5-2484-467f-9206-c916102085ed.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                },
                {
                    "id": 2169,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/27013903000/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/8/8629c656-e224-492b-99ba-06e5a28e1971.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/8/8629c656-e224-492b-99ba-06e5a28e1971.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": false
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10603,
                    "code": "bling",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10603/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 352,
                        "language": "en",
                        "name": "Bling Bling",
                        "description": null,
                        "friendlyUrl": "bling-bling",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebars"
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
        {
            "id": 25667,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 699,
            "quantity": 1,
            "sku": "6030217910030",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "6030217910030",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25271,
                "language": "en",
                "name": "Handguard kit",
                "description": "<ul><li>Excellent weather protection</li><li>Closed design</li><li>2-component plastic handguard</li><li>Black middle section = maximum strength for optimum protection</li><li>Colored top and bottom parts = highly flexible under the roughest conditions</li><li>Improved optics</li></ul>",
                "friendlyUrl": "handguard-kit",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Handguard kit"
            },
            "productPrice": {
                "id": 50584,
                "originalPrice": "SEK699.00",
                "finalPrice": "SEK699.00",
                "discounted": false,
                "description": {
                    "id": 50426,
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
            "finalPrice": "SEK699.00",
            "originalPrice": "SEK699.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2119,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/6030217910030/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/9/9e1dfb6a-ab87-4424-8e3e-b5b80ccb7d2b.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/9/9e1dfb6a-ab87-4424-8e3e-b5b80ccb7d2b.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10600,
                    "code": "handguards",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10600/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 346,
                        "language": "en",
                        "name": "Hand Guards",
                        "description": null,
                        "friendlyUrl": "handguards",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Hand Guards"
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
        {
            "id": 25656,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 1054,
            "quantity": 6,
            "sku": "76502979144",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "76502979144",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25247,
                "language": "en",
                "name": "Wrap-around handguard kit",
                "description": "<ul><li>Including all required assembly materials</li><li>Extremely sturdy aluminum brackets</li><li>Prevents broken levers</li></ul>",
                "friendlyUrl": "wrap-around-handguard-kit",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Wrap-around handguard kit"
            },
            "productPrice": {
                "id": 50559,
                "originalPrice": "SEK1,054.00",
                "finalPrice": "SEK1,054.00",
                "discounted": false,
                "description": {
                    "id": 50378,
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
            "finalPrice": "SEK1,054.00",
            "originalPrice": "SEK1,054.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2106,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/76502979144/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/4/4e91e489-34f1-4bfe-9437-f6a826ebfef8.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/4/4e91e489-34f1-4bfe-9437-f6a826ebfef8.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                },
                {
                    "id": 2502,
                    "imageName": "blob",
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/76502979144/SMALL/blob",
                    "externalUrl": null,
                    "videoUrl": null,
                    "imageType": 0,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10600,
                    "code": "handguards",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10600/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 346,
                        "language": "en",
                        "name": "Hand Guards",
                        "description": null,
                        "friendlyUrl": "handguards",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Hand Guards"
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
        {
            "id": 25687,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 651,
            "quantity": 1,
            "sku": "77701939010",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "77701939010",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25313,
                "language": "en",
                "name": "Handlebar riser",
                "description": "<p></p>These CNC-machined, high-strength aluminium handlebar risers are extremely robust thanks to their special screw fastening (from below) on the triple clamp. Twisting and bending are therefore practically impossible. Use of these handlebar risers is only possible on CNC-machined triple clamps. Available in three different heights. 10 mm",
                "friendlyUrl": "handlebar-riser",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Handlebar riser"
            },
            "productPrice": {
                "id": 50624,
                "originalPrice": "SEK651.00",
                "finalPrice": "SEK651.00",
                "discounted": false,
                "description": {
                    "id": 50506,
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
            "finalPrice": "SEK651.00",
            "originalPrice": "SEK651.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2141,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/77701939010/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/a/a5114a0d-c219-4474-92c0-9c1424b0b2c0.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/a/a5114a0d-c219-4474-92c0-9c1424b0b2c0.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10601,
                    "code": "handlebar-support",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10601/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 349,
                        "language": "en",
                        "name": "Handlebar Support",
                        "description": null,
                        "friendlyUrl": "handlebar-support",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebar Support"
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
        {
            "id": 25714,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 580,
            "quantity": 2,
            "sku": "77734931144",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "77734931144",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25366,
                "language": "en",
                "name": "Gear shift lever step plate",
                "description": "<ul><li>CNC milled from high-strength aluminum</li><li>Elegant anodized surface</li></ul>",
                "friendlyUrl": "gear-shift-lever-step-plate",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Gear shift lever step plate"
            },
            "productPrice": {
                "id": 50678,
                "originalPrice": "SEK580.00",
                "finalPrice": "SEK580.00",
                "discounted": false,
                "description": {
                    "id": 50614,
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
            "finalPrice": "SEK580.00",
            "originalPrice": "SEK580.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2177,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/77734931144/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/f/fa7147f7-2d6e-431b-8cc6-769e0751abe2.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/f/fa7147f7-2d6e-431b-8cc6-769e0751abe2.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10603,
                    "code": "bling",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10603/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 352,
                        "language": "en",
                        "name": "Bling Bling",
                        "description": null,
                        "friendlyUrl": "bling-bling",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebars"
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
        {
            "id": 25655,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 1172,
            "quantity": 3,
            "sku": "79702984044",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "79702984044",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25244,
                "language": "en",
                "name": "Wrap-around handguard kit",
                "description": "<ul><li>Including all required assembly materials</li><li>Extremely sturdy aluminum brackets</li><li>Prevents broken levers</li></ul>",
                "friendlyUrl": "wrap-around-handguard-kit",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Wrap-around handguard kit"
            },
            "productPrice": {
                "id": 50558,
                "originalPrice": "SEK1,172.00",
                "finalPrice": "SEK1,172.00",
                "discounted": false,
                "description": {
                    "id": 50372,
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
            "finalPrice": "SEK1,172.00",
            "originalPrice": "SEK1,172.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2103,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/79702984044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/7/7b75de5b-c86b-4ba8-aa9b-7ab641281744.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/7/7b75de5b-c86b-4ba8-aa9b-7ab641281744.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                },
                {
                    "id": 2104,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/79702984044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/2/285a6966-77b2-43ae-84b0-eea3189dc078.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/2/285a6966-77b2-43ae-84b0-eea3189dc078.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": false
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10600,
                    "code": "handguards",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10004/10600/",
                    "depth": 2,
                    "parent": {
                        "id": 10004,
                        "code": "plastics"
                    },
                    "description": {
                        "id": 346,
                        "language": "en",
                        "name": "Hand Guards",
                        "description": null,
                        "friendlyUrl": "handguards",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Hand Guards"
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
        {
            "id": 25715,
            "productShipeable": true,
            "available": true,
            "visible": true,
            "sortOrder": 1,
            "dateAvailable": "2022-03-28",
            "creationDate": "2022-03-28",
            "price": 296,
            "quantity": 1,
            "sku": "81302933044",
            "preOrder": false,
            "productVirtual": false,
            "quantityOrderMaximum": 1,
            "quantityOrderMinimum": 1,
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
            "refSku": "81302933044",
            "rentalDuration": 0,
            "rentalPeriod": 0,
            "description": {
                "id": 25368,
                "language": "en",
                "name": "Clutch reservoir cover",
                "description": "<ul><li>CNC milled from high-strength aluminum</li><li>Elegant anodized surface</li><li>Visual highlight</li></ul><p></p>fits Magura clutch reservoirs",
                "friendlyUrl": "clutch-reservoir-cover",
                "keyWords": null,
                "highlights": null,
                "metaDescription": null,
                "title": "Clutch reservoir cover"
            },
            "productPrice": {
                "id": 50680,
                "originalPrice": "SEK296.00",
                "finalPrice": "SEK296.00",
                "discounted": false,
                "description": {
                    "id": 50618,
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
            "finalPrice": "SEK296.00",
            "originalPrice": "SEK296.00",
            "discounted": false,
            "image": null,
            "images": [
                {
                    "id": 2178,
                    "imageName": null,
                    "imageUrl": "http://localhost:8080/static/products/DEFAULT/81302933044/SMALL/null",
                    "externalUrl": "https://cms.jinomotos.com/pim/7/7f7484e4-82ec-48bd-bce3-1317f8ebe21a.jpg",
                    "videoUrl": "https://cms.jinomotos.com/pim/7/7f7484e4-82ec-48bd-bce3-1317f8ebe21a.jpg",
                    "imageType": 1,
                    "order": 0,
                    "defaultImage": true
                }
            ],
            "manufacturer": null,
            "attributes": [],
            "options": [],
            "variants": [],
            "properties": [],
            "categories": [
                {
                    "id": 10603,
                    "code": "bling",
                    "sortOrder": 0,
                    "visible": true,
                    "featured": false,
                    "lineage": "/10150//10003/10603/",
                    "depth": 2,
                    "parent": {
                        "id": 10003,
                        "code": "chassis"
                    },
                    "description": {
                        "id": 352,
                        "language": "en",
                        "name": "Bling Bling",
                        "description": null,
                        "friendlyUrl": "bling-bling",
                        "keyWords": null,
                        "highlights": null,
                        "metaDescription": null,
                        "title": "Handlebars"
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
        }
    ]
}
```



## delete product definition

**Description:**

Product definition can also be immediately attached to category by adding an array of category id in which the product will be created.

&#x60;&#x60;&#x60; json
&quot;categories&quot;: [
{
&quot;id&quot;: 51
}
],
&#x60;&#x60;&#x60;

**Method:**

DELETE

**Url:**

{{url}}/api/v2/private/product/26700



**Response:**

**status: OK**

**code: 200**

```js

```



