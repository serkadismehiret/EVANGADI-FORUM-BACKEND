let express = require('express');
let router = express.Router()


// authonthication middleware
let authMiddleware = require("../middleware/authMiddleware")
// user controller
let{register, login, checkUser} = require('../controller/userController');
// register route
router.post('/register', register)
// login user
router.post('/login', login)
// check user
router.get("/check",authMiddleware, checkUser)

module.exports = router;