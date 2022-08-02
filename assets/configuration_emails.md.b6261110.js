import{_ as e,c as s,o as n,a}from"./app.73ad5787.js";const u=JSON.parse('{"title":"Shopizer email configuration","description":"","frontmatter":{"title":"Shopizer email configuration"},"headers":[],"relativePath":"configuration/emails.md"}'),o={name:"configuration/emails.md"},t=a(`<h1 id="emails-configuration" tabindex="-1">Emails configuration <a class="header-anchor" href="#emails-configuration" aria-hidden="true">#</a></h1><p>Shopizer supports 2 methods for sending emails:</p><ul><li>smtp (<strong>default</strong>)</li><li>AWS Simple Email Service (<strong>ses</strong>)</li></ul><h4 id="smtp-configuration-default-method" tabindex="-1">SMTP Configuration (Default method) <a class="header-anchor" href="#smtp-configuration-default-method" aria-hidden="true">#</a></h4><p>This can be done by configuring SMTP connectivity at the server level from Shopizer administration console. When logging in the console move to Configurations and then to Email settings. SMTP configuration uses underlying Spring SpringHtmlEmailSender for sending HTML based emails.</p><p><strong>Protocol</strong>: SMTP or SMTPS (this depends on SMTP provider. It usualy is SMTPS) <strong>Host</strong>: SMTP server host <strong>Post</strong>: Most of the time either 25 or 465 <strong>Username</strong>: SMTP server attributed username <strong>Password</strong>: SMTP server attributed password <strong>Requires authentication</strong>: Should always be true <strong>TLS</strong>: Should always be true (Usualy mentioned by SMTP provider)</p><p><strong>Shopizer configuration</strong></p><p>Make sure shopizer-core.properties in sm-core project is configured fot smtp method before starting the server.</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">config.emailSender=default</span></span>
<span class="line"></span></code></pre></div><h4 id="ses-aws-simple-email-sdk" tabindex="-1">SES (AWS Simple Email SDK) <a class="header-anchor" href="#ses-aws-simple-email-sdk" aria-hidden="true">#</a></h4><p>This method uses AWS SDK implementation to perform SMTP(S) connectivity. AWS SES SDK is already included in Shopizer Maven POM file.</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    &lt;!-- https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk-ses --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;groupId&gt;com.amazonaws&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;artifactId&gt;aws-java-sdk-ses&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Shopizer configuration</strong></p><p>Make sure shopizer-core.properties in sm-core project is configured fot ses method before starting the server. It requires 2 specific property for connecting to AWS Simple Email Service (ses method and region in which ses is configured in your AWS account)</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">config.emailSender=ses</span></span>
<span class="line"><span style="color:#A6ACCD;">config.emailSender.region=US_EAST_1</span></span>
<span class="line"></span></code></pre></div>`,15),r=[t];function i(p,l,c,d,g,m){return n(),s("div",null,r)}var S=e(o,[["render",i]]);export{u as __pageData,S as default};
