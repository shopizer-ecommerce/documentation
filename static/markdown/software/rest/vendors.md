This section explains possible possible configurations for MerchantStore in order to use the app as a single store application, multiple store application (marketplace) or retailer - store application.

![Merchant stores diagram](/documentation/static/img/documentation/rest/merchants-Single-Multiple.jpg "Single and multiple merchants")

Single store

Simple stores are unique stores managing their own products and inventory. This type of store is configured by default in Shopizer and is created with unique store code DEFAULT. Front end can be served by default jsp shop or Angular and ReactJS examples

Multiple stores

Multiple independent stores can be managed in Shopizer. Each store has its own configuration and each store manages their own inventory, products, category and content. Each store requires their own shop that can be run on independent processes. Default jsp, Angular and React store fronts can be used as different processes to run each store.
