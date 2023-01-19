

const { Router } = require('express');
const express = require('express');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModule } = require('../models/user');
const { authentication } = require('../middleware/authentication');

const dashboardRouter = Router();

dashboardRouter.get("/",authentication, async(req, res)=>{
   
})

