var http = require('http');
var fs = require('fs');


//Below logic will output in buffer (a single buffer).
// If the file size is large it will throw an error that file size is too large to handle as if 
// though it takes it the buffer will overflow after some point of time which is a loss to OS and the 
// data stored on HD, as known in ISS buffer overflow attack to shutdown oponents Pc.

// var myReadFile = fs.readFile(__dirname + '/sampleText.txt', (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

//-------------------------------------------------------------------------------

//While here it reads the file in streams so, whatever the file size is it will not overflow
// Or will not throw any kind of error, as it will divide the large file into chunks that are 
// also called buffers 

var myReadStream = fs.createReadStream(__dirname + '/sampleText.txt', 'utf8' );
var myWriteStream = fs.createWriteStream(__dirname + '/sampleText2.txt');



myReadStream.on('data', function(chunk){
    console.log('--------------------------------------New Chunk received---------------------------------------------------');
    myWriteStream.write(chunk);
});

//if we define utf8 it will shows us the actual data else it display the data in hexadecimal values
