function totalSales(shartQuantity, pantQuantity, shoesQuantity) {
    if (shartQuantity < 0 || pantQuantity < 0 || shoesQuantity < 0) {
        //data type check for negitive number
        return "negitive quantity not accepted";
    }
    if (typeof shartQuantity == "string" || typeof pantQuantity == "string" || typeof shoesQuantity == "string") {
        // data type check for string
        return "quantity not valid plz enter number"
    }
    //price * quantity
    let shartPrice = 100 * shartQuantity;
    let pantPrice = 200 * pantQuantity;
    let shoesPrice = 500 * shoesQuantity
    // total Amount
    let totalAmount = shartPrice + pantPrice + shoesPrice;
    return totalAmount;
}
console.log(totalSales(2, 4, 1));
