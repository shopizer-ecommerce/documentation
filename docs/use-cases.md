# Use Cases

## E-Commerce Catalog and Checkout Context

This use case describes how Shopizer supports a typical e-commerce workflow where merchants manage a product catalog and customers browse products, search the catalog, add items to a cart, and place an order.

## Context

An e-commerce business needs to manage products that can vary by category, language, option, SKU, inventory, attributes, and images. The catalog must support structured data such as categories and variants, while also allowing flexible product-specific attributes such as size, color, material, dimensions, compatibility, or technical specifications.

Shopizer addresses this with a service-oriented architecture:

- The Shop service manages catalog data, product variants, attributes, inventory, images, and product search.
- The Orders service manages cart and order workflows.
- The Users service manages customer and account context.
- The Merchants service manages store and merchant configuration.
- Keycloak provides authentication and authorization for protected administration and service access.

## Primary Actors

| Actor | Role |
| --- | --- |
| Merchant administrator | Creates and maintains products, categories, options, images, and inventory. |
| Customer or storefront client | Browses products, searches the catalog, adds products to a cart, and places orders. |
| Platform operator | Deploys and operates the services, database, cache, and identity provider. |

## Main Flow

1. A merchant administrator signs in through Keycloak.
2. The administrator creates categories, product options, variants, attributes, images, and SKU inventory.
3. Product data is stored in PostgreSQL, including flexible attributes using JSONB.
4. Optional embeddings can be generated for product search when semantic search is enabled.
5. A storefront client searches or browses the catalog through the Shop service.
6. The customer adds a selected SKU or variant to the cart through the Orders service.
7. The customer completes checkout and an order is created.

## Platform Capabilities Used

| Capability | Shopizer area |
| --- | --- |
| Product catalog management | Shop service |
| Flexible product attributes | PostgreSQL JSONB |
| Product variant and SKU inventory | Shop service |
| Semantic product search | PostgreSQL pgvector and embeddings |
| Cart and order workflow | Orders service |
| Authentication and authorization | Keycloak |
| Merchant and store context | Merchants service |

## Outcome

The e-commerce business can manage a flexible catalog, expose products through APIs, support search and discovery, and process cart and order workflows using independently deployable services.

# Shopizer Ecommerce API Use Case

This document explains the ecommerce scenario covered by the Postman collection. The goal is to demonstrate how Shopizer can be used as a modular ecommerce backend: configure a merchant store, authenticate users, create catalog data, expose products publicly, search the catalog, and prepare cart/order workflows.

The collection is intended as a practical walkthrough rather than a full production setup. Each request builds on the previous ones so the resulting data can be inspected from the API and from the Shopizer admin UI.

## Scenario Overview

The example models a basic merchant storefront with products, categories, product attributes, variants, inventory, and public catalog search.

The typical flow is:

1. Authenticate with Keycloak and obtain an access token.
2. Validate the current user profile with the Users service.
3. Create or verify the merchant store.
4. Create categories for catalog navigation.
5. Create classifications for faceted browsing and filtering.
6. Create product options such as color, size, or material.
7. Create products with localized content, attributes, inventory, and media metadata.
8. Add variants and SKU-level inventory when the product has multiple sellable combinations.
9. Query products from public endpoints as a storefront would.
10. Search products using text, attribute filters, and optional semantic embeddings.
11. Use cart endpoints to model a shopping session.

## Service Boundaries

The use case touches several Shopizer services:

| Service | Context path | Responsibility |
| --- | --- | --- |
| Users | `/users/api/v2` | Current user profile, user administration, organization-aware access |
| Merchants | `/merchants/api/v2` | Store configuration and merchant hierarchy |
| Shop | `/shop/api/v2` | Products, categories, classifications, options, variants, images, inventory, search |
| Orders | `/orders/api/v2` | Cart and order workflows |
| References | `/references/api/v2` | Countries, languages, zones, currencies |
| Keycloak | `/keycloak` | OAuth2/OpenID Connect authentication and roles |

