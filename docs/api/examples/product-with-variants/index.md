# Product Configuration Example

![Shopizer REST API Product with variants](/images/documentation/example-product-variant.png "Shopizer REST API Product with variants")

An eaxample for the creation of a product with variants


## Create Brand

**Description:**

API for creating a manufacturer &#x2F; Brand

**Method:**

POST

**Url:**

{{url}}/api/v1/private/manufacturer


**Body:**

```js
{
  "code" : "simbeats",
  "order" : 1,
  "descriptions" : [ 
      {
        "language" : "en",
        "name" : "SimBeats"
      }, 
      {
        "language" : "fr",
        "name" : "SimBeats"
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
    "code": "simbeats",
    "order": 1,
    "descriptions": [
        {
            "id": 0,
            "language": "en",
            "name": "SimBeats",
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
            "name": "SimBeats",
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
  "code" : "headsets",
  "sortOrder" : 0,
  "visible" : true,
  "parent" : null,
  "descriptions" : [ {
    "language" : "en",
    "name" : "Headsets",
    "friendlyUrl" : "headsets",
    "title" : "Headsets"
  },
  {
    "language" : "fr",
    "name" : "Écouteurs",
    "friendlyUrl" : "ecouteurs",
    "title" : "Écouteurs"
  }
  ]
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 51,
    "code": "headsets",
    "sortOrder": 0,
    "visible": true,
    "featured": false,
    "lineage": null,
    "depth": 0,
    "parent": null,
    "descriptions": [
        {
            "language": "en",
            "name": "Headsets",
            "description": null,
            "friendlyUrl": "headsets",
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": "SimBeats Headsets"
        },
                {
            "language": "fr",
            "name": "Écouteurs",
            "description": null,
            "friendlyUrl": "ecouteurs",
            "keyWords": null,
            "highlights": null,
            "metaDescription": null,
            "title": "SimBeats Écouteurs"
        }
    ],
    "children": []
}
```



## Create Product Definition SIMBEATS

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
  "price": 149.00,
  "quantity": 1000,
  "descriptions": [
    {
      "description": "The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance",
      "friendlyUrl": "simbeatsep",
      "name": "SIMBeats EP",
      "title": "SIMBeats EP",
      "language": "en"
    },
    {
      "description": "Le choix préféré des audiophiles, fréquences des basses améliorées et isolation incomparable pour les meilleures performances audio",
      "friendlyUrl": "simbeatsep",
      "name": "SIMBeats EP",
      "title": "SIMBeats EP",
      "language": "fr"
    }
  ],
  "identifier": "SIMBEATSEP",
  "productSpecifications": {
    "dimensionUnitOfMeasure": "in",
    "height": 8,
    "length": 4,
    "weight": 0.225,
    "weightUnitOfMeasure": "lb",
    "manufacturer": "simbeats",
    "width": 12
  },
  "categories" : [
    { "code":"simbeats"}
  ],
  "shipeable": true,
  "sortOrder": 1,
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



## Edit product SIMBEATS

**Description:**

Edit product definition

**Method:**

PUT

**Url:**

{{url}}/api/v2/private/product/1


**Body:**

