import askData from "./askData.js";

function dataDiv(number1, number2) {
    console.log("The division is:",number1 / number2);

    return;
};

const [number1, number2] = askData();

dataDiv(number1, number2);