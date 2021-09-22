const prompt = require('prompt-sync')();

const groupSize = Number(prompt('Please enter the class size. '));

if (groupSize % 3 === 0) {
    console.log(groupSize / 3, 'groups of threes');
}

else if (groupSize % 3 === 1) {
    console.log((groupSize - 4) / 3, 'groups of threes', 2, 'groups of twos');
}

else if (groupSize % 3 === 2) {
    console.log((groupSize - 2) / 3, 'groups of threes', 1, 'groups of twos');
}

else {
    console.log('error');
}