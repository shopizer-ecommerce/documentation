# Install your environnement locally

## Requirements

- Docker
- Terraform

- unix
- macos
- Windows (Git bash or WSL)

This section describe the compination of Terraform, Maven multi-module, Spring Boot, and a local Docker registry for building and deploying microservices in a development environment

You do not have to use Terraform for achieving this, it only orcherstrates everything to run services locally in an efficient manner. All insctuctions can be extracted  from terraform scripts and run locally depending on your operating system.

Terraform uses kind load docker-image to preload local images into the Kind node if they’re not in a public/pullable registry.

Installs Kind kubernetes cluster
Installs Kubectl tool
Installs local docker registry so you do not have to use docker hub
Loads images to kind server

## Post installation tasks

- Add host entry for Keycloak
Keycloak needs to work from the browser and service to service and needs to have access to the same issuer-uri

`
vi /etc/hosts
127.0.0.1 keycloak
`

## Keycloak post installation tasks

- edit realm settings master and add 'org' to user profile
- create keycloak client (shopizer)
    Standard flow
    Direct access grants
    Implicit flow
- add client scope admin to tge client (shopizer)
- add client roles admin and superadmin
- edit client Valid redirect URIs change to *
- edit origin, change to *
- add user (admin@shopizer.com)
- add credentials (you decide)
- add roles to the user (admin, superadmin)

vi /etc/hosts
127.0.0.1 keycloak








