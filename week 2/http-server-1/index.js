//npm init -y
//npm install express
const express = require('express')
//npm  install body-parser
const bodyParser = require('body-parser')
const app = express()
const port = 3000 || process.env.PORT
//export PORT=3005

//middlewares
app.use(bodyParser.json());

app.get('/router-handler', (req, res) => {
    //headers, body, query parameters
    // do machine learning model
    res.json({
        name: "harkirat",
        age: 21,
    })
  })

app.get('/', (req, res) => {
  //res.send('Hello World!')
  console.log(req.headers.authorization);
  setTimeout(()=>{
    res.status(401).send('Hello World1')
  },1000)
})

app.post('/conversations', (req,res) => {
    res.send('hi there');
    res.send({msg: "2+2=4"})
})

app.post('/backend-api/conversation', (req,res)=>{
    const message = req.query.message;
    console.log(message);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//rest API,  http

//npx nodemon index.js
//automatically restarts a server

//use postman to send requests to the server