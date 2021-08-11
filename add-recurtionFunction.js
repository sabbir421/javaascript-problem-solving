
function addition(sum) {
   
    if (sum==1) {
        return 1;
    } 
   
  
   return addition(sum-1)+sum;
}


console.log(addition(5));