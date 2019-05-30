var readline = require('readline');
var rl = readline.createInterface({input : process.stdin,
                    output : process.stdout});

let n1 = Math.floor((Math.random() *100) +1);
let n2 = Math.floor((Math.random() *100) +1);
let answer = n1 + n2;

rl.question(`What is ${n1} + ${n2} \n`,
(userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }
    else {
        rl.setPrompt('Incorrect response plz try again \n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Your answer of ${userInput} is incorrect try again \n `);
                rl.prompt();
            }
        });
    }
});
rl.on('close',()=>{
    console.log("Correct!!!");
})