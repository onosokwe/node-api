const readline = require('readline')
// list out the methods in this class
// actually this class extends the event class
console.log(readline)

// lets use the createInterface method to 
// create an interface to work with
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// lets generate two random numbers
let myrandom = (Math.random() * 10) + 1; // generate number
let a = Math.floor(myrandom); // round it down to whole number
let b = Math.floor(myrandom); // round it down to whole number
let answer = a + b; // set variable answer to result of adding two numbers

// lets use our interface created
// it has several methods we will use
// question, close, setPrompt, prompt, on
rl.question(`What is ${ a } + ${ b }? \n`, (userInput) => {
    if(userInput.trim() == answer){
        rl.close();
    } else {
        rl.setPrompt('Incorrect response. Try again \n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if(userInput.trim() == answer){
                rl.close();
            } else {
                rl.setPrompt(`Your answer of ${ userInput } is incorrect \n`);
                rl.prompt();
            }
        })
    }
});

// lets call the close method to close the interface
rl.on('close', () => {
    console.log('Answer correct!')
})