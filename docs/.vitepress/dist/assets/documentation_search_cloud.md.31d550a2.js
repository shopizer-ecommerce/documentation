import{_ as s,c as a,o as n,a as e,b as t}from"./app.e4fe013f.js";var i="/assets/elastic-config.0136a332.png",o="/assets/elastic-host-config.09d9c61b.png";const A='{"title":"Use Elastic Cloud SaaS","description":"","frontmatter":{},"headers":[{"level":2,"title":"Use Elastic Cloud SaaS","slug":"use-elastic-cloud-saas"},{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Deployment creation","slug":"deployment-creation"},{"level":3,"title":"Shopizer configuraion","slug":"shopizer-configuraion"},{"level":3,"title":"Kibana configurations","slug":"kibana-configurations"}],"relativePath":"documentation/search/cloud.md","lastUpdated":1638461818389}',r={},l=e("h2",{id:"use-elastic-cloud-saas",tabindex:"-1"},[t("Use Elastic Cloud SaaS "),e("a",{class:"header-anchor",href:"#use-elastic-cloud-saas","aria-hidden":"true"},"#")],-1),c=e("p",null,"Elastic Cloud is a SaaS allowing to create, deploy ans scal Elastic Search in the cloud that is managed by ElasticSearch. It is quite easy to create simple to complex deployments that can be scaled according to the demand for searching and indexing data from your Shopizer implementations. There is a cost of ownership for this solution that vary according to the usage and use cases. Multi Store and Multi Tenant solution may require more resources and a bigger cluster than a simple B2C e-commerce solution.",-1),u=e("p",null,[e("strong",null,"Pros:"),t(" It is easy to create in minutesa deploment including latest ElasicSearch tools suck as Kibana, Elastic Search and more.")],-1),d=e("p",null,[e("strong",null,"Cons:"),t(" It might be expensive to run a fault tolerant cluster in multiple regions with a large number of resources.")],-1),h=e("h2",{id:"requirements",tabindex:"-1"},[t("Requirements "),e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#")],-1),p=e("p",null,[t("No specific requirements f0r creating an ElsticSearch cluster on Elastic Cloud. Elastic Cloud can be accessed from here "),e("a",{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"},"Elastc Cloud")],-1),m=e("h2",{id:"deployment-creation",tabindex:"-1"},[t("Deployment creation "),e("a",{class:"header-anchor",href:"#deployment-creation","aria-hidden":"true"},"#")],-1),_=e("p",null,"Here is a sample of required resources for creating minmal elastic search cluster. A simple configuration can be acieved within a single node. ElasticSearch, Kibana (visualization tool) and APM (Monitoring) are recommended tools for creating this new deployment.",-1),g=e("p",null,[e("strong",null,"Simple deployment")],-1),f=e("p",null,[e("img",{src:i,alt:"Simple deployment sample",title:"Elastc Cloud simple deployment"})],-1),S=e("h3",{id:"shopizer-configuraion",tabindex:"-1"},[t("Shopizer configuraion "),e("a",{class:"header-anchor",href:"#shopizer-configuraion","aria-hidden":"true"},"#")],-1),v=e("p",null,"Edit /sm-core/resources/shopizer-core.properties..",-1),y=e("p",null,"For this you need to have thos informations",-1),b=e("ul",null,[e("li",null,"Cluster name"),e("li",null,"Username (given during the creation process, should be 'elastic')"),e("li",null,"Password (given during the creation process)"),e("li",null,"Scheme (Elastic Search url scheme 'https')"),e("li",null,"Host (Elastic Search host)"),e("li",null,"Port (Elastic Search port)")],-1),E=e("p",null,"When clicking on Elastic Search component you can retrieve cluster name, host and port",-1),x=e("p",null,[e("img",{src:o,alt:"Elastic Search cluster configuration",title:"Elastic Search cluster configuration"})],-1),C=e("p",null,"Configure elastic cloud cluster information",-1),w=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`#Elastic Search configurations required
elasticsearch.cluster.name=your-cluster
elasticsearch.server.host=...url...us-east-1.aws.found.io
elasticsearch.server.protocole=https
elasticsearch.server.port=9243
elasticsearch.security.enabled=true
elasticsearch.security.user=elastic
elasticsearch.security.password=your-elastic-given-password
`)])],-1),q=e("h3",{id:"kibana-configurations",tabindex:"-1"},[t("Kibana configurations "),e("a",{class:"header-anchor",href:"#kibana-configurations","aria-hidden":"true"},"#")],-1),k=e("p",null,"Click on Kibana url and authenticate using username and password.",-1),z=e("p",null,"Click on 'Dev Tools' and run those query",-1),P=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`PUT /_ingest/pipeline/timestamp
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
`)])],-1),U=[l,c,u,d,h,p,m,_,g,f,S,v,y,b,E,x,C,w,q,k,z,P];function T(K,B,D,M,$,I){return n(),a("div",null,U)}var H=s(r,[["render",T]]);export{A as __pageData,H as default};
