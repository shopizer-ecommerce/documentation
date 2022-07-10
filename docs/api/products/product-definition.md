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
  "descriptions": [
    {
      "description": "Cotton T Shirt",
      "friendlyUrl": "nice-t-shirt",
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

{{url}}/api/v2/private/product/26050


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
  "type": "default",
  "virtual": false,
  "visible": true
}
```


**Response:**

**status: OK**

**code: 200**

```js

```



## get product definition

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

{{url}}/api/v2/product/TSHIRTA?lang=en&store=DEFAULT



**Response:**

**status: OK**

**code: 200**

```js
{
    "id": 26050,
    "productShipeable": true,
    "available": true,
    "visible": true,
    "sortOrder": 10,
    "dateAvailable": "2022-07-08",
    "creationDate": "2022-07-08",
    "price": 29,
    "quantity": 0,
    "sku": "TSHIRTA",
    "preOrder": false,
    "productVirtual": false,
    "quantityOrderMaximum": 1,
    "quantityOrderMinimum": 1,
    "productIsFree": false,
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
    "rating": 0,
    "ratingCount": 0,
    "refSku": "TSHIRTA",
    "rentalDuration": 0,
    "rentalPeriod": 0,
    "description": {
        "id": 25600,
        "language": "en",
        "name": "T Shirt",
        "description": "Light cotton T Shirt",
        "friendlyUrl": "light-cotton-t-shirt",
        "keyWords": null,
        "highlights": null,
        "metaDescription": null,
        "title": "T Shirt"
    },
    "productPrice": {
        "id": 51100,
        "originalPrice": "SEK29.00",
        "finalPrice": "SEK29.00",
        "discounted": false,
        "description": {
            "id": 51083,
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
    "finalPrice": "SEK29.00",
    "originalPrice": "SEK29.00",
    "discounted": false,
    "image": null,
    "images": [],
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
    "attributes": [],
    "options": [],
    "variants": [],
    "properties": [],
    "categories": [],
    "type": {
        "id": 150,
        "code": "default",
        "visible": true,
        "allowAddToCart": true,
        "description": null
    },
    "canBePurchased": false,
    "owner": null
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

{{url}}/api/v2/private/product/{{id}}


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
  "type": "default",
  "virtual": false,
  "visible": true
}
```



