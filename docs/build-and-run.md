# Build and run Shopizer

The purpose of this section is to provide new users with the basics of Shopizer e-commerce framework in order to get started in their projects. It will walk the reader through the steps of installing and configuring Shopizer as well as running demo application locally.

These instructions are for running legacy Shopizer with JSP frontends as well as Shopizer backend version with Angular admin and React shop front.

### Build Shopizer

![Java Backend](/images/documentation/java-small.jpg "Java API also known as Headless or Backend")

Build from the source files. Open a terminal or console
  
```sh
git clone git@github.com:shopizer-ecommerce/shopizer.git
cd shopizer
```

**Build using Maven**

```sh
mvnw clean install
```

This command should result in a success message. If you have any errors during this process and require assistance,feel free to use Shopizer forum. See [Shopizer forum](https://groups.google.com/forum/#!forum/shopizer) for asking or searching Shopizer build related questions.

**Start Shopizer**

```sh
cd sm-shop
mvnw spring-boot:run
```

Once the terminal or console displays that Shopizer is running and listening on service port and ready to be used.

Open a browser and type url **localhost:8080**

This will open Shopizer headless api. You can view all application interfaces available by opening **localhost:8080/swagger-ui.html**


### Build and run Shopizer Angular administration app

![Angular App](/images/angular-small.png "Angular shop")

Angular app consuming Shopizer administration services endpoints

```sh
git clone git@github.com:shopizer-ecommerce/shopizer-admin.git
cd shopizer-admin
```
**Build using npm**

```sh
npm i
```

**Start app**

```sh
ng serve -o
```

Open a browser on **localhost:4200**

Username: **admin@shopizer.com**

Password: **password**

**All software requirements for Node and Angular are specified in README.md file int the project root**

### Build Shopizer store React app

![React App](/images/documentation/react-small.png "React shop")

This is a showcase React app consuming Shopizer services endpoints

From a terminal or console
  
```sh
git clone git@github.com:shopizer-ecommerce/shopizer-shop-reactjs.git
cd shopizer-shop-reactjs
```

**Build using npm**

```sh
npm i
```

This command should result in a success message. If you have any errors during this process and require assistance,feel free to use Shopizer forum. See [Shopizer forum](https://groups.google.com/forum/#!forum/shopizer) for asking or searching Shopizer build related questions.

**Start app**

```sh
npm run dev
```

Once the terminal or console displays that Shopizer is running and listening on service port and ready to be used.

**All software requirements for Node js are specified in README.md file int the project root**