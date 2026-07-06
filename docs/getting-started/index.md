---
title: Run Shopizer Locally
description: Requirements, installation steps, and day-to-day commands for running the Shopizer local Kubernetes stack.
---

# Run Shopizer Locally

This page summarizes how to run the Shopizer microservices stack locally with Docker, Terraform, kind, Kubernetes, and the Shopizer runbook.

The local environment creates a `terraform-kind` Kubernetes cluster, a local Docker registry on `localhost:5001`, Postgres with persisted host storage, Redis, Keycloak, pgAdmin, ingress-nginx, and the Shopizer microservices.

## Requirements

Install these tools before running the stack:

| Requirement | Why it is needed |
| --- | --- |
| [Docker Desktop](https://www.docker.com/products/docker-desktop/) | Runs the kind cluster, local registry, and image builds. |
| [Terraform](https://developer.hashicorp.com/terraform/install) | Provisions the local registry, kind cluster, and Kubernetes manifests. |
| [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) | Runs the local Kubernetes cluster in Docker. |
| [kubectl](https://kubernetes.io/docs/tasks/tools/) | Verifies and operates the local Kubernetes cluster. |
| [Python 3](https://www.python.org/downloads/) | Runs the local orchestration runbook. |
| [Java 21](https://adoptium.net/temurin/releases/?version=21) | Builds the Shopizer Spring Boot service images. |
| [Shopizer source checkout](https://github.com/shopizer-ecommerce/shopizer) | Provides the Maven multi-module application used by `build.sh`. |
| [Shopizer Terraform local runbook](https://github.com/shopizer-ecommerce/shopizer-terraform/tree/4.0/shopizer-local) | Provides the Terraform, Kubernetes manifests, and runbook files used to install the local stack. |

Set Java 21 in the shell that will run the installation:

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 21)
java --version
```

Add the local Keycloak hostname to `/etc/hosts`:

```txt
127.0.0.1 keycloak
```

The runbook validates Java, Docker, kubectl, and Terraform before it starts the deployment.

## Local Configuration

Create or update `shopizer-local/variables.tfvars` with the local paths for your machine:

```hcl
app_path = "/path/to/shopizer/microservices/root"
postgres_data_host_path = "/path/to/shopizer-terraform/postgres-data"
```

The `app_path` value must point to the Maven parent project that contains the service directories:

```txt
references
merchants
users
shop
orders
```

The `postgres_data_host_path` value is mounted into the kind node and used by the Postgres persistent volume.

Keep API keys in the shell environment, not in committed files:

```bash
export OPENAI_API_KEY='<your-openai-api-key>'
```

The OpenAI key is patched into `secret/app-secret` during the runbook. It is used by features that create embeddings for product search.

## Install

Run the installation from the `shopizer-local` directory:

```bash
cd shopizer-local
python3 -m venv .venv
source .venv/bin/activate
pip install pyyaml requests

export OPENAI_API_KEY='<your-openai-api-key>'
python -u runbook.py shopizer-local-runbook.yaml
```

The runbook performs the full local setup:

1. Runs preflight checks for Java 21, Docker, kubectl, and Terraform.
2. Runs Terraform `init`, `validate`, `plan`, and `apply`.
3. Builds Shopizer service images and pushes them to the local registry.
4. Creates or reuses the `terraform-kind` cluster.
5. Applies the Kubernetes manifests for Postgres, Redis, Keycloak, pgAdmin, and Shopizer services.
6. Installs ingress-nginx and applies the Shopizer ingress.
7. Applies Keycloak Terraform configuration.
8. Updates `app-secret` with the generated Keycloak client secret.
9. Injects `OPENAI_API_KEY` into `app-secret`.
10. Collects diagnostics into `shopizer-local/.out`.

## Run

After installation, verify that the cluster is ready:

```bash
kubectl get nodes
kubectl get pods -A -o wide
kubectl get svc -A -o wide
kubectl get ingress -A -o wide
```

Wait for ingress-nginx if the ingress is not ready yet:

```bash
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=120s
```

Use these local routes:

| URL | Route |
| --- | --- |
| `http://localhost/` | pgAdmin |
| `http://localhost/shop` | Shop service |
| `http://localhost/users` | Users service |
| `http://localhost/merchants` | Merchants service |
| `http://localhost/references` | References service |
| `http://localhost/orders` | Orders service |
| `http://keycloak/keycloak` | Keycloak |

pgAdmin uses the credentials from `k8s/pgadmin/pgadmin-secret.yaml`. Register the Postgres server with:

| Field | Value |
| --- | --- |
| Host | `postgres` |
| Port | `5432` |
| Database | `shop` |
| User | Value from `k8s/postgres/postgres-secret.yaml` |
| Password | Value from `k8s/postgres/postgres-secret.yaml` |

## Redeploy One Service

Use hot redeploy when you only need to rebuild and restart one microservice:

```bash
cd shopizer-local
./operations/hot-redeploy-service.sh \
  -a /path/to/shopizer/microservices/root \
  -s shop \
  -n default
```

Replace `shop` with one of:

```txt
references
merchants
users
shop
orders
```

The script builds the selected service image, pushes it to `localhost:5001`, updates the matching Kubernetes deployment, and waits for the rollout to complete.

## Debug

Forward a service debug port when needed:

```bash
kubectl port-forward deployment/references 5004:5004
kubectl port-forward deployment/merchants 5005:5005
kubectl port-forward deployment/users 5007:5007
kubectl port-forward deployment/shop 5008:5008
```

Collect a pod error report:

```bash
cd shopizer-local
./operations/pod-error-report.sh -n default,ingress-nginx -s 2h -t 1000
```

Reports are written under `shopizer-local/operations/reports`.

## Cleanup

Use the cleanup runbook to remove the local stack:

```bash
cd shopizer-local
python -u runbook.py shopizer-local-cleanup-runbook.yaml
```

The cleanup flow destroys the Keycloak and local Terraform resources, deletes the kind cluster, stops the local registry, frees port `5001`, removes selected build images, and clears persisted Postgres host data.

## Manual Terraform Commands

The runbook is the preferred path. If you need to run Terraform manually:

```bash
cd shopizer-local
terraform init
terraform plan -var-file variables.tfvars
terraform apply -var-file variables.tfvars
terraform destroy -var-file variables.tfvars
```

After a manual install, apply the ingress, configure Keycloak, apply `app-secret`, and restart any deployments that consume changed secrets.
