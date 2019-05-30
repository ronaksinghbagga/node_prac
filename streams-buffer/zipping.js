var fs = require('fs');
var  zlib = require('zlib');
var gzip = zlib.createGzip();
var gunzip = zlib.createGunzip();

//Zipping
// var readStream = fs.createReadStream('./abc.txt', 'utf8');
// var writeStream = fs.createWriteStream('./cba.txt.gz');

//UnZipping
var readStream = fs.createReadStream('./cba.txt.gz');
var writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);