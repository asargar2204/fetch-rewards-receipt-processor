import { v4 as uuidv4 } from 'uuid';
const receipts = {};

export const calculatePoints = async function (receiptJSON) {
    const id = uuidv4();
    let points = 0;
    points += calculateAlphaNumericChars(receiptJSON.retailer);
    points += dollarTotalPoints(receiptJSON.total);
    points += pairItems(receiptJSON.items);
    points += trimDescription(receiptJSON.items);
    points += isDateOdd(receiptJSON.purchaseDate);
    points += isTimeBetweenSpecifiedHours(receiptJSON.purchaseTime);
    receipts[id] = {"points" : points};
    return id;
}   

export const fetchTotalPointsFromReceiptId = function(id) {
    if(receipts[id]) {
        return receipts[id];
    } else {
        return null;
    }
}

export const calculateAlphaNumericChars = (retailer) => {
    const alphaNumericRegex = /[a-zA-Z0-9]/g;
    const matches = retailer.match(alphaNumericRegex);
    return matches.length;
}

export const dollarTotalPoints = (dollarAmount) => {
    const cents = dollarAmount * 100;
    let pointsForDollars = 0;
    if (cents % 100 === 0) {
        pointsForDollars+= 50;
    }
    if (cents % 25 === 0) {
        pointsForDollars += 25;
    }
    return pointsForDollars;
}

export const pairItems = (items) => {
    const itemPairs = Math.floor(items.length/2) * 5;
    return itemPairs;
}

export const trimDescription = (descriptions) => {
    let pointsForDescription = 0;
    descriptions.forEach(description => {
        const trimmedDesc = description["shortDescription"].trim();
        if (trimmedDesc.length % 3 === 0 && trimmedDesc.length > 0) {
            const price = Math.ceil(description["price"] * 0.2);
            pointsForDescription += price;
        } 
    });
    return pointsForDescription;
}

export const isDateOdd = (receiptDate) => {
    let pointsForDate = 0;
    const day  = receiptDate.split("-")[2];
    const numericValue = parseInt(day, 10);
    if (numericValue % 2 === 1) {
        pointsForDate += 6;
    }
    return pointsForDate;
}

export const isTimeBetweenSpecifiedHours = (purchaseTime) => {
    const [hours, minutes] = purchaseTime.split(':').map(Number);
    let pointsForTime = 0;
    const currentTime = new Date();
    currentTime.setHours(hours, minutes, 0);

    const startTime = new Date().setHours(14, 0, 0);
    const endTime = new Date().setHours(16, 0, 0);
    const isBetween2And4 = currentTime >= startTime && currentTime <= endTime;
    if (isBetween2And4) {
        pointsForTime += 10;
    }
    return pointsForTime;
}
