const prompt = require('prompt-sync') ();

const age = Number(prompt('How old are you? '));
if (age < 16) {
    console.log("You can't drive.");
} 

else if (age === 16) {
    console.log("You can drive but not vote.");
}

else if (age === 17) {
    console.log("You can drive but not vote.");
}

else if (age === 18) {
    console.log("You can vote but not rent a car.");
}

else if (age < 24) {
    console.log("You can vote but not rent a car.");
}

else if (age === 24) {
    console.log("You can vote but not rent a car.");
}

else if (age === 25) {
    console.log("You can do pretty much anything.");
}

else if (age > 25) {
    console.log("You can do pretty much anything.");
}
