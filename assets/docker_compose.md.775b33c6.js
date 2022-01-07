import{_ as e,c as o,o as n,d as s}from"./app.e4fe013f.js";const _='{"title":"Run Shopizer componentswith Docker Compose","description":"","frontmatter":{},"headers":[{"level":3,"title":"Run Shopizer componentswith Docker Compose","slug":"run-shopizer-componentswith-docker-compose"},{"level":2,"title":"See also","slug":"see-also"}],"relativePath":"docker/compose.md","lastUpdated":1638461818375}',t={},r=s(`<p>Shopizer&#39;s team delivers on a continuous basis improvements on Shopizer which are almost available immediately from DockerHub latest Shopizer image.</p><h3 id="run-shopizer-componentswith-docker-compose" tabindex="-1">Run Shopizer componentswith Docker Compose <a class="header-anchor" href="#run-shopizer-componentswith-docker-compose" aria-hidden="true">#</a></h3><p><strong>Requirements</strong>: Have Docker Compose installed. See <a href="https://docs.docker.com/compose/install/" target="_blank" rel="noopener noreferrer">Docker Compose</a> installation instructions.</p><p>Docker Compose simplifies configurtion and container dependency with the configuration of a yaml file that lets connect Shopizer to outer dependencies such as Elastic Search and MySQL.</p><div class="language-sh"><pre><code>--- 
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
</code></pre></div><p>Copy the file above in a text file and name it docker-compose.yml The content of this file consist of minimal configurations for running shopizer configured with Elastic Search and MySQL.</p><p>A working version of Docker compose configuration can be found here <a href="https://github.com/shopizer-ecommerce/shopizer-docker-compose/blob/master/docker-compose-aws.yml" target="_blank" rel="noopener noreferrer">Docker Compose for Shopizer</a></p><p>To run dependency project (Shopizer + Elastic Search + MySQL), cd to the directoy where you have created <strong>docker-compose.yml</strong> file and type this command:</p><div class="language-sh"><pre><code>$ docker-compose up
</code></pre></div><p>This will start an empty store that you can start building with MySQL and Elastic Search running. Take note that MySQL is running on port 3307 and ElasticSearch on port 9200. In case of conflicts those ports can be changed.</p><p>You can connect to MySQL using your SQL client. Password as specified in docker-compose.yml is <strong>my-password</strong></p><div class="language-sh"><pre><code>mysql -u shopizer_db_user -p -h 127.0.0.1:3307
</code></pre></div><hr><h2 id="see-also" tabindex="-1">See also <a class="header-anchor" href="#see-also" aria-hidden="true">#</a></h2>`,14),i=[r];function a(c,p,h,d,m,u){return n(),o("div",null,i)}var q=e(t,[["render",a]]);export{_ as __pageData,q as default};
