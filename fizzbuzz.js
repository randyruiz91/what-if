const prompt = require('prompt-sync')();

const num = Number(prompt('Please enter a number. '));

if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzbuzz');
}

if (num % 3 === 0) {
    console.log('Fizz');
}

else if (num % 5 === 0) {
    console.log('buzz');
}

