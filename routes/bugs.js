
const { Router } = require('express');
const express = require('express');
const { authentication } = require('../middleware/authentication');
require('dotenv').config();

const bugRouter = Router();

bugRouter.post("/add",authentication,  async(req,res)=>{
  res.send({"message":"bug added logic"})
})

module.exports = {bugRouter};