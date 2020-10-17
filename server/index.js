var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');
var {users} = require('../database-mongo');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static(__dirname + '/../react-client/dist'));

 

app.get('/users', function (req, res) {
  users.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/signup', function (req, res) {
  users.saveUser(req.body)
  //res.send('POST request to the homepage')
  //console.log('post on /singup' , req.body)
  .then((result) =>{
    res.send(result)
  })
  .catch(err => {
    console.log('error new user signup', err)
  })
      
})

app.post('/login', function (req, res) {
  console.log('post on /login' , req.body)
  users.saveUser(req.body)
  .then((result) =>{
    console.log('new user successfully registered ', result)
  })
  .catch(err => {
    console.log('error new user login', err)
  }) 
})

app.post('/feedback', function (req, res) {
  console.log('post on /feedback' , req.body)
  users.updateFeedback(req.body)
  .then((result) =>{
    console.log('new feedback successfully registered ', result)
  })
  .catch(err => {
    console.log('error new user feedback', err)
  }) 
})


// app.get("/singup", async (req, res) => {

//   try {
//     singup = await db.saveUser();
//       res.send(singup);
//   } catch (e) {
//       console.log(e);
//       res.status(400);
//   }
// });
console.log(users.selectAll)
app.listen(3000, function() {
  console.log('listening on port 3000!');
});

