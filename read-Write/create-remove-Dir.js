// //Create and remove synchronously----------------------
// // var fs = require('fs');
// // fs.mkdirSync('stuff');
// // fs.rmdirSync('stuff');

// //Create and remove asynchronously----------------------
// var fs = require('fs');
// // fs.mkdir('stuff',function(){
// //     fs.readFile('readme.txt','utf8',function(err, data){
// //         fs.writeFile('./stuff/writeMe.txt', data, function(err,data2){});
// //     });
// // });

// //OR--------------------

// fs.readFile('readme.txt', 'utf8', function(err, data){
//     fs.mkdir('stuff',function(err, data1){
//         fs.writeFile('./stuff/writeme.txt', data, function(err, data2){});
//     });
// });