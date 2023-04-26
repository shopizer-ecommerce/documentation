import{_ as s,c as a,o as n,R as l}from"./chunks/framework.c3af281d.js";const F=JSON.parse('{"title":"Shopizer database configuration","description":"","frontmatter":{"title":"Shopizer database configuration"},"headers":[],"relativePath":"configuration/database.md"}'),o={name:"configuration/database.md"},p=l(`<h1 id="database-configuration" tabindex="-1">Database configuration <a class="header-anchor" href="#database-configuration" aria-label="Permalink to &quot;Database configuration&quot;">​</a></h1><p>Shopizer has been tested and supports H2, MySQL (recommended), MariaDB and Postgresql databases. Shopizer comes pre-configured with H2 database. H2 is an embedded database (<a href="http://www.h2database.com" target="_blank" rel="noreferrer">http://www.h2database.com</a>) configured by default to save data on files.</p><p>This pre-configuration should only be used for testing and never be used in a production environment.</p><h3 id="configure-shopizer-with-h2-database" tabindex="-1">Configure Shopizer with H2 database <a class="header-anchor" href="#configure-shopizer-with-h2-database" aria-label="Permalink to &quot;Configure Shopizer with H2 database&quot;">​</a></h3><p>By default H2 files are saved into your application server runtime directory. To change the location where the files have to be saved, edit sm-shop/src/main/resources/database.properties and edit the line</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">db.jdbcUrl=jdbc\\:h2\\:file\\:c:/SALESMANAGER</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">AUTOCOMMIT\\=OFF</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">INIT\\=CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SCHEMA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EXISTS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SALESMANAGER</span></span></code></pre></div><p>Make sure the file path is a valid existing directory. In this case the configuration file will be saved in c:\\</p><h3 id="configure-shopizer-with-mysql" tabindex="-1">Configure Shopizer with MySQL <a class="header-anchor" href="#configure-shopizer-with-mysql" aria-label="Permalink to &quot;Configure Shopizer with MySQL&quot;">​</a></h3><p>Log to your MySQL as root and create schema SALESMANAGER</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mysql&gt;CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SALESMANAGER</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USAGE,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">YOUR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USERNAM</span><span style="color:#A6ACCD;">E</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">@localhost</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDENTIFIED</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;YOUR PASSWORD&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">grant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ALL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SALESMANAGER.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">YOUR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USERNAM</span><span style="color:#A6ACCD;">E</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">@localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FILE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">YOUR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USERNAM</span><span style="color:#A6ACCD;">E</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">@localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;FLUSH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIVILEGES</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><strong>Example</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mysql&gt;CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SALESMANAGER</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USAGE,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">testuser@localhost</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDENTIFIED</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">grant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ALL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SALESMANAGER.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">testuser@localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;FLUSH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIVILEGES</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><strong>Create user that can connect from everywhere</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mysql&gt;CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USER</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysuer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDENTIFIED</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mypassword</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USAGE,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MYDB.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysuer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">grant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ALL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MYDB.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysuer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;FLUSH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIVILEGES</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Edit <strong>sm-shop/src/main/resources/database.properties</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">db.jdbcUrl=jdbc:mysql://localhost:3306/SALESMANAGER?autoReconnect=</span><span style="color:#82AAFF;">true</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">useUnicode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">true</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">characterEncoding</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">UTF-</span><span style="color:#F78C6C;">8</span></span>
<span class="line"><span style="color:#FFCB6B;">db.user=YOUR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USERNAME</span></span>
<span class="line"><span style="color:#FFCB6B;">db.password=YOUR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PASSWORD</span></span>
<span class="line"><span style="color:#FFCB6B;">db.driverClass=com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="color:#FFCB6B;">hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect</span></span>
<span class="line"><span style="color:#FFCB6B;">db.preferredTestQuery=SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">db.schema=SALESMANAGER</span></span>
<span class="line"><span style="color:#FFCB6B;">hibernate.hbm2ddl.auto=update</span></span></code></pre></div><p><strong>Note:</strong> Database and table names are not case sensitive in Windows, and case sensitive in most varieties of Unix-Linux. Consequently MySQL which uses lower case schema and table names will not be able to see the schema and tables which are created upper case in Shopizer. If you get an exception of a table not being found and being displayed in lower case in the error message, you will have to specify this property in My.cnf. To resolve the issue set the lower_case_table_names to 1 in <strong>My.cnf</strong> configuration file.</p><p>Edit <strong>My.cnf</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lower_case_table_names</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span></code></pre></div><h3 id="configure-shopizer-with-postgresql" tabindex="-1">Configure Shopizer with Postgresql <a class="header-anchor" href="#configure-shopizer-with-postgresql" aria-label="Permalink to &quot;Configure Shopizer with Postgresql&quot;">​</a></h3><p>Create a new postgresql</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SHOPIZER</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Create schema</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SCHEMA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">salesmanager</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Edit <strong>sm-shop/src/main/resources/database.properties</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#POSTGRES</span></span>
<span class="line"><span style="color:#FFCB6B;">db.jdbcUrl=jdbc:postgresql://localhost:5432/SHOPIZER</span></span>
<span class="line"><span style="color:#FFCB6B;">db.user=postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">db.password=password</span></span>
<span class="line"><span style="color:#FFCB6B;">db.driverClass=org.postgresql.Driver</span></span>
<span class="line"><span style="color:#FFCB6B;">hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect</span></span>
<span class="line"><span style="color:#FFCB6B;">db.preferredTestQuery=SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">db.schema=SALESMANAGER</span></span>
<span class="line"><span style="color:#FFCB6B;">hibernate.hbm2ddl.auto=update</span></span></code></pre></div><p>Edit <strong>shopizer/pom.xml</strong></p><p>Un-comment both postgresql dependency</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">postgres</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">groupId&gt;org.postgresql&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">artifactId&gt;postgresql&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">--&gt;</span></span></code></pre></div>`,29),e=[p];function t(r,c,C,y,D,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{F as __pageData,d as default};
