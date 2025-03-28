//send requests using POSTMAN

const express = require("express");

const app = express();

function userMiddleware(req, res, next) {
    if(username !== "harkirat" || password !== "pass") {
        return res.status(403).json({ msg: "User doesn't exist" });
    }
    next();
}

function kidneyMiddleware(req, res, next) {
    if(kidneyId != 1 && kidneyId != 2) {
        return res.status(411).json({ msg: "wrong inputs" });
    }
    next();
}

app.use(userMiddleware);//if we want to apply this middleware to all the routes
app.use(express.json());//this is a built-in middleware

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    // do health checks here
    const kidneyId = req.query
    const username = req.headers.username;
    const password = req.headers.password;

    // do something with kidney here
    res.send("Your heart is healthy");
}
);

/*
Other use cases of middleware (assignment) =
1. Count the number of requests
2. Find the average time your server is taking to handle requests
*/

//Count the number of requests
function  countRequest(req, res, next) {
    console.log("Request count: ", countRequest.count);
    countRequest.count++;
    next();
}
countRequest.count = 0;

//Find the average time your server is taking to handle requests
function averageTime(req, res, next) {
    const start = Date.now();
    res.on("finish", () => {
        const end = Date.now();
        const time = end - start;
        averageTime.totalTime += time;
        averageTime.count++;
        console.log("Average time: ", averageTime.totalTime / averageTime.count);
    });
    next();
}
averageTime.totalTime = 0;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//we can use multiple middlewares in a single route

const middle = [userMiddleware, kidneyMiddleware];

app.get("/health-checkup", middle, function (req, res) {
    // do something here
});