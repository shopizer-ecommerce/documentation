# Shop

## Product Catalog Schema

The `shop` service models a product catalog around a base product, optional variants, and SKU-level inventory.

### Core concepts

#### Product

The base catalog entity.

- Owns the default/base `sku`
- Owns localized name and description
- Associates to `categories`
- Associates to `facets` (`classifications`)
- Associates to `options`
- Owns `variants`
- Owns `attributes`
- Owns `images`
- Owns SKU-level inventory rows

The product-level SKU is the default sellable SKU when the product has no variants.

#### Category

Navigation taxonomy.

- Used for browse hierarchy
- A product can belong to multiple categories
- `mainCategory` is the primary category for the product

#### Facet

Cross-category classification and filtering metadata.

Current implementation still uses the existing `ClassificationType` model as the facet entity.

Examples:

- `men`
- `women`
- `summer`
- `premium`

Products associate to facet codes directly.

#### ProductOption

A variation axis owned by a product which associates an Option created outside of the product.

Examples:

- `color`
- `size`
- `material`

#### ProductOptionValue

An allowed value for a product option.

Examples:

- option `color` -> `red`, `blue`
- option `size` -> `s`, `m`, `l`

#### ProductVariant

A concrete sellable variant with its own SKU.

Examples:

- `TSHIRT-RED-M`
- `TSHIRT-BLUE-L`

A variant belongs to one product and is defined by a set of option selections.

#### ProductVariantSelection

The join between a variant and the chosen option values.

Examples:

- `color=red`
- `size=m`

#### ProductAttribute

Descriptive product metadata.

A product attribute can be:

- free text, for example `btu=12000`
- linked to an option and option value, for example `color=red`
- associated to an override SKU through `overrideSku`

Important: `ProductAttribute` is descriptive metadata. `ProductVariant` remains the primary variant model.

#### ProductSkuInventory

Inventory attached to a sellable SKU.

This allows:

- base product inventory when the product has no variants
- variant inventory when the product has variants
- multiple warehouses for the same SKU

#### ProductImage

An image attached to:

- the product globally, or
- a variant SKU specifically

Rule:

- `variantSku = null` means product-global image
- `variantSku = <sku>` means the image is specific to that variant SKU

## Entity Diagram

[Entity Diagram](./model-diagram.md)

## Current JPA Model

### Product

Entity: `com.shopizer.shop.model.Product`

Relationships:

- `Set<Category> category`
- `Set<ClassificationType> classifications`
- `Set<ProductImage> images`
- `Set<ProductOption> options`
- `Set<ProductVariant> variants`
- `Set<ProductAttribute> productAttributes`
- `Set<ProductSkuInventory> skuInventories`

Compatibility fields still present:

- `JsonNode attributes`
- `Inventory inventory`

Those legacy fields are still used by the current service layer for backward compatibility.

### Option model

- `ProductOption`
  - belongs to `Product`
  - owns `Set<ProductOptionValue> values`

- `ProductOptionValue`
  - belongs to `ProductOption`

### Variant model

- `ProductVariant`
  - belongs to `Product`
  - owns `Set<ProductVariantSelection> selections`
  - owns `Set<ProductSkuInventory> inventories`

- `ProductVariantSelection`
  - belongs to `ProductVariant`
  - references `ProductOption`
  - references `ProductOptionValue`

### Attribute model

- `ProductAttribute`
  - belongs to `Product`
  - may reference `ProductOption`
  - may reference `ProductOptionValue`
  - may define `overrideSku`

### Inventory model

- `ProductSkuInventory`
  - belongs to `Product`
  - may belong to `ProductVariant`
  - stores:
    - `sku`
    - `warehouse`
    - `onHand`
    - `available`
    - `priceOverride`
    - `currency`
    - `lowStockThreshold`
    - `active`

### Image model

- `ProductImage`
  - belongs to `Product`
  - may define `variantSku`
  - stores file metadata and public path

## DTO Model

### ProductDTO

The API DTO now supports:

