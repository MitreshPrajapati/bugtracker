const express = require('express');
const { connection } = require('./config/db');
const { loginRouter } = require('./routes/login.route');
const { signupRouter } = require('./routes/signup.route');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/signup", signupRouter);
app.use('/login', loginRouter);



const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connecting to DB successfully");
    } catch (error) {
        console.log("Server not connected");
        console.log(error);
    }
})