import{_ as e,c as o,o as n,d as r}from"./app.e4fe013f.js";const g='{"title":"Get latest Shopizer Docker image","description":"","frontmatter":{},"headers":[{"level":3,"title":"Get latest Shopizer Docker image","slug":"get-latest-shopizer-docker-image"},{"level":3,"title":"Run Docker image","slug":"run-docker-image"},{"level":3,"title":"Build your own image","slug":"build-your-own-image"},{"level":3,"title":"Run Shopizer and dependency with Docker Compose","slug":"run-shopizer-and-dependency-with-docker-compose"},{"level":2,"title":"See also","slug":"see-also"}],"relativePath":"docker-local/default.md","lastUpdated":1638461818374}',s={},t=r(`<p>Shopizer&#39;s team deliver on a continuous basis improvements on Shopizer which are almost available immediately from DockerHub latest Shopizer image.</p><h3 id="get-latest-shopizer-docker-image" tabindex="-1">Get latest Shopizer Docker image <a class="header-anchor" href="#get-latest-shopizer-docker-image" aria-hidden="true">#</a></h3><p>Shopizer master branch is built on a regular basis and is avilable from DockerHub as latest tag. Docker version is available from <a href="https://hub.docker.com/r/shopizerecomm/shopizer" target="_blank" rel="noopener noreferrer">Shopizer on DockerHub</a></p><h3 id="run-docker-image" tabindex="-1">Run Docker image <a class="header-anchor" href="#run-docker-image" aria-hidden="true">#</a></h3><p>From a terminal or console</p><div class="language-sh"><pre><code>docker pull shopizerecomm/shopizer
</code></pre></div><p>Open a browser to <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080</a></p><p>Administration is available from this url <a href="http://localhost:8080/admin" target="_blank" rel="noopener noreferrer">http://localhost:8080/admin</a></p><p><strong>username: <a href="mailto:admin@shopizer.com">admin@shopizer.com</a></strong><strong>password: password</strong></p><p>This container runs a simple demo of Shopizer for evaluation purpose. It uses H2 database and infinispan storage for images and files. See below how to configure container for production.</p><h3 id="build-your-own-image" tabindex="-1">Build your own image <a class="header-anchor" href="#build-your-own-image" aria-hidden="true">#</a></h3><p>Docker file is available in source code at this location <strong>shopizer/sm-shop/Dockerfile</strong></p><p>To build your own image you need to execute the following comands</p><div class="language-sh"><pre><code>cd shopizer
mvnw clean install
cd sm-shop
docker build .
</code></pre></div><h3 id="run-shopizer-and-dependency-with-docker-compose" tabindex="-1">Run Shopizer and dependency with Docker Compose <a class="header-anchor" href="#run-shopizer-and-dependency-with-docker-compose" aria-hidden="true">#</a></h3><p><strong>Requirements</strong>: Have Docker Compose installed. See <a href="https://docs.docker.com/compose/install/" target="_blank" rel="noopener noreferrer">Docker Compose</a> installation instructions.</p><p>Docker Compose simplifies configurtion and container dependency with the configuration of a yaml file that lets connect Shopizer to outer dependencies such as Elastic Search and MySQL.</p><div class="language-sh"><pre><code>--- 
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
      - &quot;3307:3306&quot;
    volumes: 
      - ./db:/var/lib/mysql
  shopizer: 
    depends_on: 
      - shopizer-db
    environment: 
      - &quot;SPRING_PROFILES_ACTIVE=dependency&quot;
      - &quot;JAVA_OPTS=-Xms1024m -Xmx1024m&quot;
      - &quot;elasticsearch.server.host=shopizer-es&quot;
      - &quot;elasticsearch.server.port=9200&quot;
      - &quot;db.jdbcUrl=jdbc:mysql://shopizer-db:3306/SALESMANAGER?autoReconnect=true&amp;serverTimeZone=UTC&amp;useUnicode=true&amp;characterEncoding=UTF-8&quot;
      - &quot;db.user=shopizer_db_user&quot;
      - &quot;db.password=my-password&quot;
      - &quot;elasticsearch.security.password=NOTREQUIRED&quot;
      - &quot;config.displayShipping=true&quot;
      - &quot;config.googleMapsKey=NO&quot;
      - &quot;config.recaptcha.secretKey=NO&quot;
      - &quot;config.recaptcha.siteKey=NO&quot;
      - &quot;config.shippingDistancePreProcessor.acceptedZones=QC,ON,NB,NY,CA,FL,NC,SC&quot;
      - &quot;config.shippingDistancePreProcessor.apiKey=NO&quot;
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
      - &quot;8080:8080&quot;
  shopizer-es: 
    environment: 
      - &quot;cluster.name=shopizer&quot;
      - &quot;bootstrap.memory_lock=true&quot;
      - &quot;discovery.type=single-node&quot;
      - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;
    image: docker.elastic.co/elasticsearch/elasticsearch:7.5.2
    container_name: shopizer-es
    networks:
      - shopizer-network
    mem_limit: 1g
    ports: 
      - &quot;9200:9200&quot;
    ulimits: 
      memlock: 
        hard: -1
        soft: -1
    volumes:
      - ./es:/usr/share/elasticsearch/data
version: &quot;2.2&quot;

networks:
  shopizer-network:
</code></pre></div><p>Copy the file above in a text file and name it docker-compose.yml The content of this file consist of minimal configurations for running shopizer configured with Elastic Search and MySQL.</p><p>To run dependency project (Shopizer + Elastic Search + MySQL), cd to the directoy where you have created <strong>docker-compose.yml</strong> file and type this command:</p><div class="language-sh"><pre><code>$ docker-compose up
</code></pre></div><p>This will start an empty store that you can start building with MySQL and Elastic Search running. Take note that MySQL is running on port 3307 and ElasticSearch on port 9200. In case of conflicts those ports can be changed.</p><p>You can connect to MySQL using your SQL client. Password as specified in docker-compose.yml is <strong>my-password</strong></p><div class="language-sh"><pre><code>mysql -u shopizer_db_user -p -h 127.0.0.1:3307
</code></pre></div><hr><h2 id="see-also" tabindex="-1">See also <a class="header-anchor" href="#see-also" aria-hidden="true">#</a></h2>`,26),a=[t];function i(c,p,d,l,h,u){return n(),o("div",null,a)}var f=e(s,[["render",i]]);export{g as __pageData,f as default};
