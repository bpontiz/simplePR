import askData from "./askData.js";

function dataSum(number1, number2) {
    console.log("The product is:",number1 * number2);

    return;
};

const [number1, number2] = askData();

dataSum(number1, number2);