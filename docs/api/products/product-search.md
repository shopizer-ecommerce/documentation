# Product Search

Full text search of Products and Keywords autocomplete. Those apis requires to have a search starter such as Open Search starter configured.



## Search products

**Description:**

Search products for a given Merchant Store and language.

**Method:**

POST

**Url:**

{{url}}/api/v1/search


**Body:**

```js
{
  "count": 20,
  "query": "shirt",
  "start": 0
}
```


**Response:**

**status: OK**

**code: 200**

```js
[
    {
        "store": "default",
        "language": "en",
        "name": "Nike Sport Shirt",
        "description": "Nike sport shirt",
        "image": null,
        "addToCart": true,
        "brand": "Nike",
        "category": "Training Shirts",
        "variants": null,
        "attributes": null,
        "price": "34.00",
        "id": 26850,
        "reviews": null,
        "suggestions": null
    },
    {
        "store": "default",
        "language": "en",
        "name": "T Shirt",
        "description": "Light cotton T Shirt",
        "image": "white-tshirt.jpeg",
        "addToCart": true,
        "brand": "DEFAULT",
        "category": "Cotton Shirts",
        "variants": [
            {
                "size": "medium",
                "COLOUR": "white"
            }
        ],
        "attributes": {
            "fabric": "Coton"
        },
        "price": "29.00",
        "id": 26750,
        "reviews": null,
        "suggestions": null
    }
]
```



## Search keywords

**Description:**

Autocomplete search.

**Method:**

POST

**Url:**

{{url}}/api/v1/search/autocomplete?store=DEFAULT&language=en


**Body:**

```js
{
  "count": 20,
  "query": "toto",
  "start": 0
}
```


**Response:**

**status: OK**

**code: 200**

```js
{
    "values": [
        "Nike Sport Shirt",
        "T Shirt"
    ]
}
```



