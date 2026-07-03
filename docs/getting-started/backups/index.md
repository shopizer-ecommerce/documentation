# Introduction

The following instructions will let you run the Shopizer locally with microservices. The folloming will be installed.

- A container runtime (Kind)
- An identity provider (Keycloak)
- Kubectl (Kubernetes ci)

## Clone Shopizer ecosystem project

## Requirements

It is required to have Docker running locally.

- [Install docker](https://docs.docker.com/get-started/get-docker/)

## Run outer infrastructure projects

- Keycloak (identity provider)
- PostgreSQL (database)

### Prepare Keycloak  identity provider

The project comtains a folder which contains the setup commands to run Keycloak from docker compose or from a pod.


- cd outer/keycloak
- docker-compose up


This will start Keycloak and a Postgres database

Login the administration panel using administration user


- `http://localhost:8081/`
- user: admin
- password: shopizer


The next ste is to crea a Realm by clicking on the upper righ button 'Create realm'. In the realm name put in the realm name (for instance shopizer). Once the Realm has been created then click on import partial in the upper right corner. Open the file explorer to outer/keycloak/import/shopizer.json

This should create the shopizer real with roles and client. Once created, open shopizer realm / Themes login then select shopizer

`http://localhost:8081/realms/shopizer`

## Kind

Kind is a container orchestration runtime which works basically with kubectl a tool for deploying microservices as pods to Kind system. All orchestration commands in the following guide can aslo be used with other container runtimes, for example Kubernetes and other Kubernetes running locally, in GCP, in AWS and Azure infrastructures.

https://kind.sigs.k8s.io/docs/user/quick-start/#installation This guide provides instructions on how to install Kind nativaly or from package managers based on your operating system.

Once kind is installed go ahead and create a cluster

`
kind create cluster
`

`
kind get clusters
kind
`

Using kubectl is method used in the following sections of this guide to interact with the cluster

In order to interact wit your cluster through kubectl

`
kubectl cluster-info --context kind-kind
`

List all namespaces in the cluster

`
kubectl get ns
`

The next step is to install argocd tool allowing to perform continuous integration between microserices and the kind cluster.

Create argocd pods to enable gitops for easing automation

`
kubectl create namespace argocd
kubectl apply \
  -n argocd \
  -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
`

check that all pods for argocd are working

`
kubectl get pods -n argocd
`

Get argocd password

`
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
`

Port forward argocd in order to be able to access argocd UI from your laptop.

`
kubectl port-forward svc/argocd-server -n argocd 8080:443
`

Access argocd UI `https://localhost:8080/`





## What is this?

This is a documentation site built with VitePress, a modern static site generator powered by Vite and Vue.

## Features

- 📝 Markdown-centered content
- ⚡️ Lightning fast cold start
- 🔥 Instant hot updates
- 🎨 Customizable theme
- 🔍 Full-text search
- 📦 Optimized builds
