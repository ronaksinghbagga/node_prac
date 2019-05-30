//Function statement------------
// function hi(){
//     console.log("Hello");
// }
// hi();

//Function expression------------
// var hi = function(){
//     console.log("World");
// };
// hi();

//Prac-----------------------

function callBack(func){
    func();
}
var helloWorld = function(){
    console.log('Hi');
};
callBack(helloWorld);