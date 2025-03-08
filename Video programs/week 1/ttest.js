function countVowels(str) {
    let newstr = str.toLowerCase()
    const vw = ['a','e','i','o','u']
    let  n=0
    for(let i of newstr){
      if (vw.includes(i))
        n++
    }
    return n
}

console.log(countVowels("hello"))