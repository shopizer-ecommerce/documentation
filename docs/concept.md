# Shopizer Architecture

Shopizer is organized as a modular commerce platform with a React-based administration UI, independently deployable Spring Boot services, shared platform infrastructure, and OAuth2 security. Keycloak is used for the administration application.

The system is designed around clear service boundaries: catalog and product management live in the Shop service, checkout workflows live in the Orders service, user and merchant administration are handled by their own services, and reference data is exposed separately for countries, zones, and languages. Shared concerns such as DTOs, security helpers, pricing utilities, JSON configuration, and common exceptions are centralized in the `common` module.

![Shopizer architecture](/shopizer-architecture.svg)

## High-Level Flow

1. Users access Shopizer through the React admin application, storefront clients, or external API consumers.
2. Clients authenticate with Keycloak and call REST APIs exposed by the backend services.
3. Each service validates OAuth2 JWT tokens and enforces role and organization-based access rules.
4. Services persist business data in PostgreSQL and use Redis where fast shared context or caching is needed.
5. The Shop service supports product catalog search with JSONB attributes and optional vector embeddings through pgvector.
6. Services can be packaged as Spring Boot container images and deployed locally or in Kubernetes.

## Main Components

### React Admin

The admin application is built with React, Refine, Ant Design, Axios, and Keycloak integration. It provides back-office screens for merchants, products, categories, classifications, options, attributes, users, and profile management.

### Shop Service

The Shop service owns the catalog domain. It manages products, categories, classifications, product options, variants, SKU inventory, product images, product attributes, and catalog search. Product attributes are stored as JSONB, which allows flexible product-specific attributes without changing the database schema for every new attribute type.

### Orders Service

The Orders service owns cart and order workflows. It exposes APIs for shopping cart operations and order management, keeping checkout behavior separate from catalog administration.

### Users Service

The Users service manages user-facing account operations and integrates with merchant context. It uses Keycloak-issued identity data and supports organization-aware access patterns.

### Merchants Service

The Merchants service manages stores, merchant configuration, and organization hierarchy. This allows Shopizer to support multi-store and multi-organization commerce scenarios.

### References Service

The References service exposes shared reference data such as countries, languages, and zones. Keeping this data separate avoids duplicating reference logic across commerce services.

### Common Module

The `common` module is a shared Java library used by the backend services. It contains reusable DTOs, exceptions, security utilities, configuration helpers, and pricing services.

## Platform Services

### Keycloak

Keycloak provides authentication and authorization using OpenID Connect. Backend services operate as OAuth2 resource servers and validate JWTs from the configured issuer. Roles and organization claims are used to restrict access to store-specific resources.

### PostgreSQL and pgvector

PostgreSQL is the primary data store. The Shop service also uses PostgreSQL JSONB for flexible product attributes and pgvector for optional semantic product search.

### Redis

Redis is used for shared context and caching, including merchant context lookups.

### Image Storage

Product media is stored through the Shop service image workflow. Local image storage is supported by configuration and can be adapted for production storage backends.

### OpenAI Embeddings

Embeddings are optional and controlled by configuration. When enabled, product names, descriptions, localized content, attributes, and classifications can be embedded for vector search.

## Deployment Model

Each backend module is a Spring Boot application that can be built as a container image. The repository includes local infrastructure for PostgreSQL and Keycloak, plus Kubernetes-oriented deployment assets for local Kind-based development.

This structure lets teams evolve individual commerce capabilities independently while keeping security, persistence, and shared application conventions consistent across the platform.
