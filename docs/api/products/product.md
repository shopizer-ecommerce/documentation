# Product

Product api is the complete object that should be used when listing products or getting product details. It differs from Product Definition since product definition is a summary of the product object.



## get product by sku

**Description:**

Get a product by sku.

**Method:**

GET

**Url:**

{{url}}/api/v2/product/79702984044?lang=en&store=DEFAULT



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



## get product by friendly url

**Description:**

Get a product by friendly url.

**Method:**

GET

**Url:**

{{url}}/api/v2/product/slug/nike-sport-shirt



**Response:**

**status: OK**

**code: 200**

```js
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
}
```



