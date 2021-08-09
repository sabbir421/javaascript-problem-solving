
function perfectFriend(frindList) {
    let perfectName = []; //empty array for store final value

    for (i = 0; i < frindList.length; i++) {
        // value of i =0 and loop condition depand on array length
        const element = frindList[i]; // list [i] swap into element

        if (typeof element != "string") {
            // this condition for check input type
            return "inside friendlist number are not accepted"
        }

        if (element.length == 5) {
            // this condition for check perfectFriend requirment
            perfectName = element;
            return perfectName;
        }

       
        }
          //if uper condition fail all time then return a message
          return "thir are no perfectFriend";
    }

console.log(perfectFriend(["sabbir", "shehab", "azim", "habul", "mabuls", "kabuls"]));