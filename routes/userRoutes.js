const { fetchUser, register, login, destroy } = require("../controllers/userController")

const router = require("express").Router()
router
    .get("/", fetchUser)
    .get("/register", register)
    .get("/login", login)
    .get("/destroy", destroy)

module.exports = router