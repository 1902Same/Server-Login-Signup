let sdata = [
    {
        name: "try",
        fathername: "done",
        email: "try@gmail.com",
        password: "123"
    },
];

var PORT = process.env.PORT || 5000;
var express = require("express");
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const e = require("express");

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Ye code signup ka hay signup say data yahan server main a raha hay...!
app.post('/signup', (req, res) => {

    isFound = false;
    for (i = 0; i < sdata.length; i++) {
        if (sdata[i].email === req.body.email) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        res.send({
            status: 400, //Is ka matlab hay email already exist
            message: "User already exist!"
        });
    }
    else {
        sdata.push(req.body);
        res.send({
            status: 200, //Is ka matlab hay email oke hay
            message: "Signup Successful"
        });
    }
})

//Ye code login ka hay...!
app.post('/login', (req, res) => {

    let e = req.body.email;
    let p = req.body.password;
    let isFound = false;

    for (i = 0; i < sdata.length; i++) {
        if ((e === sdata[i].email) && (p === sdata[i].password)) {
            isFound = i;
            break;
        }
    }
    if (isFound === false) {
        res.send({
            status: 401, //Is ka matlab hay password incorrect
            message: "User Not Found! :("
        });
    }
    else {
        res.send({
            status: 200, // Is ka matlab hay email and password is correct
            message: "Login Success :)",
            alluser: sdata[isFound],
        });
    }
})


app.listen(PORT, () => {
    console.log("Server is runing on : " , PORT);
})