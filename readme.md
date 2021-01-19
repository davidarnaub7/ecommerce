Hay tres partes:
1. Cecotec Manegement (web)
2. Server
3. catologo_cecotec (móbil)


Para iniciar la aplicación web hace falta ejecutar los siguientes comandos:
```
cd CeotecManegement/
yarn && yarn web
```
Sin embargo, si no se arranca el servidor la aplicación no irá. De este modo, para arrancar el servidor habrá que ejecutar:
```
cd server
npm start
```
(otra terminal)
```
cd server
graphql-fake --open
```
Para iniciar la aplicación móbil solo hará falta:
```
cd catologo_cecotec
npm i && npx pod install && react-native run-ios
```