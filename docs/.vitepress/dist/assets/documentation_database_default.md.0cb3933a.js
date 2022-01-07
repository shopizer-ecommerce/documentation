import{_ as e,c as t,o as a,d as r}from"./app.e4fe013f.js";const E='{"title":"Database configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"Database configuration","slug":"database-configuration"},{"level":3,"title":"Configure Shopizer with H2 database","slug":"configure-shopizer-with-h2-database"},{"level":3,"title":"Configure Shopizer with MySQL","slug":"configure-shopizer-with-mysql"},{"level":3,"title":"Configure Shopizer with Postgresql","slug":"configure-shopizer-with-postgresql"},{"level":3,"title":"Configure Shopizer with Oracle","slug":"configure-shopizer-with-oracle"}],"relativePath":"documentation/database/default.md","lastUpdated":1638461818383}',s={},o=r(`<h2 id="database-configuration" tabindex="-1">Database configuration <a class="header-anchor" href="#database-configuration" aria-hidden="true">#</a></h2><p>Shopizer has been tested and supports H2, MySQL (recommended), MariaDB, Postgresql and Oracle databases. Shopizer comes pre-configured with H2 database. H2 is an embedded database (<a href="http://www.h2database.com" target="_blank" rel="noopener noreferrer">http://www.h2database.com</a>) configured by default to save data on files.</p><p>This pre-configuration should only be used for testing and never be used in a production environment.</p><h3 id="configure-shopizer-with-h2-database" tabindex="-1">Configure Shopizer with H2 database <a class="header-anchor" href="#configure-shopizer-with-h2-database" aria-hidden="true">#</a></h3><p>By default H2 files are saved into your application server runtime directory. To change the location where the files have to be saved, edit sm-shop/src/main/resources/database.properties and edit the line</p><div class="language-sh"><pre><code>db.jdbcUrl=jdbc\\:h2\\:file\\:c:/SALESMANAGER;AUTOCOMMIT\\=OFF;INIT\\=CREATE SCHEMA IF NOT EXISTS SALESMANAGER
</code></pre></div><p>Make sure the file path is a valid existing directory. In this case the configuration file will be saved in c:\\</p><h3 id="configure-shopizer-with-mysql" tabindex="-1">Configure Shopizer with MySQL <a class="header-anchor" href="#configure-shopizer-with-mysql" aria-hidden="true">#</a></h3><p>Log to your MySQL as root and create schema SALESMANAGER</p><div class="language-sh"><pre><code>mysql&gt;CREATE DATABASE SALESMANAGER;
mysql&gt;GRANT USAGE, SELECT ON *.* TO &lt;YOUR USERNAME&gt;@localhost IDENTIFIED BY &#39;&lt;YOUR PASSWORD&gt;&#39; with grant option;
mysql&gt;GRANT ALL ON SALESMANAGER.* TO &lt;YOUR USERNAME&gt;@localhost;
mysql&gt;GRANT FILE ON *.* TO &lt;YOUR USERNAME&gt;@localhost;
mysql&gt;FLUSH PRIVILEGES;
</code></pre></div><p><strong>Example</strong></p><div class="language-sh"><pre><code>mysql&gt;CREATE DATABASE SALESMANAGER;
mysql&gt;GRANT USAGE, SELECT ON *.* TO testuser@localhost IDENTIFIED BY &#39;password&#39; with grant option;
mysql&gt;GRANT ALL ON SALESMANAGER.* TO testuser@localhost;
mysql&gt;FLUSH PRIVILEGES;
</code></pre></div><p><strong>Create user that can connect from everywhere</strong></p><div class="language-sh"><pre><code>mysql&gt;CREATE USER &#39;mysuer&#39;@&#39;%&#39; IDENTIFIED BY &#39;mypassword&#39;;
mysql&gt;GRANT USAGE, SELECT ON MYDB.* TO &#39;mysuer&#39;@&#39;%&#39; with grant option;
mysql&gt;GRANT ALL ON MYDB.* TO &#39;mysuer&#39;@&#39;%&#39;;
mysql&gt;FLUSH PRIVILEGES;
</code></pre></div><p>Edit <strong>sm-shop/src/main/resources/database.properties</strong></p><div class="language-sh"><pre><code>db.jdbcUrl=jdbc:mysql://localhost:3306/SALESMANAGER?autoReconnect=true&amp;useUnicode=true&amp;characterEncoding=UTF-8
db.user=YOUR USERNAME
db.password=YOUR PASSWORD
db.driverClass=com.mysql.jdbc.Driver
hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
db.preferredTestQuery=SELECT 1

db.schema=SALESMANAGER
hibernate.hbm2ddl.auto=update
</code></pre></div><p><strong>Note:</strong> Database and table names are not case sensitive in Windows, and case sensitive in most varieties of Unix-Linux. Consequently MySQL which uses lower case schema and table names will not be able to see the schema and tables which are created upper case in Shopizer. If you get an exception of a table not being found and being displayed in lower case in the error message, you will have to specify this property in My.cnf. To resolve the issue set the lower_case_table_names to 1 in <strong>My.cnf</strong> configuration file.</p><p>Edit <strong>My.cnf</strong></p><div class="language-sh"><pre><code>lower_case_table_names=1
</code></pre></div><h3 id="configure-shopizer-with-postgresql" tabindex="-1">Configure Shopizer with Postgresql <a class="header-anchor" href="#configure-shopizer-with-postgresql" aria-hidden="true">#</a></h3><p>Create a new postgresql</p><div class="language-sh"><pre><code>CREATE DATABASE SHOPIZER;
</code></pre></div><p>Create schema</p><div class="language-sh"><pre><code>CREATE SCHEMA salesmanager;
</code></pre></div><p>Edit <strong>sm-shop/src/main/resources/database.properties</strong></p><div class="language-sh"><pre><code>#POSTGRES
db.jdbcUrl=jdbc:postgresql://localhost:5432/SHOPIZER
db.user=postgres
db.password=password
db.driverClass=org.postgresql.Driver
hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
db.preferredTestQuery=SELECT 1

db.schema=SALESMANAGER
hibernate.hbm2ddl.auto=update
</code></pre></div><p>Edit <strong>shopizer/pom.xml</strong></p><p>Un-comment both postgresql dependency</p><div class="language-sh"><pre><code>		&lt;!--  postgres 
		&lt;dependency&gt;
			&lt;groupId&gt;org.postgresql&lt;/groupId&gt;
			&lt;artifactId&gt;postgresql&lt;/artifactId&gt;
		&lt;/dependency&gt;
		--&gt;
</code></pre></div><h3 id="configure-shopizer-with-oracle" tabindex="-1">Configure Shopizer with Oracle <a class="header-anchor" href="#configure-shopizer-with-oracle" aria-hidden="true">#</a></h3><p>Tested with Oracle Express and Oracle Entreprise. In this example we used Express 12c with portable database.</p><p>Create new user</p><div class="language-sh"><pre><code>CREATE USER SALESMANAGER IDENTIFIED BY password;
GRANT CONNECT, RESOURCE, DBA TO SALESMANAGER;
</code></pre></div><p>Edit <strong>sm-shop/src/main/resources/database.properties</strong></p><div class="language-sh"><pre><code>#ORACLE
db.jdbcUrl=jdbc:oracle:thin:@localhost:1521/XEPDB1
db.user=SALESMANAGER
db.password=password
db.driverClass=oracle.jdbc.OracleDriver
hibernate.dialect=org.hibernate.dialect.Oracle12cDialect
db.preferredTestQuery=SELECT 1 FROM DUAL

db.schema=SALESMANAGER
hibernate.hbm2ddl.auto=update
</code></pre></div><p>Edit <strong>shopizer/pom.xml</strong></p><p>Un-comment both oracle dependency</p><div class="language-sh"><pre><code>		&lt;!-- oracle --&gt;
		&lt;!-- 
		&lt;dependency&gt;
			&lt;groupId&gt;com.oracle&lt;/groupId&gt;
			&lt;artifactId&gt;ojdbc8&lt;/artifactId&gt;
			&lt;version&gt;\${oracle.version}&lt;/version&gt; 
		&lt;/dependency&gt;
		 --&gt;
</code></pre></div><p>Also a vm argument is required in order to support LONG TEXT datatype Set runtime argument like this</p><div class="language-sh"><pre><code>-Doracle.jdbc.useFetchSizeWithLongColumn=true
</code></pre></div>`,40),n=[o];function i(d,l,c,p,h,g){return a(),t("div",null,n)}var b=e(s,[["render",i]]);export{E as __pageData,b as default};
