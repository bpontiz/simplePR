export default function askData() {
    const number1 = parseInt(process.argv[2]);
    const number2 = parseInt(process.argv[3]);

    return [number1, number2];
};