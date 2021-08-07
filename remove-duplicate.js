// var newArray = []
// function removeDuplicate(names) {
    
//     for (let i = 0; i < names.length; i++) {
//         const element = names[i];

       
//         if (newArray.indexOf(element) == -1) {
//             newArray.push(element);
            
//         }
        
//     }
//     return newArray;
// }
// var result = removeDuplicate(["abul","kabul","sabul","mabul","abul"]);
// console.log(result);

var result =[];
function removeDuplicate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (result.indexOf(element)== -1) {
            result.push(element);
        }
        
    }
    return result;
}
let finalNumber = removeDuplicate([12,20,20,10,15,10,14]);
console.log(finalNumber);