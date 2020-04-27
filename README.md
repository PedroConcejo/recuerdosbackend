# Reboot BackendEnd Sample

## Introduction

## Directory Structure

## Setup

### Install & Update Dependencies
The first time you start the server you may want to make sure you have the dependencies installed, in the right versions. To do so, just go to the terminal and type:

```
$ npm install
```
### Install StandardJS Linter
[StandardJS](https://standardjs.com/) is a JavaScript style guide, linter, and formatter.

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs


> VSCODE `SETTINGS.JSON`:
```
  "javascript.validate.enable": false,
  "editor.formatOnPaste": false,
  "editor.formatOnSave": false,
  "editor.formatOnType": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  "standard.enable": true,
  "standard.run": "onType",
  "standard.autoFixOnSave": false,
  "standard.usePackageJson": true,

  // ESLINT + PRETTIER + VETUR
  "vetur.validation.template": false,
  "vetur.experimental.templateInterpolationService": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "vue-html"
  ],
```

*Make sure you don't have duplicate rules!*

### Environment Variables

The next setup step is to create an `Environment Variable` file `.env` in this folder. We have provided a `.env.example` for you with a sample configuration for both **development** and **production** environments.

Make your own copy_
```
$ cp .env.example .env
```

And customize the sample params to your needs

- mongoURL: "mongodb://localhost/",
- mongoDBName: 'reboot',
- apiKeys : "fakeapikey",
- port : 5000

## Start local Server

You can start your server anytime with:

```
$ npm run start
```

You should see something like:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.43.142:8080
Hit CTRL-C to stop the server
```

## MODELS

### USER MODEL

| KEY       | TYPE   | REQUIRED | VALIDATIONS  |
| --------- | ------ | ---------|------------- |
| email     | String | true     | regex(email  |
| name      | String | true     |              |
| role      | String | true     | default=user |
| password  | String | true     | min(6)       |
| location  | String | true     | enum         |
| img       | String | no       |              |

### PARTNER MODEL

| KEY       | TYPE   | REQUIRED | VALIDATIONS     |
| --------- | ------ | ---------|---------------- |
| email     | String | true     | regex(email     |
| name      | String | true     |                 |
| partner   | String | true     |                 |
| role      | String | true     | default=partner |
| password  | String | true     | min(6)          |
| location  | String | true     | enum            |
| img       | String | no       |                 |


### STYLE MODEL

| KEY         | TYPE     | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------    | -------- | --------- | -------- | ---------------
| partner     | ObjectId | Partner   | true     | -
| style       | String   | -         | true     |
| description | String  | -          | true     |
| content     | String  | -          | true     |
| price       | String  | -          | true     |


### RATING MODEL
| KEY      | TYPE     | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| -------- | -------- | --------- | -------- | ---------------
| partner  | ObjectId | Partner   | true     | -
| user     | ObjectId | Users     | true     |
| rate     | Number   |           | true     |

### ROOM MODEL
| KEY      | TYPE     | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| -------- | -------- | --------- | -------- | ---------------
| partner  | ObjectId | Partner   | true     | -
| user     | ObjectId | Users     | true     |

### MESSAGE MODEL
| KEY      | TYPE     | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| -------- | -------- | --------- | -------- | ---------------
| content  | String   | -         | true     |
| writer   | ObjectId | onModel   | true     | -
| onModel  | String   |           | true     | enum: ['user', 'partner']

## API ROUTES

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://DOMAIN/api/auth/signup
```

### AUTHENTICATION ENDPOINTS
> TOKEN Required: NO

| METHOD | URL                  | What does it do         |
| ------ | ---------------------| ------------------------|
| POST   | `auth/signup`        | Create a new user       |
| POST   | `auth/login`         | Authenticates a user    |
| POST   | `auth/signuppartner` | Create a new partner    |
| POST   | `auth/loginpartner`  | Authenticates a partner |

### USER ENDPOINTS
> TOKEN Required: YES

| METHOD | URL                       | What does it do          |
| ------ | ------------------------- | ------------------------ |
| GET    | `users`                   | Get All Users            |
| GET    | `users/:id`               | Get One User             |
| PUT    | `users/:id`               | Update User              |
| DELETE | `users/:id`               | Delete User              |

### ME ENDPOINTS
> TOKEN Required: YES

| METHOD | URL                       | What does it do          |
| ------ | ------------------------- | ------------------------ |
| GET    | `me`                      | Get All Partner          |
| PUT    | `me`                      | Update User              |
| GET    | `me/:partnerid`           | Get One Partner          |
| POST   | `me/:partnerid`           | Create Room              |
| DELETE | `me/:roomid`              | Delete Room              |
| POST   | `me/:roomid`              | Create Message           |

### PARTNER ENDPOINTS
> TOKEN Required: YES

| METHOD | URL                       | What does it do          |
| ------ | ------------------------- | ------------------------ |
| GET    | `partner/others`          | Get All Partner          |
| GET    | `partner`                 | Get All Partner          |
| PUT    | `partner`                 | Update Partner           |
| POST   | `partner`                 | Create Style             |
| DELETE | `partner/`                | Delete Style             |
| DELETE | `partner/:roomid`         | Delete Room              |
| POST   | `partner/:roomid`         | Create Message           |


Happy coding!
