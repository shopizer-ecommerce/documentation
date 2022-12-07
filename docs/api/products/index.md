---
title: Shopizer product REST api documentation
---

# Product API Reference

## Product characteristics

Products can be configured with characteristics. Characteristics are defined outside of the product and can used during the configuration of different products.

- [Product types](./product-types)
- [Product brands](./product-brands)

## Product options

Products can have options. Options are used to differenciate products having the same definition. For instance, a product **color** or a product **size** are options of the same base product. Options are defined outside of the product and can used during the configuration of different products.

- [Product options](./product-options)

## Product definition

Product definition is product metadata that defines core non variables elements of a product. For instance a **t-shirt** is a basic product definition. A product definition has no variants attached. It contains basic characteristiques, core attributes and dynamic attributes.

- [Product definition](./product-definition)
- [Product images](./product-images)

## Product

Product definition returns product summary usefull when working on a product management perspective. Product api returns complete object with composition rules and should be used when listing products or getting product details.

- [Product](./product)

## Product properties (attributes)

Properties (attributes) adds extension to the product core attributes by allowing the creation of custom properties (attributes).

- [Product custom properties](./product-properties)

## Product variations (options)

Variations of product definitions.

- [Product variations](./product-variants)

## Product variants

Product variants are product definitions with variations attached to it. A single product definition can have multiple product variants. Each product variant has its own sku.

- [Product variants](./product-instances)
- [Product variants group](./product-instances-group)

## Product classification

Products are classified in Category.

- [Product category](./product-category)

## List products

List products with pagination and filters for a specific Merchant Store and Language.

- [Product listing](./product-listing)

## Search products

Full Text search and Auto complete keywords using Search server such as Elastic Search and Open Search

- [Product search](./product-search)


## Swagger documentations

All apis are described on Swaggerhub Shopizer repository

[Shopize Swagger Documentation](https://groups.google.com/forum/#!forum/shopizer)https://app.swaggerhub.com/apis-docs/shopizer/shopizer-rest-api/3.0.1