- `category`
- `classifications`
- `attributes`
- `inventory`
- `options`
- `variants`
- `skuInventories`
- `media`

### New DTOs

- `ProductOptionDTO`
- `ProductOptionValueDTO`
- `ProductVariantDTO`
- `ProductVariantSelectionDTO`
- `ProductSkuInventoryDTO`

### Extended DTOs

- `AttributeDTO`
  - `optionCode`
  - `optionValueCode`
  - `overrideSku`

- `InventoryRowDTO`
  - `sku`
  - `variantSku`

- `ProductImageDTO`
  - `variantSku`

## Recommended Usage Rules

Use the following rules consistently across backend and frontend:

1. Categories are for navigation
2. Facets are for filtering/classification
3. Options define variation axes
4. Option values define allowed choices on each axis
5. Variants define concrete sellable combinations with SKU
6. Inventory attaches to SKU
7. Images can attach globally or to a variant SKU
8. Attributes are descriptive, not the main variant engine

## Example Structure

Example product:

- Product SKU: `TSHIRT-BASE`
- Categories:
  - `men/shirts`
- Facets:
  - `casual`
  - `summer`

Options:

- `color`
  - `red`
  - `blue`
- `size`
  - `m`
  - `l`

Variants:

- `TSHIRT-RED-M`
- `TSHIRT-RED-L`
- `TSHIRT-BLUE-M`
- `TSHIRT-BLUE-L`

Variant selections:

- `TSHIRT-RED-M`
  - `color=red`
  - `size=m`

Attributes:

- `material=cotton`
- `btu=12000`

SKU inventory:

- `TSHIRT-RED-M`, warehouse `WH-01`, available `10`
- `TSHIRT-BLUE-L`, warehouse `WH-02`, available `4`

Images:

- product-global hero image
- variant image for `TSHIRT-RED-M`

## Example Product Payload Shape

This is the target shape for the richer model. The current service layer is not fully wired to all of these fields yet, but this is the intended contract.

```json
{
  "store": "DEFAULT",
  "status": "PUBLISHED",
  "sku": "TSHIRT-BASE",
  "name": "T-Shirt",
  "nameI18n": {
    "en": "T-Shirt",
    "fr": "T-shirt"
  },
  "description": "Base product",
  "descriptionI18n": {
    "en": "Base product",
    "fr": "Produit de base"
  },
  "category": ["men-shirts"],
  "mainCategory": "men-shirts",
  "classifications": ["casual", "summer"],
  "options": [
    {
      "code": "color",
      "name": "Color",
      "values": [
        { "code": "red", "name": "Red" },
        { "code": "blue", "name": "Blue" }
      ]
    },
    {
      "code": "size",
      "name": "Size",
      "values": [
        { "code": "m", "name": "M" },
        { "code": "l", "name": "L" }
      ]
    }
  ],
  "variants": [
    {
      "sku": "TSHIRT-RED-M",
      "active": true,
      "defaultVariant": true,
      "selections": [
        { "optionCode": "color", "optionValueCode": "red" },
        { "optionCode": "size", "optionValueCode": "m" }
      ]
    }
  ],
  "attributes": [
    {
      "code": "material",
      "name": "Material",
      "value": "Cotton"
    },
    {
      "code": "color",
      "optionCode": "color",
      "optionValueCode": "red",
      "overrideSku": "TSHIRT-RED-M"
    }
  ],
  "skuInventories": [
    {
      "sku": "TSHIRT-RED-M",
      "variantSku": "TSHIRT-RED-M",
      "warehouse": "WH-01",
      "onHand": 12,
      "available": 10,
      "currency": "USD",
      "active": true
    }
  ]
}
```

## Implementation Status

Implemented now:

- JPA entities for options, option values, variants, variant selections, product attributes, SKU inventory
- DTOs for the same model
- variant-aware product image schema through `variantSku`

Still pending:

- full `ProductServiceImpl` save/read wiring for the new entities
- full `ProductMapper` support for the new model
- controller payload handling for all new fields
- shopizer UI support for options, variants, SKU inventory, and variant-specific images
