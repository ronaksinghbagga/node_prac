//This below code will work synchronously--------------------
// var fs = require('fs');

// var read = fs.readFileSync('readme.txt','utf8');

// console.log(read);
// console.log('test');

//This below code will work asynchronously---------------------

var fs = require('fs');
fs.readFile('readme.txt','utf8',function(err, data){
    console.log(data);

} );
console.log('test');