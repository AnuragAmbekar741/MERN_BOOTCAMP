const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


const MONGOOSE_URL = "mongodb+srv://anuragambekar1997:123Aja%40456@cluster0.fduvs2o.mongodb.net/?retryWrites=true&w=majority"


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(4000, () => console.log('Server running on port 4000'));
