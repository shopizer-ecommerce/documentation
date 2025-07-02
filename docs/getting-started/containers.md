# What's required to work with containers

- Create a docker image from your microservice
- Push your image to a docker registry (dockerhub, github registry, quay...)
- Update your helm chart with your docker image
- Update your container runtime pod to pick thelates container image