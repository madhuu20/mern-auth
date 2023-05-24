const User = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        const { password, email } = req.body
        const found = await User.findOne({ email })
        if (found) {
            return res.json({
                message: "Email already exist",
            })
        }

        const hasPass = await bcrypt.hash(password, 10)
        const result = await User.create({
            ...req.body,
            password: hasPass
        })
        res.json({
            massage: " user register success",
            result,
            hasPass
        })

    } catch (error) {
        res.json({ message: "something went wrong", error })
    }
}

exports.fetchUser = async (req, res) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            returnres.json({ message: "Provide Token" })
        }
jwt.verify(token, "SECRET_PASSWORD")

        const result = await User.find()
        res.json({
            massage: " user fetch success",
            result
        })

    } catch (error) {
        res.json({ message: "something went wrong", error })
    }
}


exports.login = async (req, res) => {
    try {
        // EMAIL EXIST
        const { email, password } = req.body
        const result = await User.findOne({ email })

        if (!result) {
            return res.json({ message: "email not snot register with as" })
        }

        // EMAIL FOUND

        const match = await bcrypt.compare(password, result.password)
        if (!match) {
            return res.json({ message: "password do not match" })
        }
        const token = jwt.sing({ name: "kate" }, process.env.JWT_KEY)
        res.json({ message: "login success", token })

    } catch (error) {
        res.json({ message: "something went wrong" + error })
    }
}


exports.destroy = async (req, res) => {
    try {
        await User.deleteMany()
        res.json({ message: "User destroy success" })


    } catch (error) {
        res.json({ message: "something went wrong" + error })
    }
}