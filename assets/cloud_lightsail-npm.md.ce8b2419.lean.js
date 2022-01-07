import{_ as s,c as t,o as l,a as e,b as n}from"./app.e4fe013f.js";var o="/assets/Simple-NPM-NGINX.19e49e86.png";const he='{"title":"Requirements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Installation instructions","slug":"installation-instructions"},{"level":3,"title":"Lightsail","slug":"lightsail"},{"level":3,"title":"Install NGINX","slug":"install-nginx"},{"level":3,"title":"Install Node.js","slug":"install-node-js"},{"level":3,"title":"For SSL - Install Certbot on your instance","slug":"for-ssl-install-certbot-on-your-instance"},{"level":3,"title":"Install AWS CLI","slug":"install-aws-cli"},{"level":3,"title":"Configure AWS CLI","slug":"configure-aws-cli"},{"level":3,"title":"Open LightSail required ports","slug":"open-lightsail-required-ports"}],"relativePath":"cloud/lightsail-npm.md","lastUpdated":1638461818367}',a={},i=e("p",null,"This simple infrastructure allows running Shopizer on a simple AWS LightSail virtual maching. An Ubuntu based LightSail virtual machine will be configured with NGINX proxy server with SSL configured with Let's encrypt / Certbot SSL cerificate and Docker Compose running Shopizer, MySQL and ElasticSearch containers.",-1),r=e("blockquote",null,[e("p",null,[e("strong",null,"$"),e("strong",null,"AWS LightSail"),n(" Linux / Unix - OS Only Ubuntu 18.0.4 LTS 2GB - 1vCPU - 80GB")])],-1),d=e("p",null,[e("img",{src:o,alt:"NPM on AWS LightSail VM diagram",title:"Simple npm instance on AWS"})],-1),c=e("h2",{id:"requirements",tabindex:"-1"},[n("Requirements "),e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#")],-1),u=e("ul",null,[e("li",null,"AWS Account"),e("li",null,"A domain name with a registrar + access to DNS console")],-1),h=e("h2",{id:"installation-instructions",tabindex:"-1"},[n("Installation instructions "),e("a",{class:"header-anchor",href:"#installation-instructions","aria-hidden":"true"},"#")],-1),p=e("p",null,"The following section describes complete installation steps",-1),g=e("h3",{id:"lightsail",tabindex:"-1"},[n("Lightsail "),e("a",{class:"header-anchor",href:"#lightsail","aria-hidden":"true"},"#")],-1),_=e("ul",null,[e("li",null,[n("In AWS Console "),e("ul",null,[e("li",null,"Create new LightSail instance"),e("li",null,[n("Select blueprint OS Only "),e("ul",null,[e("li",null,"select Ubuntu server from the list, last version available is preferable")])]),e("li",null,[n("Complete LightSail configuration "),e("ul",null,[e("li",null,"select an instance plan for a 2GB server (requires running Node and NGINX)"),e("li",null,"ssh key pair create new"),e("li",null,"give a name to keypair (ie my-node-lightsail)"),e("li",null,"download key and save pem file to a secure location"),e("li",null,[n("if you are on a mac or linux change mode on downloaded key file "),e("code",null,"sh chmod 400 my-node-lightsail.pem")]),e("li",null,"create unique instance name (ie my-node-lightsail)"),e("li",null,"add key value tage Name = my-node-lightsail"),e("li",null,"click create instance")])])])])],-1),m=e("h3",{id:"install-nginx",tabindex:"-1"},[n("Install NGINX "),e("a",{class:"header-anchor",href:"#install-nginx","aria-hidden":"true"},"#")],-1),f=e("p",null,"From AWS LightSail ssh console",-1),v=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo apt update
sudo apt install nginx
systemctl status nginx
`)])],-1),x=e("p",null,"Test NGINX installation",-1),S=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`curl http://localhost
`)])],-1),w=e("h3",{id:"install-node-js",tabindex:"-1"},[n("Install Node.js "),e("a",{class:"header-anchor",href:"#install-node-js","aria-hidden":"true"},"#")],-1),y=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo apt install nodejs
sudo apt install npm
sudo npm cache clean -f
sudo n stable
sudo npm install -g npm@latest
`)])],-1),b=e("h4",{id:"configure-nginx-reverse-proxy",tabindex:"-1"},[n("Configure NGINX reverse proxy "),e("a",{class:"header-anchor",href:"#configure-nginx-reverse-proxy","aria-hidden":"true"},"#")],-1),C=e("p",null,"Reverse proxy allows to proxy requests on port 80 and 443 to Shopizer running instance on port 8080",-1),A=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo unlink /etc/nginx/sites-enabled/default
cd /etc/nginx/sites-available
sudo nano reverse-proxy.conf
`)])],-1),N=e("p",null,"Copy those following lines in open for edit window (nano)",-1),I=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`#website
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
            if ($request_method = 'OPTIONS') {
               add_header 'Access-Control-Allow-Origin' '*';
               add_header 'Access-Control-Allow-Methods' 'GET, POST,OPTIONS';
               add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
               add_header 'Access-Control-Max-Age' 1728000; 
               add_header 'Content-Type' 'text/plain; charset=utf-8'; 
               add_header 'Content-Length' 0; return 204;
             }
             if ($request_method = 'POST') {
               add_header 'Access-Control-Allow-Origin' '*'; 
               add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS'; 
               add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range'; 
               add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
             }
             if ($request_method = 'GET') {
               add_header 'Access-Control-Allow-Origin' '*'; 
               add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS'; 
               add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range'; 
               add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
              }
        }
}
`)])],-1),L=e("p",null,"Change server_name to your target domain name",-1),T=e("p",null,"Exit from nano and save (Ctrl X)",-1),O=e("p",null,"Copy the configuration from /etc/nginx/sites-available to /etc/nginx/sites-enabled. It is recommended to use a symbolic link.",-1),q=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf
`)])],-1),X=e("p",null,"validate NGINX configuration",-1),k=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo nginx -t
`)])],-1),G=e("p",null,"Previous command should not display any error",-1),P=e("p",null,"restart NGINX",-1),W=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo systemctl restart nginx
`)])],-1),$=e("h3",{id:"for-ssl-install-certbot-on-your-instance",tabindex:"-1"},[n("For SSL - Install Certbot on your instance "),e("a",{class:"header-anchor",href:"#for-ssl-install-certbot-on-your-instance","aria-hidden":"true"},"#")],-1),M=e("p",null,[n("Certbot installation commands from apt package manager. "),e("strong",null,"This is only possible"),n(" if selected LightSail OS is Ubuntu.")],-1),R=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
`)])],-1),F=e("p",null,"Install certificate",-1),j=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo certbot --nginx
`)])],-1),U=e("h3",{id:"install-aws-cli",tabindex:"-1"},[n("Install AWS CLI "),e("a",{class:"header-anchor",href:"#install-aws-cli","aria-hidden":"true"},"#")],-1),z=e("p",null,"For getting project updates from S3 bucket",-1),E=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo apt install awscli 
`)])],-1),D=e("h3",{id:"configure-aws-cli",tabindex:"-1"},[n("Configure AWS CLI "),e("a",{class:"header-anchor",href:"#configure-aws-cli","aria-hidden":"true"},"#")],-1),B=e("p",null,"Configure aws cli with secret key and secret access key",-1),H=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`aws configure
`)])],-1),V=e("p",null,"Install software",-1),Q=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`sudo npm install pm2 -g
`)])],-1),J=e("p",null,"Start process",-1),K=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`aws s3 cp s3://shopizer-website/dist.tar.gz ./website
cd ~/website
tar -xf dist.tar.gz
cd code
pm2 start local.js
`)])],-1),Y=e("p",null,"Stop process",-1),Z=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`cd /home/ubuntu/website/code
pm2 stop local.js
cd ~
rm -rf * /home/ubuntu/website/*
`)])],-1),ee=e("p",null,"Now run Certbot SSL configuration for NGINX. Make sure your domain points to AWS LightSail IP address before running next command. From your registrar configure DNS for a new A record or AAA record and point to your AWS instance IP address.",-1),ne=e("h3",{id:"open-lightsail-required-ports",tabindex:"-1"},[n("Open LightSail required ports "),e("a",{class:"header-anchor",href:"#open-lightsail-required-ports","aria-hidden":"true"},"#")],-1),se=e("p",null,"Lightsail Open ports 80 443 22",-1),te=[i,r,d,c,u,h,p,g,_,m,f,v,x,S,w,y,b,C,A,N,I,L,T,O,q,X,k,G,P,W,$,M,R,F,j,U,z,E,D,B,H,V,Q,J,K,Y,Z,ee,ne,se];function le(oe,ae,ie,re,de,ce){return l(),t("div",null,te)}var pe=s(a,[["render",le]]);export{he as __pageData,pe as default};
