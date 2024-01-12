require("dotenv").config()
let express = require("express");
let app = express();
let port = 5500;
let cors = require('cors')
app.use(cors())
// dbconnection
let dbConnection = require("./db/dbconfig");

// user routers middleware file
let userRoutes = require("./routes/userRoute");

// questions routers middleware file
let questionsRoutes = require("./routes/questionRoute");

// authenticaion middleware
let authMiddleware = require("./middleware/authMiddleware")
let answerRoutes = require("./routes/answerRoute")

// json middleware to extract json data
app.use(express.json())
app.use("/api/users", userRoutes);
// qestions routes middleware
app.use("/api/questions",authMiddleware, questionsRoutes)
// answers routes middleware
app.use("/api/answers",authMiddleware, answerRoutes)

async function start() {
  try {
    let result = await dbConnection.execute('select "test"');
    app.listen(port);
console.log("database connection established")
console.log(`listening on ${port}`)
  } catch (error) {
    console.log(error.message);
  }
}
start();



