import{_ as e,c as s,o,a as t}from"./app.73ad5787.js";var a="/assets/docker.fec6f20c.jpg";const u=JSON.parse('{"title":"Run Shopizer with Docker Compose","description":"","frontmatter":{},"headers":[],"relativePath":"docker.md"}'),r={name:"docker.md"},n=t('<h1 id="run-shopizer-with-docker-compose" tabindex="-1">Run Shopizer with Docker Compose <a class="header-anchor" href="#run-shopizer-with-docker-compose" aria-hidden="true">#</a></h1><p><img src="'+a+`" alt="Docker" title="Docker Compose"></p><p>Shopizer can be run from Docker containers. The following instructions will run Shopizer Headless, Shopizer Shop App, Shopizer Admin App and Mysql</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone git@github.com:shopizer-ecommerce/shopizer-docker-compose.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> shopizer docker compose</span></span>
<span class="line"></span></code></pre></div><p>Now run Docker containers</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker compose up -d</span></span>
<span class="line"></span></code></pre></div><p>Open a browser on this urls</p><table><thead><tr><th>Application</th><th style="text-align:center;">Url</th></tr></thead><tbody><tr><td>Headless</td><td style="text-align:center;">localhost:8080</td></tr><tr><td>Shop</td><td style="text-align:center;">localhost:3000</td></tr><tr><td>Admin</td><td style="text-align:center;">localhost:4200</td></tr></tbody></table><p>Admin app credentials</p><p>Username: <strong><a href="mailto:admin@shopizer.com">admin@shopizer.com</a></strong></p><p>Password: <strong>password</strong></p>`,11),p=[n];function c(i,l,d,h,m,_){return o(),s("div",null,p)}var k=e(r,[["render",c]]);export{u as __pageData,k as default};
