const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const app = express();

app.use(express.json());

const secret = 'secrEtKeY'

const generateToken = (user) => {
  const payload = { username: user.username }
  return jwt.sign(payload, SECRET, { expiresIn: '1h' })
}

const authToken = (req, res, next) => {
  var token = req.headers.authorization
  if (token) {
    token = token.split(' ')[1]
    jwt.verify(token, SECRET, (err, user) => {
      if (err) res.sendStatus(403)
      req.user = user
      next()
    })
  }
  else req.sendStatus(401)
}



// Admin routes
app.post('/admin/signup', (req, res) => {
  // logic to sign up admin
});

app.post('/admin/login', (req, res) => {
  // logic to log in admin
});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
