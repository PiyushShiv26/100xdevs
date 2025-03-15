/*  File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
const cleanedFile = file.replace(/\s+/g, ' ');  
fs.writeFileSync('input.txt', cleanedFile);
console.log('File cleaned successfully!');