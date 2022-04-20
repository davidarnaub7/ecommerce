There are three parts :
1. Cecotec Manegement (web)
2. Server 
3. catologo_cecotec (mobile)


In order to start the web app you need to run the following commands:
```
cd CeotecManegement/
yarn && yarn web
```

However, if the server is not listening the app won't work. To run the server execute:

```
cd server
npm start
```

In other shell execute:
 
```
cd server
graphql-fake --open
```

To start the mobile app you just need to execute:

```
cd catologo_cecotec
npm i && npx pod install && react-native run-ios
```