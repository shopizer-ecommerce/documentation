This simple infrastructure allows running Shopizer on a simple AWS LightSail virtual maching. An Ubuntu based LightSail virtual machine will be configured with NGINX proxy server and Shopizer Admin Angular application with Shopizer backend

> **$**
> **AWS LightSail** 
> Linux / Unix - OS Only
> Ubuntu 18.0.4 LTS
> 4GB - 2vCPU - 80TB

This configuration can be done on any the of virtual machine or on any on premise server. The reason for using AWS Lightsail is the simple way to configure working vm on specific regions with tools handy for specific firewall configuration and backup facility. All of this could also be created using simple EC2 instances on AWS.

**###DOCUMENTATION TO BE COMPLETED SOON**


![AWS LightSail VM diagram](/images/documentation/Shopizer-TLS.png "Shopizer running on simple AWS LightSail VM")

## Requirements
- AWS Account
- Have Shopizer configurations handy

## Installation instructions

The following section describes complete installation steps

### Lightsail

  - In AWS Console
    - Create new LightSail instance
    - Select blueprint OS Only
      - select Ubuntu server from the list, last version available is preferable
      - click on 'Add launch script' and copy following script in the box in the text box

```sh
#!/bin/bash

# install latest version of docker the lazy way
curl -sSL https://get.docker.com | sh

# make it so you don't need to sudo to run docker commands
usermod -aG docker ubuntu

# install docker-compose
curl -L https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# copy the dockerfile into /srv/docker 
# if you change this, change the systemd service file to match
# WorkingDirectory=[whatever you have below]
mkdir /srv/docker
sudo curl -o /srv/docker/docker-compose.yml https://raw.githubusercontent.com/shopizer-ecommerce/shopizer-docker-compose/master/docker-compose-aws.yml


# copy in systemd unit file and register it so our compose file runs 
# on system restart
sudo curl -o /etc/systemd/system/docker-compose-app.service https://raw.githubusercontent.com/shopizer-ecommerce/shopizer-docker-compose/master/docker-compose-app.service

sudo chmod 755 /etc/systemd/system/docker-compose-app.service
sudo systemctl enable docker-compose-app
```

All commands above simplify docker and docker compose installation. They also pull pre configured docker-compose file ready to run Shopizer's latest version

  - In AWS Console
    - Complete LightSail configuration
      - select an instance plan for a 4GB server (requires running the server, nginx, mysql and elastic)
      - ssh key pair create new
      - give a name to keypair (ie my-shopizer-lightsail)
      - download key and save pem file to a secure location
      - if you are on a mac or linux change mode on downloaded key file ``` sh chmod 400 my-shopizer-lightsail.pem ```
      - create unique instance name (ie my-shopizer-docker-compose)
      - add key value tage Name = my-shopizer-docker-compose
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

#### Configure NGINX reverse proxy

Reverse proxy allows to proxy requests on port 80 and 443 to Shopizer running instance on port 8080

```sh
sudo unlink /etc/nginx/sites-enabled/default
cd /etc/nginx/sites-available
sudo nano reverse-proxy.conf
```

Copy those following lines in open for edit window (nano)

```sh
server {
        listen 80;
        listen [::]:80;
        server_name yourwebsite.ca;
        access_log /var/log/nginx/reverse-access.log;
        error_log /var/log/nginx/reverse-error.log;

        location / {
            proxy_pass http://localhost:8080;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
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

### For SSL = Install Certbot on your instance

### Open LightSail required ports

Lightsail
Open ports
80
9090
22


