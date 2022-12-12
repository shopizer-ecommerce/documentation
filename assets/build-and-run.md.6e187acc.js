import{_ as s,c as e,o as a,d as n}from"./app.af800631.js";const o="/documentation/assets/java-small.fe21b730.jpg",r="/documentation/assets/angular-small.46b1dbcf.png",p="/documentation/assets/react-small.0d7fce1c.png",A=JSON.parse('{"title":"Build and run Shopizer","description":"","frontmatter":{},"headers":[{"level":3,"title":"Build Shopizer","slug":"build-shopizer","link":"#build-shopizer","children":[]},{"level":3,"title":"Build and run Shopizer Angular administration app","slug":"build-and-run-shopizer-angular-administration-app","link":"#build-and-run-shopizer-angular-administration-app","children":[]},{"level":3,"title":"Build Shopizer store React app","slug":"build-shopizer-store-react-app","link":"#build-shopizer-store-react-app","children":[]}],"relativePath":"build-and-run.md"}'),i={name:"build-and-run.md"},t=n('<h1 id="build-and-run-shopizer" tabindex="-1">Build and run Shopizer <a class="header-anchor" href="#build-and-run-shopizer" aria-hidden="true">#</a></h1><p>The purpose of this section is to provide new users with the basics of Shopizer e-commerce framework in order to get started in their projects. It will walk the reader through the steps of installing and configuring Shopizer as well as running demo application locally.</p><p>These instructions are for running legacy Shopizer with JSP frontends as well as Shopizer backend version with Angular admin and React shop front.</p><h3 id="build-shopizer" tabindex="-1">Build Shopizer <a class="header-anchor" href="#build-shopizer" aria-hidden="true">#</a></h3><p><img src="'+o+`" alt="Java Backend" title="Java API also known as Headless or Backend"></p><p>Build from the source files. Open a terminal or console</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git clone git@github.com:shopizer-ecommerce/shopizer.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> shopizer</span></span>
<span class="line"></span></code></pre></div><p><strong>Build using Maven</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mvnw clean install</span></span>
<span class="line"></span></code></pre></div><p>This command should result in a success message. If you have any errors during this process and require assistance,feel free to use Shopizer forum. See <a href="https://groups.google.com/forum/#!forum/shopizer" target="_blank" rel="noreferrer">Shopizer forum</a> for asking or searching Shopizer build related questions.</p><p><strong>Start Shopizer</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> sm-shop</span></span>
<span class="line"><span style="color:#A6ACCD;">mvnw spring-boot:run</span></span>
<span class="line"></span></code></pre></div><p>Once the terminal or console displays that Shopizer is running and listening on service port and ready to be used.</p><p>Open a browser and type url <strong>localhost:8080</strong></p><p>This will open Shopizer headless api. You can view all application interfaces available by opening <strong>localhost:8080/swagger-ui.html</strong></p><h3 id="build-and-run-shopizer-angular-administration-app" tabindex="-1">Build and run Shopizer Angular administration app <a class="header-anchor" href="#build-and-run-shopizer-angular-administration-app" aria-hidden="true">#</a></h3><p><img src="`+r+`" alt="Angular App" title="Angular shop"></p><p>Angular app consuming Shopizer administration services endpoints</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git clone git@github.com:shopizer-ecommerce/shopizer-admin.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> shopizer-admin</span></span>
<span class="line"></span></code></pre></div><p><strong>Build using npm</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i</span></span>
<span class="line"></span></code></pre></div><p><strong>Start app</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ng serve -o</span></span>
<span class="line"></span></code></pre></div><p>Open a browser on <strong>localhost:4200</strong></p><p>Username: <strong><a href="mailto:admin@shopizer.com" target="_blank" rel="noreferrer">admin@shopizer.com</a></strong></p><p>Password: <strong>password</strong></p><p><strong>All software requirements for Node and Angular are specified in <a href="http://README.md" target="_blank" rel="noreferrer">README.md</a> file int the project root</strong></p><h3 id="build-shopizer-store-react-app" tabindex="-1">Build Shopizer store React app <a class="header-anchor" href="#build-shopizer-store-react-app" aria-hidden="true">#</a></h3><p><img src="`+p+`" alt="React App" title="React shop"></p><p>This is a showcase React app consuming Shopizer services endpoints</p><p>From a terminal or console</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git clone git@github.com:shopizer-ecommerce/shopizer-shop-reactjs.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> shopizer-shop-reactjs</span></span>
<span class="line"></span></code></pre></div><p><strong>Build using npm</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i</span></span>
<span class="line"></span></code></pre></div><p>This command should result in a success message. If you have any errors during this process and require assistance,feel free to use Shopizer forum. See <a href="https://groups.google.com/forum/#!forum/shopizer" target="_blank" rel="noreferrer">Shopizer forum</a> for asking or searching Shopizer build related questions.</p><p><strong>Start app</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"></span></code></pre></div><p>Once the terminal or console displays that Shopizer is running and listening on service port and ready to be used.</p><p><strong>All software requirements for Node js are specified in <a href="http://README.md" target="_blank" rel="noreferrer">README.md</a> file int the project root</strong></p>`,39),l=[t];function c(d,h,u,g,m,b){return a(),e("div",null,l)}const z=s(i,[["render",c]]);export{A as __pageData,z as default};