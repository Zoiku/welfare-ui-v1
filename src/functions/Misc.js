export const arrayHas = (array, value) => array.includes(value);
export const arrayNotEmpty = (array) => array.length > 0;
export const arraySum = (array) => array.reduce((a, b) => a + b);
export const difference = (a, b) => a - b;
export const format = (input) => {
    if (isNaN(input)) return "Invalid input";
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export const getRandomElementFromArray = (arr) => {
    return arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;
}