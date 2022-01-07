import{_ as e,c as a,o as t,d as i}from"./app.e4fe013f.js";const f='{"title":"Shopizer search","description":"","frontmatter":{},"headers":[{"level":2,"title":"Shopizer search","slug":"shopizer-search"},{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Configure ElasticSearch","slug":"configure-elasticsearch"},{"level":2,"title":"Run ElasticSearch","slug":"run-elasticsearch"},{"level":3,"title":"Local ElasticSearch","slug":"local-elasticsearch"},{"level":3,"title":"Docker based ElasticSearch","slug":"docker-based-elasticsearch"},{"level":2,"title":"Shopizer analytics using ElasicSearch","slug":"shopizer-analytics-using-elasicsearch"},{"level":3,"title":"Requirements for using order analytics in ElasticSearch","slug":"requirements-for-using-order-analytics-in-elasticsearch"},{"level":3,"title":"Kibana configurations","slug":"kibana-configurations"}],"relativePath":"documentation/search/search.md","lastUpdated":1638461818389}',r={},s=i(`<h2 id="shopizer-search" tabindex="-1">Shopizer search <a class="header-anchor" href="#shopizer-search" aria-hidden="true">#</a></h2><p>ElasticSearch is the software used for indexing and searching items in Shopizer. Search autocomplete and items search are functionality available from shopping jsp templates and from Shopizer REST api.</p><p>Shopizer has been tested with latest ElasticSearch 7.X version</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h2><ul><li>Elastic search 7.X binaries or docker image</li></ul><h2 id="configure-elasticsearch" tabindex="-1">Configure ElasticSearch <a class="header-anchor" href="#configure-elasticsearch" aria-hidden="true">#</a></h2><p>ElasticSearch requires a cluser name allowing all nodes from that same cluster to connect and share information. Shopizer is configured by default to connect to an existing ElasticSearch cluster having cluster name shopizer.</p><p>One of these options are required to connect Shopizer to an ElastciSearch cluster</p><h3> Create an elastic search cluster having cluster name shopizer </h3><p>Edit /config/elasticsearch.yml</p><p>Configure shopizer cluster name</p><div class="language-sh"><pre><code># ---------------------------------- Cluster -----------------------------------
#
# Use a descriptive name for your cluster:
#
cluster.name: shopizer
#
</code></pre></div><h3> Configure Shiopizer to connect with your own cluster name </h3><p>Edit /sm-core/src/main/resources//shopizer-core.properties</p><div class="language-sh"><pre><code>#Elastic Search configurations
elasticsearch.cluster.name=your-cluster
</code></pre></div><p>Change the name to the the name of the cluster you have configured in elasticsearch</p><h2 id="run-elasticsearch" tabindex="-1">Run ElasticSearch <a class="header-anchor" href="#run-elasticsearch" aria-hidden="true">#</a></h2><h3 id="local-elasticsearch" tabindex="-1">Local ElasticSearch <a class="header-anchor" href="#local-elasticsearch" aria-hidden="true">#</a></h3><p>ElasticSearch is a Java based application and can be started from a simple command line. ElastciSearch version 7.X requires Java 8</p><p>On a local installation start ElasticSearch with this command</p><div class="language-sh"><pre><code>cd elasticsearch/bin
./elasticsearch
</code></pre></div><h3 id="docker-based-elasticsearch" tabindex="-1">Docker based ElasticSearch <a class="header-anchor" href="#docker-based-elasticsearch" aria-hidden="true">#</a></h3><p>Easiest way to have ElasticSearch running is by runing it from a Docker image</p><div class="language-sh"><pre><code>docker pull docker.elastic.co/elasticsearch/elasticsearch:7.5.2

docker run -p 9200:9200 -p 9300:9300 \\
-e &quot;discovery.type=single-node&quot; \\
-e &quot;cluster.name=shopizer&quot; \\
docker.elastic.co/elasticsearch/elasticsearch:7.5.2
</code></pre></div><p>More details here <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html" target="_blank" rel="noopener noreferrer">Install ElasticSearch with Docker</a></p><h2 id="shopizer-analytics-using-elasicsearch" tabindex="-1">Shopizer analytics using ElasicSearch <a class="header-anchor" href="#shopizer-analytics-using-elasicsearch" aria-hidden="true">#</a></h2><p>Shopizer uses powerfull indexing and searching technology of ElasticSearch for extracting analytics information from orders. This functionality is an option and this configuration is not required to run Shopizer search functionality. Shopizer&#39;s functionality for saving orders to ElasticSearch is included without any modifications to the code.</p><h3 id="requirements-for-using-order-analytics-in-elasticsearch" tabindex="-1">Requirements for using order analytics in ElasticSearch <a class="header-anchor" href="#requirements-for-using-order-analytics-in-elasticsearch" aria-hidden="true">#</a></h3><ul><li>Have Kibana installed or have a running Kibana Docker image connected to ElasticSearch defined cluster above</li></ul><h3 id="kibana-configurations" tabindex="-1">Kibana configurations <a class="header-anchor" href="#kibana-configurations" aria-hidden="true">#</a></h3><p>Once Kibana is running and connected to ElasticSearch cluster configure a new settings for orders index</p><div class="language-sh"><pre><code>PUT /_ingest/pipeline/timestamp
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
  &quot;index_patterns&quot;: [&quot;orders-*&quot;],
  &quot;settings&quot;: {
    &quot;index.default_pipeline&quot;: &quot;timestamp&quot;
  }
}

PUT _template/carts
{
  &quot;index_patterns&quot;: [&quot;carts-*&quot;],
  &quot;settings&quot;: {
    &quot;index.default_pipeline&quot;: &quot;timestamp&quot;
  }
}
</code></pre></div><p>Once a few orders are created from Shopizer, open Kibana and explore histograms of your orders</p>`,33),n=[s];function c(o,l,h,u,d,p){return t(),a("div",null,n)}var m=e(r,[["render",c]]);export{f as __pageData,m as default};
