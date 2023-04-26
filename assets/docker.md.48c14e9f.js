import{_ as s,c as e,o,R as t}from"./chunks/framework.c3af281d.js";const a="/documentation/assets/docker.fec6f20c.jpg",_=JSON.parse('{"title":"Run Shopizer with Docker Compose","description":"","frontmatter":{},"headers":[],"relativePath":"docker.md"}'),n={name:"docker.md"},r=t('<h1 id="run-shopizer-with-docker-compose" tabindex="-1">Run Shopizer with Docker Compose <a class="header-anchor" href="#run-shopizer-with-docker-compose" aria-label="Permalink to &quot;Run Shopizer with Docker Compose&quot;">​</a></h1><p><img src="'+a+`" alt="Docker" title="Docker Compose"></p><p>Shopizer can be run from Docker containers. The following instructions will run Shopizer Headless, Shopizer Shop App, Shopizer Admin App and Mysql</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:shopizer-ecommerce/shopizer-docker-compose.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shopizer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span></span></code></pre></div><p>Now run Docker containers</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span></span></code></pre></div><p>Open a browser on this urls</p><table><thead><tr><th>Application</th><th style="text-align:center;">Url</th></tr></thead><tbody><tr><td>Headless</td><td style="text-align:center;">localhost:8080</td></tr><tr><td>Shop</td><td style="text-align:center;">localhost:3000</td></tr><tr><td>Admin</td><td style="text-align:center;">localhost:4200</td></tr></tbody></table><p>Admin app credentials</p><p>Username: <strong><a href="mailto:admin@shopizer.com" target="_blank" rel="noreferrer">admin@shopizer.com</a></strong></p><p>Password: <strong>password</strong></p>`,11),p=[r];function l(c,i,d,h,m,C){return o(),e("div",null,p)}const A=s(n,[["render",l]]);export{_ as __pageData,A as default};