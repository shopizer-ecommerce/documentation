# Install your environnement locally

The following section describe the installation of a local environment

### Supported operating systems
- Linux
- MacOS
- Windows (Git bash or WSL)

### Pre installation tasks

Development Environment Overview
This section outlines how to use Terraform, Maven multi-module, Spring Boot, and a local Docker registry to build and deploy microservices in a local development environment.

⚠️ Note: You don’t have to use Terraform to achieve this. Terraform is simply used to orchestrate the setup and execution of various tools in a streamlined and repeatable way.
You can extract and run the necessary commands manually from the Terraform scripts, depending on your operating system.

Clone shopizer local terraform installation

What Terraform Does
Terraform helps automate the following tasks:

✅ Installs a local Kind (Kubernetes in Docker) cluster

✅ Installs the kubectl CLI tool

✅ Sets up a local Docker registry (avoiding the need to push images to Docker Hub)

✅ Uses kind load docker-image to preload local images into the Kind cluster (if not already available in a public registry)

## Troubleshoot

`
Error: local-exec provisioner error
  with null_resource.verify_ingress_nginx,
   on main.tf line 146, in resource "null_resource" "verify_ingress_nginx":
  146:   provisioner "local-exec" {
 
 Error running command 'kubectl wait --namespace ingress-nginx --for=condition=ready pod \
 --selector=app.kubernetes.io/component=controller --timeout=120s': 
 exit status 1. 
 Output: error: timed out waiting for the condition on pods/ingress-nginx-controller
 `

Terraform tried to wait for the ingress-nginx controller pod to become ready using:

kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=120s

But the pod did not become ready within 120 seconds, resulting in a failed local-exec and stopping the Terraform process.

## Post installation tasks

- Add host entry for Keycloak
Keycloak needs to work from the browser and service to service and needs to have access to the same issuer-uri

`
vi /etc/hosts
`

`
127.0.0.1 keycloak
`

## add ingress ??

kubectl create -f k8s/ingress/ingress.yaml

## Keycloak post installation tasks

- Log in to keycloak

http://keycloak/keycloak

username: admin
password: master


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








