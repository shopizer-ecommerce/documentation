import{_ as e}from"./Shopizer-TLS.b0ecac2a.js";import{_ as o,c as n,o as i,d as s}from"./app.bc8efb32.js";const y='{"title":"Requirements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Installation instructions","slug":"installation-instructions"},{"level":3,"title":"Lightsail","slug":"lightsail"},{"level":3,"title":"Install NGINX","slug":"install-nginx"},{"level":3,"title":"For SSL = Install Certbot on your instance","slug":"for-ssl-install-certbot-on-your-instance"},{"level":3,"title":"Open LightSail required ports","slug":"open-lightsail-required-ports"}],"relativePath":"cloud/lightsail-simple.md","lastUpdated":1641577787249}',r={},t=s('<p>This simple infrastructure allows running Shopizer on a simple AWS LightSail virtual maching. An Ubuntu based LightSail virtual machine will be configured with NGINX proxy server with SSL configured with Let&#39;s encrypt / Certbot SSL cerificate and Docker Compose running Shopizer, MySQL and ElasticSearch containers.</p><blockquote><p><strong>$</strong><strong>AWS LightSail</strong> Linux / Unix - OS Only Ubuntu 18.0.4 LTS 4GB - 2vCPU - 80GB</p></blockquote><p><img src="'+e+`" alt="AWS LightSail VM diagram" title="Shopizer running on simple AWS LightSail VM"></p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h2><ul><li>AWS Account</li><li>A domain name with a registrar + access to DNS console</li><li>Have Shopizer configurations handy</li></ul><h2 id="installation-instructions" tabindex="-1">Installation instructions <a class="header-anchor" href="#installation-instructions" aria-hidden="true">#</a></h2><p>The following section describes complete installation steps</p><h3 id="lightsail" tabindex="-1">Lightsail <a class="header-anchor" href="#lightsail" aria-hidden="true">#</a></h3><ul><li>In AWS Console <ul><li>Create new LightSail instance</li><li>Select blueprint OS Only <ul><li>select Ubuntu server from the list, last version available is preferable</li><li>click on &#39;Add launch script&#39; and copy following script in the box in the text box</li></ul></li></ul></li></ul><div class="language-sh"><pre><code>#!/bin/bash

# install latest version of docker the lazy way
curl -sSL https://get.docker.com | sh

# make it so you don&#39;t need to sudo to run docker commands
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
</code></pre></div><p>All commands above simplify docker and docker compose installation. They also pull pre configured docker-compose file ready to run Shopizer&#39;s latest version</p><ul><li>In AWS Console <ul><li>Complete LightSail configuration <ul><li>select an instance plan for a 4GB server (requires running the server, nginx, mysql and elastic)</li><li>ssh key pair create new</li><li>give a name to keypair (ie my-shopizer-lightsail)</li><li>download key and save pem file to a secure location</li><li>if you are on a mac or linux change mode on downloaded key file <code>sh chmod 400 my-shopizer-lightsail.pem</code></li><li>create unique instance name (ie my-shopizer-docker-compose)</li><li>add key value tage Name = my-shopizer-docker-compose</li><li>click create instance</li></ul></li></ul></li></ul><h3 id="install-nginx" tabindex="-1">Install NGINX <a class="header-anchor" href="#install-nginx" aria-hidden="true">#</a></h3><p>From AWS LightSail ssh console</p><div class="language-sh"><pre><code>sudo apt update
sudo apt install nginx
systemctl status nginx
</code></pre></div><p>Test NGINX installation</p><div class="language-sh"><pre><code>curl http://localhost
</code></pre></div><h4 id="configure-nginx-reverse-proxy" tabindex="-1">Configure NGINX reverse proxy <a class="header-anchor" href="#configure-nginx-reverse-proxy" aria-hidden="true">#</a></h4><p>Reverse proxy allows to proxy requests on port 80 and 443 to Shopizer running instance on port 8080</p><div class="language-sh"><pre><code>sudo unlink /etc/nginx/sites-enabled/default
cd /etc/nginx/sites-available
sudo nano reverse-proxy.conf
</code></pre></div><p>Copy those following lines in open for edit window (nano)</p><div class="language-sh"><pre><code>server {
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
</code></pre></div><p>Change server_name to your target domain name</p><p>Exit from nano and save (Ctrl X)</p><p>Copy the configuration from /etc/nginx/sites-available to /etc/nginx/sites-enabled. It is recommended to use a symbolic link.</p><div class="language-sh"><pre><code>sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf
</code></pre></div><p>validate NGINX configuration</p><div class="language-sh"><pre><code>sudo nginx -t
</code></pre></div><p>Previous command should not display any error</p><p>restart NGINX</p><div class="language-sh"><pre><code>sudo systemctl restart nginx
</code></pre></div><h3 id="for-ssl-install-certbot-on-your-instance" tabindex="-1">For SSL = Install Certbot on your instance <a class="header-anchor" href="#for-ssl-install-certbot-on-your-instance" aria-hidden="true">#</a></h3><p>Certbot installation commands from apt package manager. <strong>This is only possible</strong> if selected LightSail OS is Ubuntu.</p><div class="language-sh"><pre><code>sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-get install certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
</code></pre></div><p>Now run Certbot SSL configuration for NGINX. Make sure your domain points to AWS LightSail IP address before running next command. From your registrar configure DNS for a new A record or AAA record and point to your AWS instance IP address.</p><div class="language-sh"><pre><code>sudo certbot --nginx
</code></pre></div><h3 id="open-lightsail-required-ports" tabindex="-1">Open LightSail required ports <a class="header-anchor" href="#open-lightsail-required-ports" aria-hidden="true">#</a></h3><p>Lightsail Open ports 80 443 22</p>`,38),a=[t];function l(c,d,p,u,h,g){return i(),n("div",null,a)}var f=o(r,[["render",l]]);export{y as __pageData,f as default};
