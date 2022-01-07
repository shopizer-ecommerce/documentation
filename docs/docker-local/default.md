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

### Run Shopizer and dependency with Docker Compose

**Requirements**: Have Docker Compose installed. See [Docker Compose](https://docs.docker.com/compose/install/ ) installation instructions.

Docker Compose simplifies configurtion and container dependency with the configuration of a yaml file that lets connect Shopizer to outer dependencies such as Elastic Search and MySQL.

```sh
--- 
services:
  shopizer-db: 
    environment:
      - MYSQL_ROOT_PASSWORD=shopizer123
      - MYSQL_DATABASE=SALESMANAGER
      - MYSQL_USER=shopizer_db_user
      - MYSQL_PASSWORD=my-password
    image: mysql/mysql-server:5.7
    container_name: shopizer-db
    networks:
      - shopizer-network
    ports: 
      - "3307:3306"
    volumes: 
      - ./db:/var/lib/mysql
  shopizer: 
    depends_on: 
      - shopizer-db
    environment: 
      - "SPRING_PROFILES_ACTIVE=dependency"
      - "JAVA_OPTS=-Xms1024m -Xmx1024m"
      - "elasticsearch.server.host=shopizer-es"
      - "elasticsearch.server.port=9200"
      - "db.jdbcUrl=jdbc:mysql://shopizer-db:3306/SALESMANAGER?autoReconnect=true&serverTimeZone=UTC&useUnicode=true&characterEncoding=UTF-8"
      - "db.user=shopizer_db_user"
      - "db.password=my-password"
      - "elasticsearch.security.password=NOTREQUIRED"
      - "config.displayShipping=true"
      - "config.googleMapsKey=NO"
      - "config.recaptcha.secretKey=NO"
      - "config.recaptcha.siteKey=NO"
      - "config.shippingDistancePreProcessor.acceptedZones=QC,ON,NB,NY,CA,FL,NC,SC"
      - "config.shippingDistancePreProcessor.apiKey=NO"
    image: shopizerecomm/shopizer:latest
    container_name: shopizer
    mem_limit: 1024m
    networks:
      - shopizer-network
    links: 
      - shopizer-db
      - shopizer-es
    depends_on:
      - shopizer-db
      - shopizer-es
    ports: 
      - "8080:8080"
  shopizer-es: 
    environment: 
      - "cluster.name=shopizer"
      - "bootstrap.memory_lock=true"
      - "discovery.type=single-node"
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    image: docker.elastic.co/elasticsearch/elasticsearch:7.5.2
    container_name: shopizer-es
    networks:
      - shopizer-network
    mem_limit: 1g
    ports: 
      - "9200:9200"
    ulimits: 
      memlock: 
        hard: -1
        soft: -1
    volumes:
      - ./es:/usr/share/elasticsearch/data
version: "2.2"

networks:
  shopizer-network:
```

Copy the file above in a text file and name it docker-compose.yml
The content of this file consist of minimal configurations for running shopizer configured with Elastic Search and MySQL. 

To run dependency project (Shopizer + Elastic Search + MySQL), cd to the directoy where you have created **docker-compose.yml** file and type this command:

```sh
$ docker-compose up
```

This will start an empty store that you can start building with MySQL and Elastic Search running. Take note that MySQL is running on port 3307 and ElasticSearch on port 9200. In case of conflicts those ports can be changed.

You can connect to MySQL using your SQL client. Password as specified in docker-compose.yml is **my-password**

```sh
mysql -u shopizer_db_user -p -h 127.0.0.1:3307
```


---

## See also
