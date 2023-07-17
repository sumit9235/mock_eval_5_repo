const express = require('express')
const jwt = require('jsonwebtoken')
const { UserModel } = require('../model/user.model.js')
const userRouter = express.Router()

userRouter.post("/signup", async (req, res) => {
    const { Username, Email } = req.body;
    try {
        let existUser = await UserModel.find({ Email });
        if (existUser.length > 0) {
            res.send({ "msg": "Already Exist", "token": jwt.sign({ "Email": Email }, "token") })
        } else {
            let acessToken = jwt.sign({ "Email": Email }, "token")
            const user = new UserModel({ Username, Email })
            await user.save()
            res.status(200).send({ "msg": "Registration sucessdsfull", "token": acessToken })
        }
    } catch (err) {
        res.status(500).send(err.messgae)
    }
})

module.exports = {
    userRouter
}