The backend services are protected by OAuth2 resource-server security. Most administrative requests require a Bearer token with `admin` or `superadmin` privileges. Public storefront requests use `/public/...` endpoints and do not require the same administrative permissions.

## Authentication Context

The collection assumes a Keycloak realm named `shopizer`.

The user token should contain:

```json
{
  "email": "admin@shopizer.com",
  "org": "DEFAULT",
  "realm_access": {
    "roles": ["user", "admin"]
  }
}
```

The `org` claim is important. Shopizer uses it to resolve which merchant store the user belongs to. Admin users can manage resources inside their organization, while superadmins can operate across stores.

Typical roles:

| Role | Purpose |
| --- | --- |
| `user` | Required for profile endpoints such as `/me` |
| `admin` | Required for store-level administration |
| `superadmin` | Allows cross-store administration |

## Store Setup

The merchant store is the tenant boundary for the example. Most catalog resources include a `store` value, commonly:

```text
DEFAULT
```

The store is managed through:

```http
GET    /merchants/api/v2/stores/{code}
POST   /merchants/api/v2/stores
PUT    /merchants/api/v2/stores/{code}
PATCH  /merchants/api/v2/stores/{code}/activate
PATCH  /merchants/api/v2/stores/{code}/deactivate
```

The storefront catalog endpoints later use the same store code:

```http
GET /shop/api/v2/public/stores/DEFAULT/products
```

## Catalog Setup

### Categories

Categories provide the browse hierarchy. A product can belong to multiple categories, and one category can be treated as the main category.

Common endpoints:

```http
POST /shop/api/v2/category
GET  /shop/api/v2/category?store=DEFAULT
GET  /shop/api/v2/category/{store}/{code}
PUT  /shop/api/v2/category/{store}/{code}
```

Example category codes:

```text
apparel
shoes
electronics
home
```

### Classifications

Classifications are used as facets or merchandising tags. They are useful for filters such as seasonal collections, gender, audience, product line, or quality tier.

Common endpoints:

```http
POST /shop/api/v2/classification
GET  /shop/api/v2/public/stores/{store}/classifications
PUT  /shop/api/v2/classification/{store}/{code}
```

Example classification codes:

```text
summer
premium
men
women
new-arrival
```

### Product Options

Options define variation axes such as color or size. Option values define the allowed values for each axis.

Common endpoints:

```http
POST /shop/api/v2/option
GET  /shop/api/v2/options
GET  /shop/api/v2/public/stores/{store}/options
POST /shop/api/v2/product/{store}/{sku}/options
```

Example options:

```text
color: black, white, blue
size: s, m, l, xl
material: cotton, wool, leather
```

## Product Creation

Products are created through the Shop service:

```http
POST /shop/api/v2/product
```

A product can include:

- Store and SKU
- Name and description
- Localized name and description
- Status
- Categories
- Classifications
- Attributes
- Price and inventory
- Options and variants through dedicated endpoints
- Images through dedicated upload endpoints

Product attributes are flexible metadata stored as JSONB. This allows each product type to carry its own descriptive fields without requiring schema changes.

Example product attributes:

```json
[
  {
    "code": "color",
    "name": "Color",
    "value": "Black"
  },
  {
    "code": "material",
    "name": "Material",
    "value": "Cotton"
  },
  {
    "code": "care",
    "name": "Care Instructions",
    "value": "Machine wash cold"
  }
]
```

Localized fields can be provided with language maps:

```json
{
  "nameI18n": {
    "en": "Black T-Shirt",
    "fr": "T-shirt noir"
  },
  "descriptionI18n": {
    "en": "Soft cotton crew neck t-shirt",
    "fr": "T-shirt doux en coton a col rond"
  }
}
```

## Variants and SKU Inventory

The base product SKU is sellable when a product has no variants. If the product has variants, each variant receives its own SKU.

Variant examples:

```text
TSHIRT-BLACK-M
TSHIRT-BLACK-L
TSHIRT-WHITE-M
```

Common endpoints:

