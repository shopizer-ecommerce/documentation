
## Use Elastic Cloud SaaS

Elastic Cloud is a SaaS allowing to create, deploy ans scal Elastic Search in the cloud that is managed by ElasticSearch. It is quite easy to create simple to complex deployments that can be scaled according to the demand for searching and indexing data from your Shopizer implementations. There is a cost of ownership for this solution that vary according to the usage use cases. Multi Store and Multi Tenant solution may require more resources and a bigger cluster than a simple B2C e-commerce solution.

**Pros:** It is easy to create in minutesa deploment including latest ElasicSearch tools suck as Kibana, Elastic Search and more.

**Cons:** It might be expensive to run a fault tolerant cluster in multiple regions with a large number of resources.

## Requirements

No specific requirements f0r creating an ElsticSearch cluster on Elastic Cloud. Elastic Cloud can be accessed from here [Elastc Cloud](https://www.elastic.co/ )

## Deployment creation

Here is a sample of required resources for creating minmal elastic search cluster. A simple configuration can be acieved within a single node. ElasticSearch, Kibana (visualization tool) and APM (Monitoring) are recommended tools for creating this new deployment. 

Simple deployment

![Simple deployment sample](/documentation/static/img/documentation/elastic-config.png "Elastc Cloud simple deployment")


### Shopizer configuraion

Edit <shopizer>/sm-core/resources/shopizer-core.properties

For this you need to have thos informations

- Cluster name
- Username (given during the creation process, should be 'elastic')
- Password (given during the creation process)
- Scheme (Elastic Search url scheme 'https')
- Host (Elastic Search host)
- Port (Elastic Search port)

When clicking on Elastic Search component you can retrieve cluster name, host and port

![Elastic Search cluster configuration](/documentation/static/img/documentation/elastic-host-config.png "Elastic Search cluster configuration")


Configure elastic cloud cluster information

```sh
#Elastic Search configurations required
elasticsearch.cluster.name=your-cluster
elasticsearch.server.host=...url...us-east-1.aws.found.io
elasticsearch.server.protocole=https
elasticsearch.server.port=9243
elasticsearch.security.enabled=true
elasticsearch.security.user=elastic
elasticsearch.security.password=your-elastic-given-password
```


### Kibana configurations

Click on Kibana url and authenticate using username and password.

Click on 'Dev Tools' and run those query

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
  "index_patterns": ["orders_"],
  "settings": {
    "index.default_pipeline": "timestamp"
  }
}

PUT _template/carts
{
  "index_patterns": ["carts_*"],
  "settings": {
    "index.default_pipeline": "timestamp"
  }
}
```