```js
{
  "canBePurchased": true,
  "price": 149.00,
  "quantity": 1000,
  "descriptions": [
    {
      "description": "The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance",
      "friendlyUrl": "simbeatsep",
      "name": "SIMBeats EP",
      "title": "SIMBeats EP",
      "language": "en"
    },
    {
      "description": "Le choix préféré des audiophiles, fréquences des basses améliorées et isolation incomparable pour les meilleures performances audio",
      "friendlyUrl": "simbeatsep",
      "name": "SIMBeats EP",
      "title": "SIMBeats EP",
      "language": "fr"
    }
  ],
  "identifier": "SIMBEATSEP",
  "productSpecifications": {
    "dimensionUnitOfMeasure": "in",
    "height": 8,
    "length": 4,
    "weight": 0.225,
    "weightUnitOfMeasure": "lb",
    "manufacturer": "simbeats",
    "width": 12
  },
    "categories" : [
    { "code":"headsets"}
  ],
  "shipeable": true,
  "sortOrder": 1,
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



## Create Product Option Color

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



## Create option value Color - Red

**Description:**

API for the creation of a product option value

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option/value


**Body:**

```js
{
  "code": "red",
  "descriptions": [
    {
      "name": "Red",
      "language": "en"
    },
    {
      "name": "Rouge",
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
    "code": "red",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 0,
    "price": null,
    "description": {
        "id": 2,
        "language": "en",
        "name": "Red",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create option value Color - Blue

**Description:**

API for the creation of a product option value

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option/value


**Body:**

```js
{
  "code": "blue",
  "descriptions": [
    {
      "name": "Blue",
      "language": "en"
    },
    {
      "name": "Bleu",
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
    "id": 2,
    "code": "blue",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 0,
    "price": null,
    "description": {
        "id": 4,
        "language": "en",
        "name": "Blue",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create option value Color - Black

**Description:**

API for the creation of a product option value

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option/value


**Body:**

```js
{
  "code": "black",
  "descriptions": [
    {
      "name": "Black",
      "language": "en"
    },
    {
      "name": "Noir",
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
    "id": 3,
    "code": "black",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 0,
    "price": null,
    "description": {
        "id": 6,
        "language": "en",
        "name": "Black",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create Product Option Cable

**Description:**

API for the creation of a product option

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option


**Body:**

```js
{
  "code": "cable",
  "descriptions": [
    {
      "name": "Cable",
      "language": "en"
    },
    {
      "name": "Cable",
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
    "id": 3,
    "code": "cable",
    "type": "radio",
    "readOnly": false,
    "order": 0,
    "description": {
        "id": 5,
        "language": "en",
        "name": "Cable",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create option value Straight

**Description:**

API for the creation of a product option value

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option/value


**Body:**

```js
{
  "code": "straight",
  "descriptions": [
    {
      "name": "Straight",
      "language": "en"
    },
    {
      "name": "Droit",
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
    "code": "red",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 0,
    "price": null,
    "description": {
        "id": 2,
        "language": "en",
        "name": "Red",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 4,
    "code": "straight",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 0,
    "price": null,
    "description": {
        "id": 7,
        "language": "en",
        "name": "Straight",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create option value Twisted

**Description:**

API for the creation of a product option value

**Method:**

POST

**Url:**

{{url}}/api/v1/private/product/option/value


**Body:**

```js
{
  "code": "twisted",
  "descriptions": [
    {
      "name": "Twisted",
      "language": "en"
    },
    {
      "name": "Tortillé",
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
    "id": 5,
    "code": "twisted",
    "name": null,
    "defaultValue": false,
    "sortOrder": 0,
    "image": null,
    "order": 0,
    "price": null,
    "description": {
        "id": 10,
        "language": "en",
        "name": "Twisted",
        "description": null,
        "friendlyUrl": null,
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": null
    }
}
```



## Create Product Variation- Color Red

**Description:**

Creates a Product variation that contains an option and an option value.

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/variation


**Body:**

```js
{
  "code": "color-red",
  "defaultValue": true,
  "option": 1,
  "optionValue": 1,
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



## Create Product Variation - Color Blue

**Description:**

Creates a Product variation that contains an option and an option value.

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/variation


**Body:**

```js
{
  "code": "color-blue",
  "defaultValue": true,
  "option": 1,
  "optionValue": 2,
  "sortOrder": 30
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



## Create Product Variation - Color Black

**Description:**

Creates a Product variation that contains an option and an option value.

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/variation


**Body:**

```js
{
  "code": "color-black",
  "defaultValue": false,
  "option": 1,
  "optionValue": 3,
  "sortOrder": 30
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



## Create Product Variation - Cable Straight

**Description:**

Creates a Product variation that contains an option and an option value.

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/variation


**Body:**

```js
{
  "code": "cable-straight",
  "defaultValue": true,
  "option": 2,
  "optionValue": 50,
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



## Create Product Variation - Cable Twisted

**Description:**

Creates a Product variation that contains an option and an option value.

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/variation


**Body:**

```js
{
  "code": "cable-twisted",
  "defaultValue": false,
  "option": 3,
  "optionValue": 5,
  "sortOrder": 10
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



## Create Product Variant - Red - Straight

**Description:**

Creates a product variant

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/1/variant


**Body:**

```js
{
  "visible": true,
  "dateAvailable": "2022-11-11",
  "sortOrder": 1,
  "sku" : "SIMBEATSEP001",
  "variation": 1,
  "variationValue": 3
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



## Create Product Variant - Red - Twisted

**Description:**

Creates a product variant

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/1/variant


**Body:**

```js
{
  "visible": true,
  "dateAvailable": "2022-11-11",
  "sortOrder": 10,
  "sku" : "SIMBEATSEP010",
  "variation": 1,
  "variationValue": 4
}
```


**Response:**

**status: Created**

**code: 201**

```js
{
    "id": 2
}
```



## Create Product Variant - Black - Straight

**Description:**

Creates a product instance

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/1/variant


**Body:**

```js
{
  "visible": true,
  "dateAvailable": "2022-11-11",
  "sortOrder": 1,
  "sku" : "SIMBEATSEP020",
  "variation": 2,
  "variationValue": 3
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



## Create Product Variant - Black - Twisted

**Description:**

Creates a product instance

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/1/variant


**Body:**

```js
{
  "visible": true,
  "dateAvailable": "2022-11-11",
  "sortOrder": 1,
  "sku" : "SIMBEATSEP024",
  "variation": 2,
  "variationValue": 4
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



## Create Product Variant - Blue - Straight

**Description:**

Creates a product instance

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/1/variant


**Body:**

```js
{
  "visible": true,
  "dateAvailable": "2022-11-11",
  "sortOrder": 1,
  "sku" : "SIMBEATSEP020",
  "variation": 2,
  "variationValue": 3
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



## Create Product Variant - Blue - Twisted

**Description:**

Creates a product instance

**Method:**

POST

**Url:**

{{url}}/api/v2/private/product/1/variant


**Body:**

```js
{
  "visible": true,
  "dateAvailable": "2022-11-11",
  "sortOrder": 1,
  "sku" : "SIMBEATSEP035",
  "variation": 50,
  "variationValue": 4
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



## get product

**Description:**

Get a product by sku.

**Method:**

GET

**Url:**

{{url}}/api/v2/product/SIMBEATSEP?lang=en&store=DEFAULT



**Response:**

**status: OK**

**code: 200**

```js
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
}
```
