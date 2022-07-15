---
title: Shopizer Architecture
---

# Architecture

![Shopizer Architecture](/images/archi.png "Shopizer architecture diagram")



Shopizer is enterprise open source e-commerce software for retailers who want flexibility, speed and control of their commerce platform. Shopizer is a software solution that gives organisations the ultimate flexibility to take an experience-first approach to commerce, with simple powerful APIs and built in store models.

## Key technical benefits

- Headless commerce
- Services built with Spring framework (Spring boot, Spring Security)
- Front end Angular - React - Vuejs
- CICD, Vulnerability checks
- Open source and open standards
- On Prem - Cloud
- Run from containers or from individual processes (npm, tomcat)
- Extensions are built as spring starter components


![Shopizer Architecture](/images/shopizer-architecture.png "Shopizer architecture diagram")





## Integrationss

Shopizer supports integration with external payment and shipping modules such as Stripe, Fedex, Braintree, Square USPS and more. A set of module extensions allows using various content management storage such as JBoss Infinispan, AWS S3 and external web servers such as NGINX or Apache server. Elastic and Open Searh provide searching functionality.

A REST api exposes all commerce functionality (B2C, B2B, C2C, Multi-Stores) as well as complete system administration. Spring Security configured out of the box with JWT Bearer token authentication provides application interface authentication and authorization.

