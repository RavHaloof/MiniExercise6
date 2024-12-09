const express = require('express')
const app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))
app.post('/authenticate', function(req,res){
var user = req.body.username
var pass = req.body.password
if (user == 'guest' & pass == '1234')
    res.end('welcome guest')
else
    res.end('invalid username and/or password')
})
app.listen(12345)