```http
POST /shop/api/v2/product/{store}/{sku}/variants
GET  /shop/api/v2/public/stores/{store}/products/{sku}/variants
PUT  /shop/api/v2/product/{store}/{sku}/variants/{variantSku}
```

SKU inventory is attached to the sellable SKU, either the base product SKU or a variant SKU.

Common endpoints:

```http
POST /shop/api/v2/product/{store}/{sku}/inventory
GET  /shop/api/v2/public/stores/{store}/products/{sku}/inventory
PUT  /shop/api/v2/product/{store}/{sku}/inventory/{inventoryId}
```

Inventory can represent warehouse-specific availability, available quantity, price override, and currency.

## Product Images

Images are managed separately from product create/update operations.

Common endpoints:

```http
POST   /shop/api/v2/product/{store}/{sku}/images
GET    /shop/api/v2/public/product/{store}/{sku}/images
GET    /shop/api/v2/public/product/{store}/{sku}/images/{imageId}/content
PATCH  /shop/api/v2/product/{store}/{sku}/images/{imageId}
DELETE /shop/api/v2/product/{store}/{sku}/images/{imageId}
```

Images can be global to the product or associated with a specific variant SKU.

## Storefront Queries

The public catalog endpoints model how a storefront would consume the catalog.

List products for a store:

```http
GET /shop/api/v2/public/stores/{store}/products?page=0&count=10
```

Get a product by SKU:

```http
GET /shop/api/v2/public/stores/{store}/products/{sku}
```

Get a compact product summary:

```http
GET /shop/api/v2/public/product/summary/{sku}?store={store}&attribute={attributeCode}
```

Search products:

```http
POST /shop/api/v2/public/stores/{store}/products/search
```

Example search body:

```json
{
  "query": "black cotton shirt",
  "language": "en",
  "filters": [
    {
      "code": "color",
      "value": "Black"
    }
  ],
  "page": 0,
  "count": 10
}
```

The search API supports query text and optional attribute filters. If embeddings are enabled, semantic search can use product names, descriptions, localized content, attributes, and classifications.

## Cart Workflow

The Orders service provides cart operations for the shopping session.

Common endpoints:

```http
GET  /orders/api/v2/cart
POST /orders/api/v2/cart
POST /orders/api/v2/cart/merge
PUT  /orders/api/v2/cart/item/{id}
```

The cart use case usually follows this pattern:

1. Create or retrieve the current cart.
2. Add a base product SKU or variant SKU.
3. Update item quantity.
4. Merge anonymous cart data into an authenticated cart after login.
5. Use the cart state as the input to checkout/order creation.

## Suggested Postman Collection Structure

Use folders in this order:

1. `Auth`
2. `Current User`
3. `Merchant Store`
4. `References`
5. `Categories`
6. `Classifications`
7. `Product Options`
8. `Products`
9. `Variants`
10. `Inventory`
11. `Images`
12. `Public Storefront`
13. `Search`
14. `Cart`

Suggested Postman variables:

| Variable | Example |
| --- | --- |
| `baseUrl` | `http://localhost:8080` |
| `keycloakUrl` | `http://keycloak/keycloak` |
| `realm` | `shopizer` |
| `accessToken` | Bearer token from Keycloak |
| `store` | `DEFAULT` |
| `sku` | `TSHIRT-BLACK-M` |
| `variantSku` | `TSHIRT-BLACK-L` |
| `categoryCode` | `apparel` |
| `classificationCode` | `summer` |
| `optionCode` | `color` |

## Expected Outcome

At the end of the collection, the test environment should contain:

- A merchant store
- At least one admin/user profile linked to the store
- Categories for navigation
- Classifications for facets and merchandising
- Product options and option values
- One or more products with attributes and inventory
- Optional variants with SKU-level inventory
- Public product queries that return storefront-ready data
- Product search requests that return relevant catalog results
- Cart requests that demonstrate a shopping session

This provides a complete API-driven ecommerce example that can be reused for demos, regression testing, frontend development, and documentation.

