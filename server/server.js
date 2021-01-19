const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')



const server = jsonServer.create()
const router = jsonServer.router('./database.json')
const userdb = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token 
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({email, password}){
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}


// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  const {email, passwd} = req.body;
  if (isAuthenticated({email, passwd}) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    console.log('entro');
    res.status(status).json({status, message})
    return
  }
  const access_token = createToken({email, passwd})
  console.log("Access Token:" + access_token);
  res.status(200).json({access_token})
})

server.use('/auth',  (req, res, next) => {
   console.log('HEADERS');
    console.log( req.headers.authorization.split(' '));
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'CECOTEC') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({status, message})
    return
  }
  try {
    let verifyTokenResult;
     verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

     if (verifyTokenResult instanceof Error) {
       const status = 401
       const message = 'Access token not provided'
       res.status(status).json({status, message})
       return
     }
    res.status(200).json({verifyTokenResult})
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({status, message})
  }
})

server.use(router)

server.listen(4001, () => {
  console.log('Run Auth API Server')
})