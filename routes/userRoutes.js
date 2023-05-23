const { register } = require("../controllers/userController")

const router = require("express").Router()
router
.get("/", fetchUser)
.get("/register", register)

module.exports