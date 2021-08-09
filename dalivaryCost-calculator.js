

function deliveryCost(tShartQuantity) {
    //error handeing condition
    if (typeof tShartQuantity == "string" || tShartQuantity < 0) {
        //in this condition check data type and value type
        return "sorry string or negitive value are not accepted";
    }

    if (tShartQuantity <= 100) {
        // when highest product is 10 then this condition will be wark
        let totalDeliveryCost = tShartQuantity * 100;
        return totalDeliveryCost;
    }
    else if (tShartQuantity <= 200) {
        //  when highest product is 20 then this condition will be wark
        let totalDeliveryCost = 100 * 100 + (tShartQuantity - 100) * 80;
        return totalDeliveryCost;
    }
    else if (tShartQuantity > 200) {
        //  when product is more then 20 then this condition will be wark
        let totalDeliveryCost = 100 * 100 + 100 * 80 + (tShartQuantity - 200) * 50;
        return totalDeliveryCost;
    }

}
console.log(deliveryCost(201));



