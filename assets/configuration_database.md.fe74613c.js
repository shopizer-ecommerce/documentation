import{_ as s,c as a,o as n,a as e}from"./app.73ad5787.js";const d=JSON.parse('{"title":"Shopizer database configuration","description":"","frontmatter":{"title":"Shopizer database configuration"},"headers":[{"level":3,"title":"Configure Shopizer with H2 database","slug":"configure-shopizer-with-h2-database"},{"level":3,"title":"Configure Shopizer with MySQL","slug":"configure-shopizer-with-mysql"},{"level":3,"title":"Configure Shopizer with Postgresql","slug":"configure-shopizer-with-postgresql"}],"relativePath":"configuration/database.md"}'),p={name:"configuration/database.md"},l=e(`<h1 id="database-configuration" tabindex="-1">Database configuration <a class="header-anchor" href="#database-configuration" aria-hidden="true">#</a></h1><p>Shopizer has been tested and supports H2, MySQL (recommended), MariaDB and Postgresql databases. Shopizer comes pre-configured with H2 database. H2 is an embedded database (<a href="http://www.h2database.com" target="_blank" rel="noopener noreferrer">http://www.h2database.com</a>) configured by default to save data on files.</p><p>This pre-configuration should only be used for testing and never be used in a production environment.</p><h3 id="configure-shopizer-with-h2-database" tabindex="-1">Configure Shopizer with H2 database <a class="header-anchor" href="#configure-shopizer-with-h2-database" aria-hidden="true">#</a></h3><p>By default H2 files are saved into your application server runtime directory. To change the location where the files have to be saved, edit sm-shop/src/main/resources/database.properties and edit the line</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">db.jdbcUrl=jdbc\\:h2\\:file\\:c:/SALESMANAGER</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">AUTOCOMMIT\\=OFF</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">INIT\\=CREATE SCHEMA IF NOT EXISTS SALESMANAGER</span></span>
<span class="line"></span></code></pre></div><p>Make sure the file path is a valid existing directory. In this case the configuration file will be saved in c:\\</p><h3 id="configure-shopizer-with-mysql" tabindex="-1">Configure Shopizer with MySQL <a class="header-anchor" href="#configure-shopizer-with-mysql" aria-hidden="true">#</a></h3><p>Log to your MySQL as root and create schema SALESMANAGER</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">CREATE DATABASE SALESMANAGER</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">GRANT USAGE, SELECT ON </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">YOUR USERNAME</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">@localhost IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;YOUR PASSWORD&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> with grant option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">GRANT ALL ON SALESMANAGER.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">YOUR USERNAME</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">@localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">GRANT FILE ON </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">YOUR USERNAME</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">@localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">FLUSH PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Example</strong></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">CREATE DATABASE SALESMANAGER</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">GRANT USAGE, SELECT ON </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO testuser@localhost IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> with grant option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">GRANT ALL ON SALESMANAGER.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO testuser@localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">FLUSH PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Create user that can connect from everywhere</strong></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">CREATE USER </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysuer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mypassword</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">GRANT USAGE, SELECT ON MYDB.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysuer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> with grant option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">GRANT ALL ON MYDB.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysuer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">FLUSH PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Edit <strong>sm-shop/src/main/resources/database.properties</strong></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">db.jdbcUrl=jdbc:mysql://localhost:3306/SALESMANAGER</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">autoReconnect=true</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">useUnicode=true</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">characterEncoding=UTF-8</span></span>
<span class="line"><span style="color:#A6ACCD;">db.user=YOUR USERNAME</span></span>
<span class="line"><span style="color:#A6ACCD;">db.password=YOUR PASSWORD</span></span>
<span class="line"><span style="color:#A6ACCD;">db.driverClass=com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="color:#A6ACCD;">hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect</span></span>
<span class="line"><span style="color:#A6ACCD;">db.preferredTestQuery=SELECT 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db.schema=SALESMANAGER</span></span>
<span class="line"><span style="color:#A6ACCD;">hibernate.hbm2ddl.auto=update</span></span>
<span class="line"></span></code></pre></div><p><strong>Note:</strong> Database and table names are not case sensitive in Windows, and case sensitive in most varieties of Unix-Linux. Consequently MySQL which uses lower case schema and table names will not be able to see the schema and tables which are created upper case in Shopizer. If you get an exception of a table not being found and being displayed in lower case in the error message, you will have to specify this property in My.cnf. To resolve the issue set the lower_case_table_names to 1 in <strong>My.cnf</strong> configuration file.</p><p>Edit <strong>My.cnf</strong></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">lower_case_table_names=1</span></span>
<span class="line"></span></code></pre></div><h3 id="configure-shopizer-with-postgresql" tabindex="-1">Configure Shopizer with Postgresql <a class="header-anchor" href="#configure-shopizer-with-postgresql" aria-hidden="true">#</a></h3><p>Create a new postgresql</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">CREATE DATABASE SHOPIZER</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Create schema</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">CREATE SCHEMA salesmanager</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Edit <strong>sm-shop/src/main/resources/database.properties</strong></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#POSTGRES</span></span>
<span class="line"><span style="color:#A6ACCD;">db.jdbcUrl=jdbc:postgresql://localhost:5432/SHOPIZER</span></span>
<span class="line"><span style="color:#A6ACCD;">db.user=postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">db.password=password</span></span>
<span class="line"><span style="color:#A6ACCD;">db.driverClass=org.postgresql.Driver</span></span>
<span class="line"><span style="color:#A6ACCD;">hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect</span></span>
<span class="line"><span style="color:#A6ACCD;">db.preferredTestQuery=SELECT 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db.schema=SALESMANAGER</span></span>
<span class="line"><span style="color:#A6ACCD;">hibernate.hbm2ddl.auto=update</span></span>
<span class="line"></span></code></pre></div><p>Edit <strong>shopizer/pom.xml</strong></p><p>Un-comment both postgresql dependency</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">--  postgres </span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.postgresql</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">postgresql</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		--</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,29),o=[l];function t(r,c,D,i,A,y){return n(),a("div",null,o)}var F=s(p,[["render",t]]);export{d as __pageData,F as default};
