const express = require('express');
const app = express();
app.use(express.json());

app.post("/health-checkup", function (req, res) {
    //kidneys - [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kidney length is " + kidneyLength);
});

app.listen(3000);

//this is bad, your backend server is exposed to the world, anyone can hit it with any route 
//this is why you need input validation

//global catches
app.use(function(err,req,res,next){//error handling middlewares
    errorCount++;
    res.json({
        msg: "Sorry something is up"
    })
});

//better input validation using zod
//npm install zod

const zod = require('zod');

const schema = zod.array(zod.number());

app.post("/health-checkup", function (req, res) {
    //kidneys - [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({msg: "input is invalid"})
    } else {
        res.send({response})
    }
});

/*
{
    email: string => email
    password: atleast 8 letters
    country: "IN", "US"
}
*/

const schema2 = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})


//simple zod understanding
const zod = require("zod"); 

// if this is an array of number with atleast 1 input, return true, else return false 
function validateInput(obj) { 
    const schema = z.object({ 
    email: z.string().email(), 
    password: z.string().min(8)
    }) 

    const response = schema.safeParse(arr); 
    console.log(response); 
} 


validateInput({
    email: "harry@gmail.com",
    password: "2334ffwefwe"
}); 

//
// { 
//email => string => should look like email 
//password => should have 8 letters 
// } 

app.post("/login", function (req, res) {
    const data = req.body;
    const response = validateInput(data);
    if(!response.success){
        res.status(411).json({msg: "input is invalid"})
    } else {
        res.send({response})
    }
});

//Coercion means to convert the input to the desired type
//zod can also do coercion