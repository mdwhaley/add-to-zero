// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:
for (i = 0; i < (array.length - 1); i++) {
    for (a = (i + 1); a < array.length; a++) {
        if (array[i] + array[a] === 0) {
            console.log('true');
        } else {
            console.log('false')
        }
    }
}