
require('dotenv').config();
const jwt = require('jsonwebtoken');

const authentication = (req, res, next)=>{
    
    const token = JSON.parse(localStorage.getItem("token"))

    if(token){
      const decodedToken = jwt.verify(token, process.env.SECRETKEY)
      const {user_id} = decodedToken;
      req.body.user_id = user_id;
      next();


    }else{
        res.send({"message": "Authentication failed."});
    }
}

module.exports = {authentication};