Shopizer's team deliver on a continuous basis improvements on Shopizer which are almost available immediately from DockerHub latest Shopizer image.


### Get latest Shopizer Docker image

Shopizer master branch is built on a regular basis and is avilable from DockerHub as latest tag. Docker version is available from [Shopizer on DockerHub](https://hub.docker.com/r/shopizerecomm/shopizer)

### Run Docker image

From a terminal or console
  
```sh
docker pull shopizerecomm/shopizer
```

Open a browser to http://localhost:8080

Administration is available from this url http://localhost:8080/admin

**username: admin@shopizer.com**
**password: password**

This container runs a simple demo of Shopizer for evaluation purpose. It uses H2 database and infinispan storage for images and files. See below how to configure container for production.

### Build your own image

Docker file is available in source code at this location **shopizer/sm-shop/Dockerfile**

To build your own image you need to execute the following comands

```sh
cd shopizer
mvnw clean install
cd sm-shop
docker build .
```


---

## See also

* [Run Shopizer componsnts with Docker Compose](/documentation/#/deployment/cloud/lightsail-simple)
* [Deploying Shopizer on AWS LightSail](/documentation/#/deployment/cloud/lightsail-simple)