import{_ as o}from"./Shopizer-TLS.b0ecac2a.js";import{_ as s,c as t,o as l,a as e,b as n}from"./app.e4fe013f.js";const ne='{"title":"Requirements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Installation instructions","slug":"installation-instructions"},{"level":3,"title":"Lightsail","slug":"lightsail"},{"level":3,"title":"Install NGINX","slug":"install-nginx"},{"level":3,"title":"For SSL = Install Certbot on your instance","slug":"for-ssl-install-certbot-on-your-instance"},{"level":3,"title":"Open LightSail required ports","slug":"open-lightsail-required-ports"}],"relativePath":"cloud/lightsail-simple.md","lastUpdated":1638461818371}',i={},r=e("p",null,"This simple infrastructure allows running Shopizer on a simple AWS LightSail virtual maching. An Ubuntu based LightSail virtual machine will be configured with NGINX proxy server with SSL configured with Let's encrypt / Certbot SSL cerificate and Docker Compose running Shopizer, MySQL and ElasticSearch containers.",-1),a=e("blockquote",null,[e("p",null,[e("strong",null,"$"),e("strong",null,"AWS LightSail"),n(" Linux / Unix - OS Only Ubuntu 18.0.4 LTS 4GB - 2vCPU - 80GB")])],-1),c=e("p",null,[e("img",{src:o,alt:"AWS LightSail VM diagram",title:"Shopizer running on simple AWS LightSail VM"})],-1),d=e("h2",{id:"requirements",tabindex:"-1"},[n("Requirements "),e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#")],-1),u=e("ul",null,[e("li",null,"AWS Account"),e("li",null,"A domain name with a registrar + access to DNS console"),e("li",null,"Have Shopizer configurations handy")],-1),h=e("h2",{id:"installation-instructions",tabindex:"-1"},[n("Installation instructions "),e("a",{class:"header-anchor",href:"#installation-instructions","aria-hidden":"true"},"#")],-1),p=e("p",null,"The following section describes complete installation steps",-1),g=e("h3",{id:"lightsail",tabindex:"-1"},[n("Lightsail "),e("a",{class:"header-anchor",href:"#lightsail","aria-hidden":"true"},"#")],-1),m=e("ul",null,[e("li",null,[n("In AWS Console "),e("ul",null,[e("li",null,"Create new LightSail instance"),e("li",null,[n("Select blueprint OS Only "),e("ul",null,[e("li",null,"select Ubuntu server from the list, last version available is preferable"),e("li",null,"click on 'Add launch script' and copy following script in the box in the text box")])])])])],-1),_=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`#!/bin/bash

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
`)])],-1),y=e("p",null,"All commands above simplify docker and docker compose installation. They also pull pre configured docker-compose file ready to run Shopizer's latest version",-1),f=e("ul",null,[e("li",null,[n("In AWS Console "),e("ul",null,[e("li",null,[n("Complete LightSail configuration "),e("ul",null,[e("li",null,"select an instance plan for a 4GB server (requires running the server, nginx, mysql and elastic)"),e("li",null,"ssh key pair create new"),e("li",null,"give a name to keypair (ie my-shopizer-lightsail)"),e("li",null,"download key and save pem file to a secure location"),e("li",null,[n("if you are on a mac or linux change mode on downloaded key file "),e("code",null,"sh chmod 400 my-shopizer-lightsail.pem")]),e("li",null,"create unique instance name (ie my-shopizer-docker-compose)"),e("li",null,"add key value tage Name = my-shopizer-docker-compose"),e("li",null,"click create instance")])])])])],-1),v=e("h3",{id:"install-nginx",tabindex:"-1"},[n("Install NGINX "),e("a",{class:"header-anchor",href:"#install-nginx","aria-hidden":"true"},"#")],-1),b=e("p",null,"From AWS LightSail ssh console",-1),x=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo apt update
sudo apt install nginx
systemctl status nginx
`)])],-1),S=e("p",null,"Test NGINX installation",-1),k=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`curl http://localhost
`)])],-1),w=e("h4",{id:"configure-nginx-reverse-proxy",tabindex:"-1"},[n("Configure NGINX reverse proxy "),e("a",{class:"header-anchor",href:"#configure-nginx-reverse-proxy","aria-hidden":"true"},"#")],-1),L=e("p",null,"Reverse proxy allows to proxy requests on port 80 and 443 to Shopizer running instance on port 8080",-1),N=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo unlink /etc/nginx/sites-enabled/default
cd /etc/nginx/sites-available
sudo nano reverse-proxy.conf
`)])],-1),A=e("p",null,"Copy those following lines in open for edit window (nano)",-1),I=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`server {
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

server {
    listen 80;
    server_name ip_address;
    return 301 $scheme://yourwebsite.ca$request_uri;
}
`)])],-1),q=e("p",null,"Change server_name to your target domain name",-1),z=e("p",null,"Exit from nano and save (Ctrl X)",-1),C=e("p",null,"Copy the configuration from /etc/nginx/sites-available to /etc/nginx/sites-enabled. It is recommended to use a symbolic link.",-1),G=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf
`)])],-1),W=e("p",null,"validate NGINX configuration",-1),X=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo nginx -t
`)])],-1),$=e("p",null,"Previous command should not display any error",-1),O=e("p",null,"restart NGINX",-1),T=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo systemctl restart nginx
`)])],-1),F=e("h3",{id:"for-ssl-install-certbot-on-your-instance",tabindex:"-1"},[n("For SSL = Install Certbot on your instance "),e("a",{class:"header-anchor",href:"#for-ssl-install-certbot-on-your-instance","aria-hidden":"true"},"#")],-1),U=e("p",null,[n("Certbot installation commands from apt package manager. "),e("strong",null,"This is only possible"),n(" if selected LightSail OS is Ubuntu.")],-1),B=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-get install certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
`)])],-1),P=e("p",null,"Now run Certbot SSL configuration for NGINX. Make sure your domain points to AWS LightSail IP address before running next command. From your registrar configure DNS for a new A record or AAA record and point to your AWS instance IP address.",-1),D=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo certbot --nginx
`)])],-1),M=e("h3",{id:"open-lightsail-required-ports",tabindex:"-1"},[n("Open LightSail required ports "),e("a",{class:"header-anchor",href:"#open-lightsail-required-ports","aria-hidden":"true"},"#")],-1),R=e("p",null,"Lightsail Open ports 80 443 22",-1),V=[r,a,c,d,u,h,p,g,m,_,y,f,v,b,x,S,k,w,L,N,A,I,q,z,C,G,W,X,$,O,T,F,U,B,P,D,M,R];function E(j,H,Q,J,K,Y){return l(),t("div",null,V)}var oe=s(i,[["render",E]]);export{ne as __pageData,oe as default};
