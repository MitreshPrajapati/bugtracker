

const express = require('express');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { Router } = require('express');
const { UserModule } = require('../models/user');

const signupRouter = Router();

signupRouter.post('/', async (req, res) => {
    const { email, password } = req.body;

    const isUserPresent = await UserModule.findOne({ email });

    if (isUserPresent) {
        res.send({ "message": "User already exists, Please Login." });
    } else {
        bcrypt.hash(password, Number(process.env.ROUND), async (err, hashedPassword) => {
            if (err) {
                res.send({ "message": "Something went wrong, Please try later." });
            }

            const newUser = new UserModule({
                email,
                password: hashedPassword
            })

            await newUser.save();
            res.send({ "message": "Signup Successfull" });
        })
    }
})


module.exports = {signupRouter};