// cryptography jargon
// 1. Hashing
// 2. Encryption
// 3. Json web tokens
// 4. Local storage

// Hashing
// 1. Hashing is one way
// 2. Given the output, no one can find out the input
// 3. Changing the input a lil bit changes the output by a lot

// Encryption
// 1. Encryption is two way
// 2. A string is encrypted using a password
// 3. String can be decrypted using the same password

// Json web tokens
// 1. Its neither of encryption or hashing (its technically a digital signature)
// 2. Anyone can see the original output given the signature
// 3. Signature can be verified only using the password

// RS256 (RSA Signature with SHA-256) is an asymmetric algorithm that uses a public/private key pair.

// Local storage
// A place in your browser where you can store some data
// Usually things that are stored include -
// 1. Authentication tokens
// 2. User language preference
// 3. User theme preference



// Project for today -
// Let people sign up to your website
// Only allow signed in users to see people (create a dummy people list)

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)