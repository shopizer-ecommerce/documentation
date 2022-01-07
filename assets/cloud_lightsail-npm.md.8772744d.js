import{_ as e,c as n,o as a,d as s}from"./app.bc8efb32.js";var t="/assets/Simple-NPM-NGINX.19e49e86.png";const v='{"title":"Requirements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Installation instructions","slug":"installation-instructions"},{"level":3,"title":"Lightsail","slug":"lightsail"},{"level":3,"title":"Install NGINX","slug":"install-nginx"},{"level":3,"title":"Install Node.js","slug":"install-node-js"},{"level":3,"title":"For SSL - Install Certbot on your instance","slug":"for-ssl-install-certbot-on-your-instance"},{"level":3,"title":"Install AWS CLI","slug":"install-aws-cli"},{"level":3,"title":"Configure AWS CLI","slug":"configure-aws-cli"},{"level":3,"title":"Open LightSail required ports","slug":"open-lightsail-required-ports"}],"relativePath":"cloud/lightsail-npm.md","lastUpdated":1641577787247}',r={},i=s('<p>This simple infrastructure allows running Shopizer on a simple AWS LightSail virtual maching. An Ubuntu based LightSail virtual machine will be configured with NGINX proxy server with SSL configured with Let&#39;s encrypt / Certbot SSL cerificate and Docker Compose running Shopizer, MySQL and ElasticSearch containers.</p><blockquote><p><strong>$</strong><strong>AWS LightSail</strong> Linux / Unix - OS Only Ubuntu 18.0.4 LTS 2GB - 1vCPU - 80GB</p></blockquote><p><img src="'+t+`" alt="NPM on AWS LightSail VM diagram" title="Simple npm instance on AWS"></p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h2><ul><li>AWS Account</li><li>A domain name with a registrar + access to DNS console</li></ul><h2 id="installation-instructions" tabindex="-1">Installation instructions <a class="header-anchor" href="#installation-instructions" aria-hidden="true">#</a></h2><p>The following section describes complete installation steps</p><h3 id="lightsail" tabindex="-1">Lightsail <a class="header-anchor" href="#lightsail" aria-hidden="true">#</a></h3><ul><li>In AWS Console <ul><li>Create new LightSail instance</li><li>Select blueprint OS Only <ul><li>select Ubuntu server from the list, last version available is preferable</li></ul></li><li>Complete LightSail configuration <ul><li>select an instance plan for a 2GB server (requires running Node and NGINX)</li><li>ssh key pair create new</li><li>give a name to keypair (ie my-node-lightsail)</li><li>download key and save pem file to a secure location</li><li>if you are on a mac or linux change mode on downloaded key file <code>sh chmod 400 my-node-lightsail.pem</code></li><li>create unique instance name (ie my-node-lightsail)</li><li>add key value tage Name = my-node-lightsail</li><li>click create instance</li></ul></li></ul></li></ul><h3 id="install-nginx" tabindex="-1">Install NGINX <a class="header-anchor" href="#install-nginx" aria-hidden="true">#</a></h3><p>From AWS LightSail ssh console</p><div class="language-sh"><pre><code>sudo apt update
sudo apt install nginx
systemctl status nginx
</code></pre></div><p>Test NGINX installation</p><div class="language-sh"><pre><code>curl http://localhost
</code></pre></div><h3 id="install-node-js" tabindex="-1">Install Node.js <a class="header-anchor" href="#install-node-js" aria-hidden="true">#</a></h3><div class="language-sh"><pre><code>sudo apt install nodejs
sudo apt install npm
sudo npm cache clean -f
sudo n stable
sudo npm install -g npm@latest
</code></pre></div><h4 id="configure-nginx-reverse-proxy" tabindex="-1">Configure NGINX reverse proxy <a class="header-anchor" href="#configure-nginx-reverse-proxy" aria-hidden="true">#</a></h4><p>Reverse proxy allows to proxy requests on port 80 and 443 to Shopizer running instance on port 8080</p><div class="language-sh"><pre><code>sudo unlink /etc/nginx/sites-enabled/default
cd /etc/nginx/sites-available
sudo nano reverse-proxy.conf
</code></pre></div><p>Copy those following lines in open for edit window (nano)</p><div class="language-sh"><pre><code>#website
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

server {
    listen 80;
    server_name ip_address;
    return 301 $scheme://www.shopizer.com$request_uri;
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
            if ($request_method = &#39;OPTIONS&#39;) {
               add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;
               add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST,OPTIONS&#39;;
               add_header &#39;Access-Control-Allow-Headers&#39; &#39;DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range&#39;;
               add_header &#39;Access-Control-Max-Age&#39; 1728000; 
               add_header &#39;Content-Type&#39; &#39;text/plain; charset=utf-8&#39;; 
               add_header &#39;Content-Length&#39; 0; return 204;
             }
             if ($request_method = &#39;POST&#39;) {
               add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;; 
               add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39;; 
               add_header &#39;Access-Control-Allow-Headers&#39; &#39;DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range&#39;; 
               add_header &#39;Access-Control-Expose-Headers&#39; &#39;Content-Length,Content-Range&#39;;
             }
             if ($request_method = &#39;GET&#39;) {
               add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;; 
               add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39;; 
               add_header &#39;Access-Control-Allow-Headers&#39; &#39;DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range&#39;; 
               add_header &#39;Access-Control-Expose-Headers&#39; &#39;Content-Length,Content-Range&#39;;
              }
        }
}
</code></pre></div><p>Change server_name to your target domain name</p><p>Exit from nano and save (Ctrl X)</p><p>Copy the configuration from /etc/nginx/sites-available to /etc/nginx/sites-enabled. It is recommended to use a symbolic link.</p><div class="language-sh"><pre><code>sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf
</code></pre></div><p>validate NGINX configuration</p><div class="language-sh"><pre><code>sudo nginx -t
</code></pre></div><p>Previous command should not display any error</p><p>restart NGINX</p><div class="language-sh"><pre><code>sudo systemctl restart nginx
</code></pre></div><h3 id="for-ssl-install-certbot-on-your-instance" tabindex="-1">For SSL - Install Certbot on your instance <a class="header-anchor" href="#for-ssl-install-certbot-on-your-instance" aria-hidden="true">#</a></h3><p>Certbot installation commands from apt package manager. <strong>This is only possible</strong> if selected LightSail OS is Ubuntu.</p><div class="language-sh"><pre><code>sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
</code></pre></div><p>Install certificate</p><div class="language-sh"><pre><code>sudo certbot --nginx
</code></pre></div><h3 id="install-aws-cli" tabindex="-1">Install AWS CLI <a class="header-anchor" href="#install-aws-cli" aria-hidden="true">#</a></h3><p>For getting project updates from S3 bucket</p><div class="language-sh"><pre><code>sudo apt install awscli 
</code></pre></div><h3 id="configure-aws-cli" tabindex="-1">Configure AWS CLI <a class="header-anchor" href="#configure-aws-cli" aria-hidden="true">#</a></h3><p>Configure aws cli with secret key and secret access key</p><div class="language-sh"><pre><code>aws configure
</code></pre></div><p>Install software</p><div class="language-sh"><pre><code>sudo npm install pm2 -g
</code></pre></div><p>Start process</p><div class="language-sh"><pre><code>aws s3 cp s3://shopizer-website/dist.tar.gz ./website
cd ~/website
tar -xf dist.tar.gz
cd code
pm2 start local.js
</code></pre></div><p>Stop process</p><div class="language-sh"><pre><code>cd /home/ubuntu/website/code
pm2 stop local.js
cd ~
rm -rf * /home/ubuntu/website/*
</code></pre></div><p>Now run Certbot SSL configuration for NGINX. Make sure your domain points to AWS LightSail IP address before running next command. From your registrar configure DNS for a new A record or AAA record and point to your AWS instance IP address.</p><h3 id="open-lightsail-required-ports" tabindex="-1">Open LightSail required ports <a class="header-anchor" href="#open-lightsail-required-ports" aria-hidden="true">#</a></h3><p>Lightsail Open ports 80 443 22</p>`,50),o=[i];function l(d,c,p,h,u,g){return a(),n("div",null,o)}var f=e(r,[["render",l]]);export{v as __pageData,f as default};
