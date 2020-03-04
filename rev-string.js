// function reverseString(str) {
//     var reverse = '';
//     for(var i = 0; i < str.length; i++) {
//         var char = str[i];
//         reverse = char + reverse;
//     }
//     return reverse;
// }

// var statement = 'Hello Alien bhai brother';
// console.log(reverseString(statement));

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));