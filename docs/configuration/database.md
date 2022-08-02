---
title: Shopizer database configuration
---

# Database configuration

Shopizer has been tested and supports H2, MySQL (recommended), MariaDB and Postgresql databases. Shopizer comes pre-configured with H2 database. H2 is an embedded database (http://www.h2database.com) configured by default to save data on files.

This pre-configuration should only be used for testing and never be used in a production environment.

### Configure Shopizer with H2 database ###
By default H2 files are saved into your application server runtime directory. 
To change the location where the files have to be saved,
edit sm-shop/src/main/resources/database.properties and edit the line
```sh
db.jdbcUrl=jdbc\:h2\:file\:c:/SALESMANAGER;AUTOCOMMIT\=OFF;INIT\=CREATE SCHEMA IF NOT EXISTS SALESMANAGER
```

Make sure the file path is a valid existing directory. In this case the configuration file will be saved in c:\

### Configure Shopizer with MySQL ###

Log to your MySQL as root and create schema SALESMANAGER

```sh
mysql>CREATE DATABASE SALESMANAGER;
mysql>GRANT USAGE, SELECT ON *.* TO <YOUR USERNAME>@localhost IDENTIFIED BY '<YOUR PASSWORD>' with grant option;
mysql>GRANT ALL ON SALESMANAGER.* TO <YOUR USERNAME>@localhost;
mysql>GRANT FILE ON *.* TO <YOUR USERNAME>@localhost;
mysql>FLUSH PRIVILEGES;
```

**Example**

```sh
mysql>CREATE DATABASE SALESMANAGER;
mysql>GRANT USAGE, SELECT ON *.* TO testuser@localhost IDENTIFIED BY 'password' with grant option;
mysql>GRANT ALL ON SALESMANAGER.* TO testuser@localhost;
mysql>FLUSH PRIVILEGES;
```

**Create user that can connect from everywhere**

```sh
mysql>CREATE USER 'mysuer'@'%' IDENTIFIED BY 'mypassword';
mysql>GRANT USAGE, SELECT ON MYDB.* TO 'mysuer'@'%' with grant option;
mysql>GRANT ALL ON MYDB.* TO 'mysuer'@'%';
mysql>FLUSH PRIVILEGES;
```

Edit **sm-shop/src/main/resources/database.properties**

```sh
db.jdbcUrl=jdbc:mysql://localhost:3306/SALESMANAGER?autoReconnect=true&useUnicode=true&characterEncoding=UTF-8
db.user=YOUR USERNAME
db.password=YOUR PASSWORD
db.driverClass=com.mysql.jdbc.Driver
hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
db.preferredTestQuery=SELECT 1

db.schema=SALESMANAGER
hibernate.hbm2ddl.auto=update
```

**Note:** Database and table names are not case sensitive in Windows, and case sensitive in most varieties of Unix-Linux. Consequently MySQL which uses lower case schema and table names will not be able to see the schema and tables which are created upper case in Shopizer. If you get an exception of a table not being found and being displayed in lower case in the error message, you will have to specify this property in My.cnf. To resolve the issue set the lower_case_table_names to 1 in **My.cnf** configuration file.

Edit **My.cnf**

```sh
lower_case_table_names=1
```

### Configure Shopizer with Postgresql ###

Create a new postgresql

```sh
CREATE DATABASE SHOPIZER;
```

Create schema

```sh
CREATE SCHEMA salesmanager;
```

Edit **sm-shop/src/main/resources/database.properties**

```sh
#POSTGRES
db.jdbcUrl=jdbc:postgresql://localhost:5432/SHOPIZER
db.user=postgres
db.password=password
db.driverClass=org.postgresql.Driver
hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
db.preferredTestQuery=SELECT 1

db.schema=SALESMANAGER
hibernate.hbm2ddl.auto=update
```

Edit **shopizer/pom.xml**

Un-comment both postgresql dependency
```sh
		<!--  postgres 
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
		</dependency>
		-->
```