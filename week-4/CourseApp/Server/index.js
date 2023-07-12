const express = require('express');
const jwt = require('jsonwebtoken')
const fs = require('fs')
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());

const SECRET = 'uniqueKey)(!'

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

//Filenames

const admins = 'ADMINS.json'
const users = 'USERS.json'
const courses = 'COURSES.json'


//readFiles or initiate empty ARR

const ADMINS = JSON.parse(fs.readFileSync(admins, 'utf-8', (err, data) => {
  if (err) return err
  else return data
}))

const USERS = JSON.parse(fs.readFileSync(users, 'utf-8', (err, data) => {
  if (err) return err
  else return data
}))

const COURSES = JSON.parse(fs.readFileSync(courses, 'utf-8', (err, data) => {
  if (err) return err
  else return data
}))

//writeData to json file

const writeDataJson = (fileName, data) => {
  fs.writeFileSync(fileName, JSON.stringify(data))
}


// Admin routes
app.post('/admin/signup', (req, res) => {
  const newAdmin = req.body
  const alreadyExist = ADMINS.find(ele => ele.username == newAdmin.username)
  if (alreadyExist) res.status(403).json({ message: 'Already exist' })
  else {
    ADMINS.push(newAdmin)
    writeDataJson(admins, ADMINS)
    const token = generateToken(newAdmin)
    res.json({ message: 'Admin created sucessfully', token })
  }
});

app.post('/admin/login', (req, res) => {
  const { username, password } = req.headers
  let admin = ADMINS.find(ele => ele.username == username && ele.password == password)
  if (admin) {
    const token = generateToken(admin)
    res.json({ message: 'Login successful', token })
  } else {
    res.status(401).json({ message: 'Invalid username or password' })
  }
});

app.post('/admin/courses', authToken, (req, res) => {
  const newCourse = req.body
  if (!newCourse?.title && !newCourse?.description && !newCourse?.price && !newCourse?.imageLink && !newCourse?.published) return res.status(500).json({ message: "Course dont hold all required attributes" })
  newCourse["id"] = Math.floor(Math.random() * 100000)
  COURSES.push(newCourse)
  writeDataJson('COURSES.json', COURSES)
  res.json({ message: 'Course added', COURSES: COURSES })
});

app.put('/admin/courses/:courseId', authToken, (req, res) => {
  const courseId = req.params.courseId
  const updatedCourse = req.body
  const courseExist = COURSES.find(ele => ele.id == courseId)
  if (!courseExist) return res.status(401).json({ message: 'Invalid course id' })
  COURSES.filter(ele => ele.id !== courseId)
  updatedCourse["id"] = courseId
  COURSES.push(updatedCourse)
  writeDataJson('COURSES.json', COURSES)
  res.json({ message: 'Course updated successfully', courses: COURSES })
});

app.get('/admin/courses', authToken, (req, res) => {
  res.json({ courses: COURSES })
});

// User routes
app.post('/users/signup', (req, res) => {
  const newUser = req.body
  const alreadyExist = USERS.find(ele => ele.username == newUser.username)
  if (alreadyExist) return res.status(403).json({ message: 'Username taken' })
  const token = generateToken(newUser)
  USERS.push(newUser)
  writeDataJson('USERS.json', USERS)
  res.json({ message: 'Sign up successfull', token })
});

app.post('/users/login', (req, res) => {
  const { username, password } = req.headers
  const user = USERS.find(ele => ele.username == username && ele.password == password)
  if (!user) return res.status(403).json({ message: 'Invalid user' })
  const token = generateToken(user)
  res.json({ message: 'Login sucessfull', token })
});

app.get('/users/courses', authToken, (req, res) => {
  res.json({ courses: COURSES })
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
