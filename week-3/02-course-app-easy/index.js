const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.json());
// app.use(bodyParser)

let ADMINS = [];
let USERS = [];
let COURSES = [];


//Middlewares for auth
const adminAuth = (req, res, next) => {
  const { username, password } = req.headers
  const auth = ADMINS.find(admin => admin.username == username && admin.password == password)
  if (auth) next()
  else res.status(403).json({ message: "admin authentication failed" })
}

const userAuth = (req, res, next) => {
  const { username, password } = req.headers
  const auth = USERS.find(user => user.username == username && user.password == password)
  if (auth) next()
  else res.status(403).json({ message: "user authentication failed" })
}


// Admin routes
app.post('/admin/signup', (req, res) => {
  let adminSignUpData = req.body
  let ifAdminExist = ADMINS.filter(admin => admin.uname == req.body.uname)
  if (ifAdminExist.length != 0) return res.send("Admin with this username exists")
  ADMINS.push(adminSignUpData)
  res.json({ message: 'Admin created successfully', "ADMINS": ADMINS },)
});

app.post('/admin/login', adminAuth, (req, res) => {
  res.json({ message: "Login successfull" })
});

app.post('/admin/courses', adminAuth, (req, res) => {
  const Course = req.body
  if (!Course?.title && !Course?.description && !Course?.price && !Course?.imageLink && !Course?.published) res.status(500).json({ message: "Course dont hold all required attributes" })
  Course["id"] = Math.floor(Math.random() * 100000)
  COURSES.push(Course)
  res.json({ message: 'Course created successfully', courseId: Course.id, Courses: COURSES })
});

app.put('/admin/courses/:courseId', adminAuth, (req, res) => {
  const CourseID = req.params.courseId
  const Course = req.body
  const ifExist = COURSES.find(ele => ele.id == CourseID)
  if (!ifExist) res.json({ message: "Invalid course ID" })
  Course["id"] = CourseID
  COURSES = COURSES.filter(ele => ele.id != CourseID)
  COURSES.push(Course)
  res.json({ message: "Course updated successfully", Course: Course })
});

app.get('/admin/courses', adminAuth, (req, res) => {
  res.json({ courses: COURSES })
});

// User routes
app.post('/users/signup', (req, res) => {
  const User = req.body
  const ifExist = USERS.find(ele => ele.username == User.username)
  if (ifExist) res.json({ message: "Username is taken" })
  USERS.push(User)
  res.json({ message: "User created successfully" })
});

app.post('/users/login', userAuth, (req, res) => {
  res.json({ message: "Logged in successfully" })
});

app.get('/users/courses', userAuth, (req, res) => {
  res.json({ courses: COURSES })
});

app.post('/users/courses/:courseId', userAuth, (req, res) => {
  const { courseId } = res.params
  const Course = COURSES.find(ele => ele.id == courseId)
  if (!Course) res.json({ message: "Invalid course ID" })
  const { username } = req.headers
  const user = USERS.find(ele => ele.username == username)
  if (user?.purchasedCourses) user.purchasedCourses.push(Course)
  else user["purchasedCourses"] = [Course]
  res.json({ message: "Course purchased successfully" })
});

app.get('/users/purchasedCourses', userAuth, (req, res) => {
  const { username } = req.headers
  const User = USERS.find(ele => ele.username == username)
  res.json({ purchasedCourses: User.purchasedCourses })
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
