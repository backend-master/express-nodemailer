# Express With Nodemailer

you can install Nodemailer with npm :

```sh
npm install nodemailer --save
```

or with yarn :

```sh
yarn add nodemailer
```

1. Folder Structure

```
.
+ node_modules
+ app.js
+ package.json
```

2. Get ClientId and Secret :

- Create a project on console.developers.google.com.
- Search: Gmail API then click Enable.
- Go to Credentials, click Oauth Consent Screen tab.
- Type the project name, then save.
- Create credentials, choose Oauth Application ID.
- On Application type, choose Web Application.
- On Authorized redirect URI type:
  https://developers.google.com/oauthplayground
- Click Create, then enjoy your ClientId & ClientSecret!

3. Get RefreshToken :

- Go to https://developers.google.com/oauthplayground/.
- Click OAuth2 configuration (gear icon).
- Check Use your own Oauth credentials.
- Input your ClientId & ClientSecret.
- On textbox scopes, input https://mail.google.com/.
- Click Authorize App then allow it.
- Click Exchange authorization code for token.
- Check Auto-refresh the token before it expires.
- Enjoy your Refresh Token!
