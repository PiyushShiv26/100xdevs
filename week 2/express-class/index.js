//creating a http server
//express
//node default library => no

const express = require('express');
const app = express();

function sum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}
//req, res => request, response
app.get('/', (req, res) => {
    const n = req.query.n;
    const ans = sum(n);
    //res.send(ans.toString());
    res.send(`Sum of first ${n} natural numbers is ${ans}`);
});

app.listen(3000);

//ifconfig
//localhost:3000    

//throw new Error('Not implemented');