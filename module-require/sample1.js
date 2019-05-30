var count = function(args){
    return 'There are ' + args.length + " elements";
};

var sum = function(a,b){
    return `Sum is ${a+b}`;
};

var sum2 = function(d,c){
    return `Total is ${d*c}`;
};
// module.exports.count = count;
// module.exports.sum = sum;
// module.exports.sum2 = sum2;
//OR
module.exports = {
    count: count,
    sum: sum,
    sum2: sum2
};