import{_ as t,c as o,o as s,a as n,b as e}from"./app.e4fe013f.js";var l="/assets/google-api.22524265.png",i="/assets/keys.be759b9e.png";const _n='{"title":"Understanding configurations","description":"","frontmatter":{},"headers":[{"level":2,"title":"Understanding configurations","slug":"understanding-configurations"},{"level":3,"title":"External configurations","slug":"external-configurations"},{"level":3,"title":"What are those configurations used for","slug":"what-are-those-configurations-used-for"},{"level":3,"title":"How to get those configurations","slug":"how-to-get-those-configurations"},{"level":3,"title":"Shopizer configuration files","slug":"shopizer-configuration-files"},{"level":3,"title":"Other configurations","slug":"other-configurations"}],"relativePath":"documentation/configuration/default.md","lastUpdated":1638461818378}',a={},r=n("h2",{id:"understanding-configurations",tabindex:"-1"},[e("Understanding configurations "),n("a",{class:"header-anchor",href:"#understanding-configurations","aria-hidden":"true"},"#")],-1),c=n("p",null,"For having the best e-commerce experience Shopizer requires a set of configurations including api keys and different pointers that can be used at runtime to provide functionality such as content management, sending emails, getting shipping quotes, displaying maps etc...",-1),u=n("p",null,"Those configurations use underlying api keys and subsystem configurations that require to be created prealabely. Those configurations are not mandatory and Shopizer will work with reduced features if not configured.",-1),d=n("h3",{id:"external-configurations",tabindex:"-1"},[e("External configurations "),n("a",{class:"header-anchor",href:"#external-configurations","aria-hidden":"true"},"#")],-1),p=n("ul",null,[n("li",null,"Google Maps API"),n("li",null,"Google Places API"),n("li",null,"AWS SES (Simple Email Service)"),n("li",null,"Google reCaptcha API"),n("li",null,"AWS S3 Bucket"),n("li",null,"Google Bucket")],-1),g=n("h3",{id:"what-are-those-configurations-used-for",tabindex:"-1"},[e("What are those configurations used for "),n("a",{class:"header-anchor",href:"#what-are-those-configurations-used-for","aria-hidden":"true"},"#")],-1),h=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Scope"),n("th",null,"Provider"),n("th",null,"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,"Contact us"),n("td",null,"Google Maps API"),n("td",null,"Display a Map containing store location")]),n("tr",null,[n("td",null,"Contact us"),n("td",null,"Google reCaptcha API"),n("td",null,"' I am not a Robot ' - Contact Form")]),n("tr",null,[n("td",null,"Contact Us"),n("td",null,"Send emails from contact us"),n("td",null,"Use AWS SES service for sending emails")]),n("tr",null,[n("td",null,"Shipping quote"),n("td",null,"Google Geocoder API"),n("td",null,"Determine shipping distance")]),n("tr",null,[n("td",null,"Order"),n("td",null,"Google Places API"),n("td",null,"Validate customer shipping address")]),n("tr",null,[n("td",null,"Order"),n("td",null,"Google Maps API"),n("td",null,"Display customer shipping location")]),n("tr",null,[n("td",null,"Order"),n("td",null,"Send order emails"),n("td",null,"Use AWS SES service for sending emails")]),n("tr",null,[n("td",null,"Content"),n("td",null,"Content images on AWS"),n("td",null,"Use S3 buckets and cloudfront to serve images")]),n("tr",null,[n("td",null,"Content"),n("td",null,"Content images on GCP Buckets"),n("td",null,"Use GCP buckets and cloudfront to serve images")])])],-1),f=n("h3",{id:"how-to-get-those-configurations",tabindex:"-1"},[e("How to get those configurations "),n("a",{class:"header-anchor",href:"#how-to-get-those-configurations","aria-hidden":"true"},"#")],-1),_=n("ul",null,[n("li",null,[n("strong",null,"Google Maps API, Geocoding API, Places API")])],-1),m=n("blockquote",null,[n("p",null,[n("a",{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",target:"_blank",rel:"noopener noreferrer"},"Get Google MAPS, Geocoding and Places API keys"),e(" Follow instructions for Getting a Key (* Requires Google Cloud Account)")])],-1),S=n("p",null,"Enabling 3 apis",-1),k=n("ul",null,[n("li",null,"Maps javascript API"),n("li",null,"Geocoding API"),n("li",null,"Places API")],-1),b=n("p",null,[n("img",{src:l,alt:"Google APIs diagram",title:"Enable Google APIs"})],-1),A=n("p",null,"Then once apis are enabled keep keys aside to configure Shopizer",-1),C=n("p",null,[n("img",{src:i,alt:"Google keys diagram",title:"Keep keys aside"})],-1),y=n("ul",null,[n("li",null,[n("strong",null,"Google Places API")])],-1),P=n("blockquote",null,[n("p",null,"See procedure above")],-1),v=n("ul",null,[n("li",null,[n("strong",null,"Google Geocoder API")])],-1),E=n("blockquote",null,[n("p",null,"See procedure above")],-1),G=n("ul",null,[n("li",null,[n("strong",null,"Google reCaptcha")])],-1),w=n("blockquote",null,[n("p",null,[n("a",{href:"https://developers.google.com/recaptcha",target:"_blank",rel:"noopener noreferrer"},"Get reCaptcha API keys"),n("a",{href:"https://www.google.com/recaptcha/admin/create",target:"_blank",rel:"noopener noreferrer"},"Register new keys here")])],-1),I=n("p",null,"Register your domains and subdomains but aslo localhost for testing the solution",-1),W=n("ul",null,[n("li",null,[n("strong",null,"AWS S3 Bucket")])],-1),B=n("p",null,"Infinispan is the technology used out of the box for managing images and files from a ingle instance of Shopizer. This solution works fine when working with Single instance and low to mid size traffic but would not scale for large traffic size or to serve multiple Shopizer running instances.",-1),T=n("p",null,"Our recommendation for being able to manage images and files at scal is to use cloud based file management and use Cloudfront technology for serving files faster to visitors from any location.",-1),x=n("p",null,"Cration of S3 bucket and Cloudfront distribution requires an AWS account.",-1),D=n("blockquote",null,[n("p",null,[e("See this instruction video ["),n("a",{href:"https://www.google.com/recaptcha/admin/create",target:"_blank",rel:"noopener noreferrer"},"https://www.google.com/recaptcha/admin/create"),e("] for creating an S3 bucket and a Cloudfront distribution on AWS.")])],-1),z=n("p",null,"Bucket creation in AWS",-1),K=n("p",null,"Bucket must be set public and have this policy attached",-1),q=n("div",{class:"language-sh"},[n("pre",null,[n("code",null,`
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::bucketname/*"
        }
    ]
}

`)])],-1),M=n("ul",null,[n("li",null,[n("strong",null,"Google GCP Bucket")])],-1),O=n("p",null,"Google Cloud Platform (GCP) also offers bucket and cloudfront technology for scaling images and files distribution.",-1),R=n("p",null,"Creation of buckets and cloudfront requires a GCP account.",-1),U=n("blockquote",null,[n("p",null,"See this instruction video for creating abucket and a Cloudfront distribution on GCP")],-1),j=n("h3",{id:"shopizer-configuration-files",tabindex:"-1"},[e("Shopizer configuration files "),n("a",{class:"header-anchor",href:"#shopizer-configuration-files","aria-hidden":"true"},"#")],-1),N=n("p",null,"Shopizer configuration files are located in",-1),Y=n("p",null,[n("strong",null,"shopizer/sm-core/src/main/resources/shopizer-core.properties")],-1),F=n("p",null,"Specific configuration files also exist for each profile",-1),H=n("p",null,[n("strong",null,"shopizer/sm-core/src/main/resources/profiles/.../shopizer-core.properties")],-1),L=n("div",{class:"language-sh"},[n("pre",null,[n("code",null,`# Which CMS method to use [ default | httpd | aws | gcp ]
# default = infinispan
# httpd = requires http server
# aws = AWS S3 -> See AWS S3 configuration below
# gcp = Google Cloud Storage

config.cms.method=aws


#AWS S3 configuration
#Name of bucket files
#Credentials must be set as environment variables when launching Shopizer
#AWS_ACCESS_KEY_ID=<ACCESS KEY ID>
#AWS_SECRETE_ACCESS_KEY=<SECRET ACCESS KEY>
config.cms.contentUrl=AWS_BUCKET_URL
config.cms.aws.bucket=AWS_BUCKET
config.cms.aws.region=AWS_BUCKET_REGION

#GCP Cloud Storage configuration
#Name of the bucket file
#If the bucket does not exists it will be created
#export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json"
config.cms.gcp.bucket=GCP_BUCKET

#You need an AWS access key ID and AWS secret access key to access Amazon SES using an SDK
#AWS keys need to be specified in environment variables
#Email implementation [default | ses]
#default=SpringHtmlEmailSender - through SMTP server and requires configurations from admin console
#ses=AWS SES service
config.emailSender=default
config.emailSender.region=US_EAST_1

#Google map API key
config.shippingDistancePreProcessor.apiKey=GOOGLE_MAPS_KEY

#checkout and signup address validation
config.googleMapsKey=GOOGLE_MAPS_KEY

#recaptcha https://developers.google.com/recaptcha/
#testing keys
config.recaptcha.secretKey=RECAPTCHA_SECRETKEY
config.recaptcha.siteKey=RECAPTCHA_SITEKEY
`)])],-1),V=n("h3",{id:"other-configurations",tabindex:"-1"},[e("Other configurations "),n("a",{class:"header-anchor",href:"#other-configurations","aria-hidden":"true"},"#")],-1),$=n("p",null,"There are other configuration keys requiring attention",-1),Q=n("div",{class:"language-sh"},[n("pre",null,[n("code",null,`# Which CMS method to use [ default | httpd | aws | gcp ]
config.cms.method=default

#Shipping activated in the system ?
config.displayShipping=true

config.shippingDistancePreProcessor.acceptedZones=QC,ON,AB,NY,MA

#shipping rules
config.shipping.rule.priceByDistance=PriceByDistance.drl
config.shipping.rule.shippingModuleDecision=ShippingDecision.drl
`)])],-1),Z=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Key"),n("th",null,"Description"),n("th",null,"Valeur defaut")])]),n("tbody",null,[n("tr",null,[n("td",null,"config.cms.method"),n("td"),n("td")]),n("tr",null,[n("td",null,"config.displayShipping"),n("td",null,"Google reCaptcha API"),n("td",null,"' I am not a Robot")]),n("tr",null,[n("td",null,"config.shipping.rule.priceByDistance"),n("td",null,"Send emails from contact us"),n("td")]),n("tr",null,[n("td",null,"config.shipping.rule.shippingModuleDecision"),n("td",null,"Send emails from contact us"),n("td")])])],-1),J=n("p",null,"####AWS S3 Bucket + CloudFront for servig images",-1),X=n("p",null,"Requirements:",-1),nn=n("p",null,"Have an AWS account Have AWS user access key and secret access key handy",-1),en=n("p",null,"This video is a tutorial on the configuration of S3 and CloudFront to work as content management underlying CMS for Shopizer.",-1),tn=n("p",null,[n("a",{href:"https://www.youtube.com/watch?v=ETqWBj0Cw30",title:"Configure S3 bucket and CloudFront as underlying content management",target:"_blank",rel:"noopener noreferrer"},[n("img",{src:"https://img.youtube.com/vi/ETqWBj0Cw30/0.jpg",alt:"AWS S3 Bucket"})])],-1),on=n("div",{class:"language-json"},[n("pre",null,[n("code",null,[e(`Bucket Policy
`),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token property"},'"Version"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},'"2012-10-17"'),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token property"},'"Statement"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
        `),n("span",{class:"token punctuation"},"{"),e(`
            `),n("span",{class:"token property"},'"Sid"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},'"PublicReadGetObject"'),n("span",{class:"token punctuation"},","),e(`
            `),n("span",{class:"token property"},'"Effect"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},'"Allow"'),n("span",{class:"token punctuation"},","),e(`
            `),n("span",{class:"token property"},'"Principal"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},'"*"'),n("span",{class:"token punctuation"},","),e(`
            `),n("span",{class:"token property"},'"Action"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
                `),n("span",{class:"token string"},'"s3:GetObject"'),e(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
            `),n("span",{class:"token property"},'"Resource"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
                `),n("span",{class:"token string"},'"arn:aws:s3:::example-bucket/*"'),e(`
            `),n("span",{class:"token punctuation"},"]"),e(`
        `),n("span",{class:"token punctuation"},"}"),e(`
    `),n("span",{class:"token punctuation"},"]"),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])])],-1),sn=n("p",null,"####Google Cloud Platform Buckets and Cloud CDN for serving images",-1),ln=n("p",null,[n("strong",null,"Available soon")],-1),an=[r,c,u,d,p,g,h,f,_,m,S,k,b,A,C,y,P,v,E,G,w,I,W,B,T,x,D,z,K,q,M,O,R,U,j,N,Y,F,H,L,V,$,Q,Z,J,X,nn,en,tn,on,sn,ln];function rn(cn,un,dn,pn,gn,hn){return s(),o("div",null,an)}var mn=t(a,[["render",rn]]);export{_n as __pageData,mn as default};
