let a = 1;
console.log(a);

fs.readFile("a.txt", "utf-8", (err,data)=>{
    console.log("data read from the file is ");
    console.log(data);
})

let ans = 0;
for (let i = 0; i<100; i++){
    ans += i;
}

console.log(ans);

/*What is async? - Asynchronous
1. Your javascript thread doesn’t have access to everything immediately
2. There are some tasks it needs to wait for */