const User = require("../models")
const bcrypt = require("bcrypt")

exports.register = async (req, res) => {
    try {
        const { password } = req.body

        const hasPass = await bcrypt.hash(password, 10)
        const result = await User.create({
            ...req.body,
            password: hasPass
        })
        res.json({
            massage: " user register success",
            result
        })

    } catch (error) {
        res.json({ message: "something went wrong", error })
    }
}

exports.register = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            massage: " user fetch success",
            result
        })

    } catch (error) {
        res.json({ message: "user fetch su", error })
    }
}