# FH Kiel Web App Development Skeletons

This repo contains some web abb skeleton projects for classes taught at Fachhochschule Kiel.

For all projects make sure you have NodeJS 10 and npm installed.

### Simple NodeJS Backend

`/backend`

A simple nodejs backend.

To install run:
```bash
npm install
```

To start the server for development run:
```bash
npm start
```

This will run the server and restart it on code changes in the `src` directory.
Start coding in `src/index.js`

### Plain Web App

`/browser`

A primitive web app stub without any frameworks.

To install run:
```bash
npm install
```

To start the app for development on port `:8080` run
```bash
npm start
```
This will open a browser window. The page will reload on code changes.
Start coding in `src/index.js`

### React Web App

`/react`

A plain react web app stub.

To install run:
```bash
npm install
```

To start the app for development on port `:8080` run
```bash
npm start
```
This will open a browser window. The page will reload on code changes.
Start coding in `src/index.jsx`

Another option is using [create-react-app](https://github.com/facebook/create-react-app)


### Elm Web App

`elm`

A very basic elm application.

You needn't install any packages to run this app. Elm caches all packages and the `elm make` command will
install dependencies for you. What you will need to install is elm-live:
```bash
npm install --global elm elm-live
```

To start the app for development on port `:8000` run
```bash
./start
```

You can also consider using [create-elm-app](https://github.com/halfzebra/create-elm-app)
