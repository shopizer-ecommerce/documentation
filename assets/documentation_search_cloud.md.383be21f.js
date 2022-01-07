import{_ as e,c as t,o as a,d as s}from"./app.bc8efb32.js";var i="/assets/elastic-config.0136a332.png",o="/assets/elastic-host-config.09d9c61b.png";const q='{"title":"Use Elastic Cloud SaaS","description":"","frontmatter":{},"headers":[{"level":2,"title":"Use Elastic Cloud SaaS","slug":"use-elastic-cloud-saas"},{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Deployment creation","slug":"deployment-creation"},{"level":3,"title":"Shopizer configuraion","slug":"shopizer-configuraion"},{"level":3,"title":"Kibana configurations","slug":"kibana-configurations"}],"relativePath":"documentation/search/cloud.md","lastUpdated":1641577787282}',n={},r=s('<h2 id="use-elastic-cloud-saas" tabindex="-1">Use Elastic Cloud SaaS <a class="header-anchor" href="#use-elastic-cloud-saas" aria-hidden="true">#</a></h2><p>Elastic Cloud is a SaaS allowing to create, deploy ans scal Elastic Search in the cloud that is managed by ElasticSearch. It is quite easy to create simple to complex deployments that can be scaled according to the demand for searching and indexing data from your Shopizer implementations. There is a cost of ownership for this solution that vary according to the usage and use cases. Multi Store and Multi Tenant solution may require more resources and a bigger cluster than a simple B2C e-commerce solution.</p><p><strong>Pros:</strong> It is easy to create in minutesa deploment including latest ElasicSearch tools suck as Kibana, Elastic Search and more.</p><p><strong>Cons:</strong> It might be expensive to run a fault tolerant cluster in multiple regions with a large number of resources.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h2><p>No specific requirements f0r creating an ElsticSearch cluster on Elastic Cloud. Elastic Cloud can be accessed from here <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer">Elastc Cloud</a></p><h2 id="deployment-creation" tabindex="-1">Deployment creation <a class="header-anchor" href="#deployment-creation" aria-hidden="true">#</a></h2><p>Here is a sample of required resources for creating minmal elastic search cluster. A simple configuration can be acieved within a single node. ElasticSearch, Kibana (visualization tool) and APM (Monitoring) are recommended tools for creating this new deployment.</p><p><strong>Simple deployment</strong></p><p><img src="'+i+'" alt="Simple deployment sample" title="Elastc Cloud simple deployment"></p><h3 id="shopizer-configuraion" tabindex="-1">Shopizer configuraion <a class="header-anchor" href="#shopizer-configuraion" aria-hidden="true">#</a></h3><p>Edit /sm-core/resources/shopizer-core.properties..</p><p>For this you need to have thos informations</p><ul><li>Cluster name</li><li>Username (given during the creation process, should be &#39;elastic&#39;)</li><li>Password (given during the creation process)</li><li>Scheme (Elastic Search url scheme &#39;https&#39;)</li><li>Host (Elastic Search host)</li><li>Port (Elastic Search port)</li></ul><p>When clicking on Elastic Search component you can retrieve cluster name, host and port</p><p><img src="'+o+`" alt="Elastic Search cluster configuration" title="Elastic Search cluster configuration"></p><p>Configure elastic cloud cluster information</p><div class="language-sh"><pre><code>#Elastic Search configurations required
elasticsearch.cluster.name=your-cluster
elasticsearch.server.host=...url...us-east-1.aws.found.io
elasticsearch.server.protocole=https
elasticsearch.server.port=9243
elasticsearch.security.enabled=true
elasticsearch.security.user=elastic
elasticsearch.security.password=your-elastic-given-password
</code></pre></div><h3 id="kibana-configurations" tabindex="-1">Kibana configurations <a class="header-anchor" href="#kibana-configurations" aria-hidden="true">#</a></h3><p>Click on Kibana url and authenticate using username and password.</p><p>Click on &#39;Dev Tools&#39; and run those query</p><div class="language-sh"><pre><code>PUT /_ingest/pipeline/timestamp
{
	&quot;description&quot;: &quot;Creates a timestamp when a document is initially indexed&quot;,
	&quot;processors&quot;: [{
		&quot;set&quot;: {
			&quot;field&quot;: &quot;_source.timestamp&quot;,
			&quot;value&quot;: &quot;{{_ingest.timestamp}}&quot;
		}
	}]
}

PUT _template/orders
{
  &quot;index_patterns&quot;: [&quot;orders_&quot;],
  &quot;settings&quot;: {
    &quot;index.default_pipeline&quot;: &quot;timestamp&quot;
  }
}

PUT _template/carts
{
  &quot;index_patterns&quot;: [&quot;carts_*&quot;],
  &quot;settings&quot;: {
    &quot;index.default_pipeline&quot;: &quot;timestamp&quot;
  }
}
</code></pre></div>`,22),c=[r];function l(u,d,p,h,m,g){return a(),t("div",null,c)}var _=e(n,[["render",l]]);export{q as __pageData,_ as default};
