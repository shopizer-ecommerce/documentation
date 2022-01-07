## Users administration

### Business rules


|Role                                       |Description                                             |
|-------------------------------------------|--------------------------------------------------------|
|superadmin                                 |Can create, modify any user of any stores               |
|admin                                      |Can create, modify any user its pertaining store        |
|admin_store                                |Can create, modify any user its pertaining store        |
|admin_retail                               |Can only modify their profile, Deletion is not supported|


### Global Rules

- User even if superuser can’t change roles
- Superuser can’t create superuser
- Admins can’t delete or modify superuser

### Pages rules

#### User List

- When login in as super admin all users are displayed in the list
- When login in a any other admin only users from same store are displayed in the list
- User cannot delete himself, he has to rely on other admin

#### Create / modify user page

- Cannot assign group to superadmin
- Self cannot edit it’s own groups
- Self cannot change merchant store
- Default selected merchant is current user merchant

### Schema

**USER**
**MERCHANT_STORE**
**SM_GROUP**
**USER_GROUP**
**PERMISSION_GROUP**
**PERMISSION**

Users belong to MERCHANT_STORE. Users are assigned to groups having predefined sets of permissions.

![User database tables](/images/documentation/users.png "User database tables")

### Rest api Examples

Some postman examples are available here (import collection in Postman)

[Users management](https://github.com/shopizer-ecommerce/postman/tree/master/services/users)