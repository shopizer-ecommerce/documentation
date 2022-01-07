import{_ as o}from"./Shopizer-TLS.b0ecac2a.js";import{_ as s,c as l,o as t,a as e,b as n}from"./app.e4fe013f.js";const Z='{"title":"Requirements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Installation instructions","slug":"installation-instructions"},{"level":3,"title":"Lightsail","slug":"lightsail"},{"level":3,"title":"Install NGINX","slug":"install-nginx"},{"level":3,"title":"For SSL = Install Certbot on your instance","slug":"for-ssl-install-certbot-on-your-instance"},{"level":3,"title":"Open LightSail required ports","slug":"open-lightsail-required-ports"}],"relativePath":"cloud/lightsail-admin-backend.md","lastUpdated":1638461818367}',i={},r=e("p",null,"This simple infrastructure allows running Shopizer on a simple AWS LightSail virtual maching. An Ubuntu based LightSail virtual machine will be configured with NGINX proxy server and Shopizer Admin Angular application with Shopizer backend",-1),a=e("blockquote",null,[e("p",null,[e("strong",null,"$"),e("strong",null,"AWS LightSail"),n(" Linux / Unix - OS Only Ubuntu 18.0.4 LTS 4GB - 2vCPU - 80TB")])],-1),c=e("p",null,"This configuration can be done on any the of virtual machine or on any on premise server. The reason for using AWS Lightsail is the simple way to configure working vm on specific regions with tools handy for specific firewall configuration and backup facility. All of this could also be created using simple EC2 instances on AWS.",-1),d=e("p",null,[e("strong",null,"###DOCUMENTATION TO BE COMPLETED SOON")],-1),u=e("p",null,[e("img",{src:o,alt:"AWS LightSail VM diagram",title:"Shopizer running on simple AWS LightSail VM"})],-1),h=e("h2",{id:"requirements",tabindex:"-1"},[n("Requirements "),e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#")],-1),p=e("ul",null,[e("li",null,"AWS Account"),e("li",null,"Have Shopizer configurations handy")],-1),g=e("h2",{id:"installation-instructions",tabindex:"-1"},[n("Installation instructions "),e("a",{class:"header-anchor",href:"#installation-instructions","aria-hidden":"true"},"#")],-1),m=e("p",null,"The following section describes complete installation steps",-1),_=e("h3",{id:"lightsail",tabindex:"-1"},[n("Lightsail "),e("a",{class:"header-anchor",href:"#lightsail","aria-hidden":"true"},"#")],-1),y=e("ul",null,[e("li",null,[n("In AWS Console "),e("ul",null,[e("li",null,"Create new LightSail instance"),e("li",null,[n("Select blueprint OS Only "),e("ul",null,[e("li",null,"select Ubuntu server from the list, last version available is preferable"),e("li",null,"click on 'Add launch script' and copy following script in the box in the text box")])])])])],-1),f=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`#!/bin/bash

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
`)])],-1),v=e("p",null,"All commands above simplify docker and docker compose installation. They also pull pre configured docker-compose file ready to run Shopizer's latest version",-1),x=e("ul",null,[e("li",null,[n("In AWS Console "),e("ul",null,[e("li",null,[n("Complete LightSail configuration "),e("ul",null,[e("li",null,"select an instance plan for a 4GB server (requires running the server, nginx, mysql and elastic)"),e("li",null,"ssh key pair create new"),e("li",null,"give a name to keypair (ie my-shopizer-lightsail)"),e("li",null,"download key and save pem file to a secure location"),e("li",null,[n("if you are on a mac or linux change mode on downloaded key file "),e("code",null,"sh chmod 400 my-shopizer-lightsail.pem")]),e("li",null,"create unique instance name (ie my-shopizer-docker-compose)"),e("li",null,"add key value tage Name = my-shopizer-docker-compose"),e("li",null,"click create instance")])])])])],-1),b=e("h3",{id:"install-nginx",tabindex:"-1"},[n("Install NGINX "),e("a",{class:"header-anchor",href:"#install-nginx","aria-hidden":"true"},"#")],-1),k=e("p",null,"From AWS LightSail ssh console",-1),S=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo apt update
sudo apt install nginx
systemctl status nginx
`)])],-1),w=e("p",null,"Test NGINX installation",-1),L=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`curl http://localhost
`)])],-1),N=e("h4",{id:"configure-nginx-reverse-proxy",tabindex:"-1"},[n("Configure NGINX reverse proxy "),e("a",{class:"header-anchor",href:"#configure-nginx-reverse-proxy","aria-hidden":"true"},"#")],-1),A=e("p",null,"Reverse proxy allows to proxy requests on port 80 and 443 to Shopizer running instance on port 8080",-1),z=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo unlink /etc/nginx/sites-enabled/default
cd /etc/nginx/sites-available
sudo nano reverse-proxy.conf
`)])],-1),I=e("p",null,"Copy those following lines in open for edit window (nano)",-1),q=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`server {
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

`)])],-1),C=e("p",null,"Change server_name to your target domain name",-1),T=e("p",null,"Exit from nano and save (Ctrl X)",-1),O=e("p",null,"Copy the configuration from /etc/nginx/sites-available to /etc/nginx/sites-enabled. It is recommended to use a symbolic link.",-1),W=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf
`)])],-1),G=e("p",null,"validate NGINX configuration",-1),X=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo nginx -t
`)])],-1),$=e("p",null,"Previous command should not display any error",-1),B=e("p",null,"restart NGINX",-1),E=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo systemctl restart nginx
`)])],-1),U=e("h3",{id:"for-ssl-install-certbot-on-your-instance",tabindex:"-1"},[n("For SSL = Install Certbot on your instance "),e("a",{class:"header-anchor",href:"#for-ssl-install-certbot-on-your-instance","aria-hidden":"true"},"#")],-1),F=e("h3",{id:"open-lightsail-required-ports",tabindex:"-1"},[n("Open LightSail required ports "),e("a",{class:"header-anchor",href:"#open-lightsail-required-ports","aria-hidden":"true"},"#")],-1),P=e("p",null,"Lightsail Open ports 80 9090 22",-1),D=[r,a,c,d,u,h,p,g,m,_,y,f,v,x,b,k,S,w,L,N,A,z,I,q,C,T,O,W,G,X,$,B,E,U,F,P];function M(R,V,j,H,J,K){return t(),l("div",null,D)}var ee=s(i,[["render",M]]);export{Z as __pageData,ee as default};
