
// function arrayOfSum(numbers) {
//     var sum = 0;
//     for(var i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }

// var numbers = [45, 65, 78, 12, 3, 54, 65];

// console.log(arrayOfSum(numbers));

var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames + name
;
}
console.log(allNames)