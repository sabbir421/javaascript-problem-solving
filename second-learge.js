var secondMax = function (arr) {     
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr); 
};

var arr = [20, 120, 111, 215, 54, 78]; 
var max2 = secondMax(arr);
console.log(max2);