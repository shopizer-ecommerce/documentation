import{_ as e,c as a,o as t,R as s}from"./chunks/framework.c3af281d.js";const r="/documentation/assets/users.684522f6.png",f=JSON.parse('{"title":"Shopizer Users Model","description":"","frontmatter":{"title":"Shopizer Users Model"},"headers":[],"relativePath":"model/user.md"}'),o={name:"model/user.md"},i=s('<h1 id="user-model" tabindex="-1">User model <a class="header-anchor" href="#user-model" aria-label="Permalink to &quot;User model&quot;">​</a></h1><h2 id="business-rules" tabindex="-1">Business rules <a class="header-anchor" href="#business-rules" aria-label="Permalink to &quot;Business rules&quot;">​</a></h2><table><thead><tr><th>Role</th><th>Description</th></tr></thead><tbody><tr><td>superadmin</td><td>Can create, modify any user of any stores</td></tr><tr><td>admin</td><td>Can create, modify any user from its pertaining store</td></tr><tr><td>admin_store</td><td>Can create, modify any user from its pertaining store</td></tr><tr><td>admin_retail</td><td>Can only modify their profile, Deletion is not supported</td></tr></tbody></table><h3 id="global-rules" tabindex="-1">Global Rules <a class="header-anchor" href="#global-rules" aria-label="Permalink to &quot;Global Rules&quot;">​</a></h3><ul><li>User even if superuser can’t change roles</li><li>Superuser can’t create superuser</li><li>Admins can’t delete or modify superuser</li></ul><h3 id="pages-rules" tabindex="-1">Pages rules <a class="header-anchor" href="#pages-rules" aria-label="Permalink to &quot;Pages rules&quot;">​</a></h3><h4 id="user-list" tabindex="-1">User List <a class="header-anchor" href="#user-list" aria-label="Permalink to &quot;User List&quot;">​</a></h4><ul><li>When login in as super admin all users are displayed in the list</li><li>When login in a any other admin only users from same store are displayed in the list</li><li>User cannot delete himself, he has to rely on other admin</li></ul><h3 id="create-modify-user-page" tabindex="-1">Create / modify user page <a class="header-anchor" href="#create-modify-user-page" aria-label="Permalink to &quot;Create / modify user page&quot;">​</a></h3><ul><li>Cannot assign group to superadmin</li><li>Self cannot edit it’s own groups</li><li>Self cannot change merchant store</li><li>Default selected merchant is current user merchant</li></ul><h3 id="schema" tabindex="-1">Schema <a class="header-anchor" href="#schema" aria-label="Permalink to &quot;Schema&quot;">​</a></h3><p><strong>USER</strong><strong>MERCHANT_STORE</strong><strong>SM_GROUP</strong><strong>USER_GROUP</strong><strong>PERMISSION_GROUP</strong><strong>PERMISSION</strong></p><p>Users belong to MERCHANT_STORE. Users are assigned to groups having predefined sets of permissions.</p><p><img src="'+r+'" alt="User database tables" title="User database tables"></p>',14),l=[i];function n(d,u,h,c,m,p){return t(),a("div",null,l)}const _=e(o,[["render",n]]);export{f as __pageData,_ as default};