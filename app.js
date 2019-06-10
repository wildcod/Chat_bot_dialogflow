const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

app.post('/users', (req, res) => {
    let response = {};
    if(req.body.queryResult.parameters["given-name"]){
        const name = req.body.queryResult.parameters["given-name"]
        const lastName = req.body.queryResult.parameters["last-name"]
        response = { 
            "fulfillmentText": `thanks ${name + ' ' + lastName}, Please provide your email`
        }
    }
    else if(req.body.queryResult.parameters["email"]){
        const email = req.body.queryResult.parameters["email"]
        response = {
            "fulfillmentText": `I got your email ${email}, Please provide your phone no`
        }
    }
    else if(req.body.queryResult.parameters["phone-number"]){
        const phone = req.body.queryResult.parameters["phone-number"]
        response = {
            "fulfillmentText": `I got your phone no ${phone}
                                Now tell me your query`
        }
    }
    else if(req.body.queryResult.parameters["triny_info"]){
        response = {
            "fulfillmentText": `Timey Voice Assistant is an Artificial Intelligence based Text + Voice Assistant best suited for your Landing Page and Website`
        }
    }
    res.send(response)

})

module.exports = app;