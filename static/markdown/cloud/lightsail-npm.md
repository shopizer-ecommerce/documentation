This simple infrastructure allows running Shopizer on a simple AWS LightSail virtual maching. An Ubuntu based LightSail virtual machine will be configured with NGINX proxy server with SSL configured with Let's encrypt / Certbot SSL cerificate and Docker Compose running Shopizer, MySQL and ElasticSearch containers.

> **$**
> **AWS LightSail** 
> Linux / Unix - OS Only
> Ubuntu 18.0.4 LTS
> 2GB - 1vCPU - 80TB


![NPM on AWS LightSail VM diagram](/documentation/static/img/documentation/Simple-NPM-NGINX.png "Simple npm instance on AWS")

## Requirements
- AWS Account
- A domain name with a registrar + access to DNS console

## Installation instructions

The following section describes complete installation steps

### Lightsail

  - In AWS Console
    - Create new LightSail instance
    - Select blueprint OS Only
      - select Ubuntu server from the list, last version available is preferable
    - Complete LightSail configuration
      - select an instance plan for a 2GB server (requires running Node and NGINX)
      - ssh key pair create new
      - give a name to keypair (ie my-node-lightsail)
      - download key and save pem file to a secure location
      - if you are on a mac or linux change mode on downloaded key file ``` sh chmod 400 my-node-lightsail.pem ```
      - create unique instance name (ie my-node-lightsail)
      - add key value tage Name = my-node-lightsail
      - click create instance


### Install NGINX

From AWS LightSail ssh console

```sh
sudo apt update
sudo apt install nginx
systemctl status nginx
```

Test NGINX installation

```sh
curl http://localhost
```

### Install Node.js

```sh
sudo apt install nodejs
sudo apt install npm
sudo npm cache clean -f
sudo n stable
sudo npm install -g npm@latest
```

#### Configure NGINX reverse proxy

Reverse proxy allows to proxy requests on port 80 and 443 to Shopizer running instance on port 8080

```sh
sudo unlink /etc/nginx/sites-enabled/default
cd /etc/nginx/sites-available
sudo nano reverse-proxy.conf
```

Copy those following lines in open for edit window (nano)

```sh
#website
server {
        listen 80;
        listen [::]:80;
        server_name www.shopizer.com;
        access_log /var/log/nginx/reverse-access.log;
        error_log /var/log/nginx/reverse-error.log;

        location / {
            proxy_pass http://localhost:4000;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
}
#api
server {
        listen 80;
        listen [::]:80;
        server_name api.shopizer.com;
        access_log /var/log/nginx/reverse-access.log;
        error_log /var/log/nginx/reverse-error.log;
        location / {
            proxy_pass http://localhost:8080;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            if ($request_method = 'OPTIONS') {
               add_header 'Access-Control-Allow-Origin' '*';
               add_header 'Access-Control-Allow-Methods' 'GET, POST,OPTIONS';
               add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
               add_header 'Access-Control-Max-Age' 1728000; 
               add_header 'Content-Type' 'text/plain; charset=utf-8'; 
               add_header 'Content-Length' 0; return 204;
             }
             if ($request_method = 'POST') {
               #add_header 'Access-Control-Allow-Origin' '*'; 
               add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS'; 
               add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range'; 
               add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
             }
             if ($request_method = 'GET') {
               #add_header 'Access-Control-Allow-Origin' '*'; 
               add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS'; 
               add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range'; 
               add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
              }
        }
}
```

Change server_name to your target domain name

Exit from nano and save (Ctrl X)

Copy the configuration from /etc/nginx/sites-available to /etc/nginx/sites-enabled. It is recommended to use a symbolic link.

```sh
sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf
```

validate NGINX configuration

```sh
sudo nginx -t
```

Previous command should not display any error

restart NGINX

```sh
sudo systemctl restart nginx
```

### Install Certbot on your instance

Certbot installation commands from apt package manager. **This is only possible** if selected LightSail OS is Ubuntu.

```sh
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
```

Install certificate

```sh
sudo certbot --nginx
```

### Install AWS CLI

For getting project updates from S3 bucket

```sh
sudo apt install awscli 
```

### Configure AWS CLI

Configure aws cli with secret key and secret access key

```sh
aws configure
```

```sh
aws s3 cp s3://shopizer-website/dist.tar.gz ./website
tar -xf dist.tar.gz
sudo npm install pm2 -g
NOPE nohup npm run serve:ssr &
nohup npm run serve:ssr 2>&1 >> ./ng.log &

pm2 start local.js
```

Now run Certbot SSL configuration for NGINX. Make sure your domain points to AWS LightSail IP address before running next command. From your registrar configure DNS for a new A record or AAA record and point to your AWS instance IP address.


### Open LightSail required ports

Lightsail
Open ports
80
443
22


