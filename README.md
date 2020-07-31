## How to install the project

In order to install the app you have to run `npm i` in the following places:

1. run `npm i` in the root directory - to install the react app
1. run `npm i` in the /api directory - to instal the API

After both folders have their node_modules in the project root directory run `npm run start-app` in the root directory.
This command will start the app and the website API in the same time.

## About the app
The application is built with React, Redux and React Router.

Libraries I have used:

axios - to make http request
concurrently - to run multiple npm script in the same time
dotenv - for env variables
node-sass - scss
prop-types - for type check
eslint-config-prettie - for linting
eslint-plugin-prettier - for linting
history - to simulate the browser history
prettier - formater

## Available Scripts

In the project directory, you can run:

### `npm run start-app`

Runs the app in the development mode.<br />

- opens [http://localhost:3000](http://localhost:3000) to view it in the browser.
- init the website API [http://localhost:3001](http://localhost:3001)

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Runs all the apps tests.

### `npm run format`

Does a linting on all the files with the extension js, jsx and json.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
