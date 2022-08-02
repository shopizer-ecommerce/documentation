import{_ as o,c as e,b as s,t as n,a as p,d as t,o as l}from"./app.73ad5787.js";const q=JSON.parse('{"title":"Product images","description":"","frontmatter":{},"headers":[{"level":2,"title":"Add product images","slug":"add-product-images"},{"level":2,"title":"List product images","slug":"list-product-images"},{"level":2,"title":"Update product image sort order","slug":"update-product-image-sort-order"},{"level":2,"title":"Delete product image","slug":"delete-product-image"}],"relativePath":"api/products/product-images.md"}'),r={name:"api/products/product-images.md"},c=p('<h1 id="product-images" tabindex="-1">Product images <a class="header-anchor" href="#product-images" aria-hidden="true">#</a></h1><p>Product images management.</p><h2 id="add-product-images" tabindex="-1">Add product images <a class="header-anchor" href="#add-product-images" aria-hidden="true">#</a></h2><p><strong>Description:</strong></p><p><strong>Method:</strong></p><p>POST</p><p><strong>Url:</strong></p>',7),d=p(`<p><strong>Response:</strong></p><p><strong>status: Created</strong></p><p><strong>code: 201</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="list-product-images" tabindex="-1">List product images <a class="header-anchor" href="#list-product-images" aria-hidden="true">#</a></h2><p><strong>Description:</strong></p><p>List product images</p><p><strong>Method:</strong></p><p>GET</p><p><strong>Url:</strong></p>`,10),i=p(`<p><strong>Response:</strong></p><p><strong>status: OK</strong></p><p><strong>code: 200</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">imageName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">white-tshirt.jpeg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">imageUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:80/products/DEFAULT/TSHIRTA/SMALL/white-tshirt.jpeg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">externalUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">videoUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">imageType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">order</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">defaultImage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="update-product-image-sort-order" tabindex="-1">Update product image sort order <a class="header-anchor" href="#update-product-image-sort-order" aria-hidden="true">#</a></h2><p><strong>Description:</strong></p><p>Updates an image sort order</p><p><strong>Method:</strong></p><p>PATCH</p><p><strong>Url:</strong></p>`,10),D=p(`<p><strong>Response:</strong></p><p><strong>status: OK</strong></p><p><strong>code: 200</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="delete-product-image" tabindex="-1">Delete product image <a class="header-anchor" href="#delete-product-image" aria-hidden="true">#</a></h2><p><strong>Description:</strong></p><p>Updates an image sort order</p><p><strong>Method:</strong></p><p>DELETE</p><p><strong>Url:</strong></p>`,10),g=s("p",null,[s("strong",null,"Response:")],-1),u=s("p",null,[s("strong",null,"status: OK")],-1),F=s("p",null,[s("strong",null,"code: 200")],-1),y=s("div",{class:"language-js"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"}),t(`
`),s("span",{class:"line"})])])],-1);function _(a,C,A,h,m,T){return l(),e("div",null,[c,s("p",null,n(a.url)+"/api/v1/private/product/1/image",1),d,s("p",null,n(a.url)+"/api/v1/product/1/images",1),i,s("p",null,n(a.url)+"/api/v1/private/product/1/image/1?order=1",1),D,s("p",null,n(a.url)+"/api/v1/private/product/1/image/1",1),g,u,F,y])}var S=o(r,[["render",_]]);export{q as __pageData,S as default};
