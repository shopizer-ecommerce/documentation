# Run Shopizer with Docker Compose 
![Docker](/images/docker.jpg "Docker Compose")


Shopizer can be run from Docker containers. The following instructions will run Shopizer Headless, Shopizer Shop App, Shopizer Admin App and Mysql


```sh
git clone git@github.com:shopizer-ecommerce/shopizer-docker-compose.git
cd shopizer docker compose
```

Now run Docker containers

```sh
docker compose up -d
```

Open a browser on this urls

| Application       | Url           |
| ------------- |:-----------------:| 
| Headless      | localhost:8080    | 
| Shop          | localhost:3000    |
| Admin         | localhost:4200    |

Admin app credentials

Username: **admin@shopizer.com**

Password: **password**