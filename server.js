let sdata = [
    {
        name: "try",
        fathername: "done",
        email: "try@gmail.com",
        password: "123"
    },
];

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
        res.send("User already exist!")
    }
    else {
        sdata.push(req.body);
        console.log(req.body);
        res.send("Signup Successful");
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
        res.send("User not found :(")
    }
    else {
        res.send({
            name: sdata[isFound].name,
            fname: sdata[isFound].fathername,
            email: sdata[isFound].email
        });
    }
})


app.listen(3000, () => {
    console.log("Server is runing on 3000 Port");
})