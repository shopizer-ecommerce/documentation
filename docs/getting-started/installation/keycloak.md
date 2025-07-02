# 🛠️ Keycloak Post-Installation Setup

Follow these steps to configure Keycloak after installation:

## 1. Modify the Master Realm
- Go to the **Keycloak Admin Console**
- Navigate to **Realm Settings → User Profile**
- Add a new attribute:  
  - `name`: `org`  
  - `type`: `String`  
  - Enable `Required`

## 2. Create a New Client (`shopizer`)
- Go to **Clients → Create**
- **Client ID**: `shopizer`
- Enable the following flows:
  - ✅ Standard Flow  
  - ✅ Direct Access Grants  
  - ✅ Implicit Flow  

## 3. Add a Client Scope (`admin`)
- Go to **Client Scopes → Create**
- Name it `admin` ** if it already exist skip to the next step **
- Save and assign it to the client `shopizer`

## 4. Create Client Roles
- Go to **Clients → shopizer → Roles**
- Add the following roles:
  - `admin`
  - `superadmin`

## 5. Update Client Settings
- **Valid Redirect URIs**: Set to `*`  
- **Web Origins**: Set to `*`  

## 6. Create an Admin User
- Go to **Users → Add User**
- **Username**: `admin@shopizer.com`
- Save

### Set Credentials
- Go to **Users → admin@shopizer.com → Credentials**
- Set a password (e.g., `Admin123!`)
- Toggle **Temporary** to `OFF`
- Toggle **Email verified** to `ON`

### Assign Roles
- Go to **Users → admin@shopizer.com → Role Mappings**
- Select **Client Roles → shopizer**
- Add roles: `admin`, `superadmin`

## 7. Update Local DNS
Edit your `/etc/hosts` file:

`
sudo vi /etc/hosts

Add the following entry

127.0.0.1 keycloak
`

## 8. 🔐 Retrieve Client Secret

To get the client secret for your client (`shopizer`):

1. Log in to the Keycloak Admin Console.
2. Select your realm (`master`).
3. Navigate to **Clients → shopizer**.
4. Click on the **Credentials** tab.
5. Copy the value shown in the **Client Secret** field.

## 9. Copy client secret to terraform manifest

`
k8s/app-secret.yaml
APPLICATION_CLIENT_SECRET=<copied secret>
`

## 10. Deploy application secret file

`
kubectl apply -f k8s/app-secret.yaml  
`

## 11. Restart services to relead application with application client secret

Rollout all deployments

- `kubectl rollout restart deployment/references`

- `kubectl rollout restart deployment/merchant`

- `kubectl rollout restart deployment/user`

- `kubectl rollout restart deployment/shop`

- `kubectl rollout restart deployment/order`