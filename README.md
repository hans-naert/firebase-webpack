# Instructions
## Install npm packages
Install node modules, including development tools as firebase-tools, webpack-cli, ... .
```console
npm install
```
## Login to firebase
Use npx to execute firebase of the firebase-tools package for logging in to Firebase.
```console
npx firebase login
```
## Create Firestore project with Web App and use it
Create project in console.firebase.com.
Add a Web App , Firestore and Autentication.
Create a database with a collection cities, add the city "Kortrijk" and give some fields as postnumber.
Enable email signup in the authentication module.
```console
npx firebase use --clear
npx firebase use <Project ID>
```


## Build the project
Do a webpack build of the project with the following command:
```console
npm run build
```
## Run the project locally
Serve the project with webpack with the following command:
```console
npm run start
```

## Deploy the project to Firebase
Deploy the project to Firebase with the following command:
```console
npm run deploy
```






