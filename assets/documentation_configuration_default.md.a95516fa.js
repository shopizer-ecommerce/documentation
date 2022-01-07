import{_ as e,c as t,o,d as n}from"./app.bc8efb32.js";var a="/assets/google-api.22524265.png",s="/assets/keys.be759b9e.png";const S='{"title":"Understanding configurations","description":"","frontmatter":{},"headers":[{"level":2,"title":"Understanding configurations","slug":"understanding-configurations"},{"level":3,"title":"External configurations","slug":"external-configurations"},{"level":3,"title":"What are those configurations used for","slug":"what-are-those-configurations-used-for"},{"level":3,"title":"How to get those configurations","slug":"how-to-get-those-configurations"},{"level":3,"title":"Shopizer configuration files","slug":"shopizer-configuration-files"},{"level":3,"title":"Other configurations","slug":"other-configurations"}],"relativePath":"documentation/configuration/default.md","lastUpdated":1641577787267}',i={},r=n('<h2 id="understanding-configurations" tabindex="-1">Understanding configurations <a class="header-anchor" href="#understanding-configurations" aria-hidden="true">#</a></h2><p>For having the best e-commerce experience Shopizer requires a set of configurations including api keys and different pointers that can be used at runtime to provide functionality such as content management, sending emails, getting shipping quotes, displaying maps etc...</p><p>Those configurations use underlying api keys and subsystem configurations that require to be created prealabely. Those configurations are not mandatory and Shopizer will work with reduced features if not configured.</p><h3 id="external-configurations" tabindex="-1">External configurations <a class="header-anchor" href="#external-configurations" aria-hidden="true">#</a></h3><ul><li>Google Maps API</li><li>Google Places API</li><li>AWS SES (Simple Email Service)</li><li>Google reCaptcha API</li><li>AWS S3 Bucket</li><li>Google Bucket</li></ul><h3 id="what-are-those-configurations-used-for" tabindex="-1">What are those configurations used for <a class="header-anchor" href="#what-are-those-configurations-used-for" aria-hidden="true">#</a></h3><table><thead><tr><th>Scope</th><th>Provider</th><th>Description</th></tr></thead><tbody><tr><td>Contact us</td><td>Google Maps API</td><td>Display a Map containing store location</td></tr><tr><td>Contact us</td><td>Google reCaptcha API</td><td>&#39; I am not a Robot &#39; - Contact Form</td></tr><tr><td>Contact Us</td><td>Send emails from contact us</td><td>Use AWS SES service for sending emails</td></tr><tr><td>Shipping quote</td><td>Google Geocoder API</td><td>Determine shipping distance</td></tr><tr><td>Order</td><td>Google Places API</td><td>Validate customer shipping address</td></tr><tr><td>Order</td><td>Google Maps API</td><td>Display customer shipping location</td></tr><tr><td>Order</td><td>Send order emails</td><td>Use AWS SES service for sending emails</td></tr><tr><td>Content</td><td>Content images on AWS</td><td>Use S3 buckets and cloudfront to serve images</td></tr><tr><td>Content</td><td>Content images on GCP Buckets</td><td>Use GCP buckets and cloudfront to serve images</td></tr></tbody></table><h3 id="how-to-get-those-configurations" tabindex="-1">How to get those configurations <a class="header-anchor" href="#how-to-get-those-configurations" aria-hidden="true">#</a></h3><ul><li><strong>Google Maps API, Geocoding API, Places API</strong></li></ul><blockquote><p><a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer">Get Google MAPS, Geocoding and Places API keys</a> Follow instructions for Getting a Key (* Requires Google Cloud Account)</p></blockquote><p>Enabling 3 apis</p><ul><li>Maps javascript API</li><li>Geocoding API</li><li>Places API</li></ul><p><img src="'+a+'" alt="Google APIs diagram" title="Enable Google APIs"></p><p>Then once apis are enabled keep keys aside to configure Shopizer</p><p><img src="'+s+`" alt="Google keys diagram" title="Keep keys aside"></p><ul><li><strong>Google Places API</strong></li></ul><blockquote><p>See procedure above</p></blockquote><ul><li><strong>Google Geocoder API</strong></li></ul><blockquote><p>See procedure above</p></blockquote><ul><li><strong>Google reCaptcha</strong></li></ul><blockquote><p><a href="https://developers.google.com/recaptcha" target="_blank" rel="noopener noreferrer">Get reCaptcha API keys</a><a href="https://www.google.com/recaptcha/admin/create" target="_blank" rel="noopener noreferrer">Register new keys here</a></p></blockquote><p>Register your domains and subdomains but aslo localhost for testing the solution</p><ul><li><strong>AWS S3 Bucket</strong></li></ul><p>Infinispan is the technology used out of the box for managing images and files from a ingle instance of Shopizer. This solution works fine when working with Single instance and low to mid size traffic but would not scale for large traffic size or to serve multiple Shopizer running instances.</p><p>Our recommendation for being able to manage images and files at scal is to use cloud based file management and use Cloudfront technology for serving files faster to visitors from any location.</p><p>Cration of S3 bucket and Cloudfront distribution requires an AWS account.</p><blockquote><p>See this instruction video [<a href="https://www.google.com/recaptcha/admin/create" target="_blank" rel="noopener noreferrer">https://www.google.com/recaptcha/admin/create</a>] for creating an S3 bucket and a Cloudfront distribution on AWS.</p></blockquote><p>Bucket creation in AWS</p><p>Bucket must be set public and have this policy attached</p><div class="language-sh"><pre><code>
{
    &quot;Version&quot;: &quot;2012-10-17&quot;,
    &quot;Statement&quot;: [
        {
            &quot;Effect&quot;: &quot;Allow&quot;,
            &quot;Principal&quot;: &quot;*&quot;,
            &quot;Action&quot;: &quot;s3:GetObject&quot;,
            &quot;Resource&quot;: &quot;arn:aws:s3:::bucketname/*&quot;
        }
    ]
}

</code></pre></div><ul><li><strong>Google GCP Bucket</strong></li></ul><p>Google Cloud Platform (GCP) also offers bucket and cloudfront technology for scaling images and files distribution.</p><p>Creation of buckets and cloudfront requires a GCP account.</p><blockquote><p>See this instruction video for creating abucket and a Cloudfront distribution on GCP</p></blockquote><h3 id="shopizer-configuration-files" tabindex="-1">Shopizer configuration files <a class="header-anchor" href="#shopizer-configuration-files" aria-hidden="true">#</a></h3><p>Shopizer configuration files are located in</p><p><strong>shopizer/sm-core/src/main/resources/shopizer-core.properties</strong></p><p>Specific configuration files also exist for each profile</p><p><strong>shopizer/sm-core/src/main/resources/profiles/.../shopizer-core.properties</strong></p><div class="language-sh"><pre><code># Which CMS method to use [ default | httpd | aws | gcp ]
# default = infinispan
# httpd = requires http server
# aws = AWS S3 -&gt; See AWS S3 configuration below
# gcp = Google Cloud Storage

config.cms.method=aws


#AWS S3 configuration
#Name of bucket files
#Credentials must be set as environment variables when launching Shopizer
#AWS_ACCESS_KEY_ID=&lt;ACCESS KEY ID&gt;
#AWS_SECRETE_ACCESS_KEY=&lt;SECRET ACCESS KEY&gt;
config.cms.contentUrl=AWS_BUCKET_URL
config.cms.aws.bucket=AWS_BUCKET
config.cms.aws.region=AWS_BUCKET_REGION

#GCP Cloud Storage configuration
#Name of the bucket file
#If the bucket does not exists it will be created
#export GOOGLE_APPLICATION_CREDENTIALS=&quot;/home/user/Downloads/[FILE_NAME].json&quot;
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
</code></pre></div><h3 id="other-configurations" tabindex="-1">Other configurations <a class="header-anchor" href="#other-configurations" aria-hidden="true">#</a></h3><p>There are other configuration keys requiring attention</p><div class="language-sh"><pre><code># Which CMS method to use [ default | httpd | aws | gcp ]
config.cms.method=default

#Shipping activated in the system ?
config.displayShipping=true

config.shippingDistancePreProcessor.acceptedZones=QC,ON,AB,NY,MA

#shipping rules
config.shipping.rule.priceByDistance=PriceByDistance.drl
config.shipping.rule.shippingModuleDecision=ShippingDecision.drl
</code></pre></div><table><thead><tr><th>Key</th><th>Description</th><th>Valeur defaut</th></tr></thead><tbody><tr><td>config.cms.method</td><td></td><td></td></tr><tr><td>config.displayShipping</td><td>Google reCaptcha API</td><td>&#39; I am not a Robot</td></tr><tr><td>config.shipping.rule.priceByDistance</td><td>Send emails from contact us</td><td></td></tr><tr><td>config.shipping.rule.shippingModuleDecision</td><td>Send emails from contact us</td><td></td></tr></tbody></table><p>####AWS S3 Bucket + CloudFront for servig images</p><p>Requirements:</p><p>Have an AWS account Have AWS user access key and secret access key handy</p><p>This video is a tutorial on the configuration of S3 and CloudFront to work as content management underlying CMS for Shopizer.</p><p><a href="https://www.youtube.com/watch?v=ETqWBj0Cw30" title="Configure S3 bucket and CloudFront as underlying content management" target="_blank" rel="noopener noreferrer"><img src="https://img.youtube.com/vi/ETqWBj0Cw30/0.jpg" alt="AWS S3 Bucket"></a></p><div class="language-json"><pre><code>Bucket Policy
<span class="token punctuation">{</span>
    <span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;Sid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PublicReadGetObject&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;s3:GetObject&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;arn:aws:s3:::example-bucket/*&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>####Google Cloud Platform Buckets and Cloud CDN for serving images</p><p><strong>Available soon</strong></p>`,52),c=[r];function l(p,u,d,g,h,f){return o(),t("div",null,c)}var k=e(i,[["render",l]]);export{S as __pageData,k as default};
