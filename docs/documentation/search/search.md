
## Shopizer search

ElasticSearch is the software used for indexing and searching items in Shopizer. Search autocomplete and items search are functionality available from shopping jsp templates and from Shopizer REST api.

Shopizer has been tested with latest ElasticSearch 7.X version

## Requirements

- Elastic search 7.X binaries or docker image

## Configure ElasticSearch

ElasticSearch requires a cluser name allowing all nodes from that same cluster to connect and share information. Shopizer is configured by default to connect to an existing ElasticSearch cluster having cluster name shopizer.

One of these options are required to connect Shopizer to an ElastciSearch cluster

<h3> Create an elastic search cluster having cluster name shopizer </h3>

Edit /config/elasticsearch.yml

Configure shopizer cluster name

```sh
# ---------------------------------- Cluster -----------------------------------
#
# Use a descriptive name for your cluster:
#
cluster.name: shopizer
#
```

<h3> Configure Shiopizer to connect with your own cluster name </h3>

Edit /sm-core/src/main/resources//shopizer-core.properties

```sh
#Elastic Search configurations
elasticsearch.cluster.name=your-cluster
```

Change the name to the the name of the cluster you have configured in elasticsearch


## Run ElasticSearch

### Local ElasticSearch

ElasticSearch is a Java based application and can be started from a simple command line. ElastciSearch version 7.X requires Java 8

On a local installation start ElasticSearch with this command

```sh
cd elasticsearch/bin
./elasticsearch
```

### Docker based ElasticSearch

Easiest way to have ElasticSearch running is by runing it from a Docker image


```sh
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.5.2

docker run -p 9200:9200 -p 9300:9300 \
-e "discovery.type=single-node" \
-e "cluster.name=shopizer" \
docker.elastic.co/elasticsearch/elasticsearch:7.5.2
```

More details here [Install ElasticSearch with Docker](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html)


## Shopizer analytics using ElasicSearch

Shopizer uses powerfull indexing and searching technology of ElasticSearch for extracting analytics information from orders. This functionality is an option and this configuration is not required to run Shopizer search functionality. Shopizer's functionality for saving orders to ElasticSearch is included without any modifications to the code.

### Requirements for using order analytics in ElasticSearch

- Have Kibana installed or have a running Kibana Docker image connected to ElasticSearch defined cluster above

### Kibana configurations

Once Kibana is running and connected to ElasticSearch cluster configure a new settings for orders index

```sh
PUT /_ingest/pipeline/timestamp
{
	"description": "Creates a timestamp when a document is initially indexed",
	"processors": [{
		"set": {
			"field": "_source.timestamp",
			"value": "{{_ingest.timestamp}}"
		}
	}]
}

PUT _template/orders
{
  "index_patterns": ["orders-*"],
  "settings": {
    "index.default_pipeline": "timestamp"
  }
}

PUT _template/carts
{
  "index_patterns": ["carts-*"],
  "settings": {
    "index.default_pipeline": "timestamp"
  }
}
```

Once a few orders are created from Shopizer, open Kibana and explore histograms of your orders
