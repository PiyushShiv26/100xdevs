const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
    // do health checks here
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "harkirat" || password !== "pass") {
        return res.status(403).json({ msg: "User doesn't exist" });
    }

    if (kidneyId != 1 && kidneyId != 2) {
        return res.status(411).json({ msg: "wrong inputs" });
    }

    // do something with kidney here

    res.send("Your heart is healthy");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
