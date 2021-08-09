function seerToMon(seerAmount) {
    if (typeof seerAmount == "string" || seerAmount < 0) {
        // in this condition we will check data type 
        return "value is not valid. accept only positive number ";
    }
    let monAmount = seerAmount / 40; // we know 40 seer == 1 mon thats why seerAmount / 40
    return monAmount;
}
console.log(seerToMon(120));