// Task 1
/**
 * The `generateRandomPassword` function generates a random password of the specified length.
 *
 * length - the length of the password.
 *
 * Returns a random password.
 */
function generateRandomPassword(length) {
  let password = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters.charAt(randomIndex);
    password += randomCharacter;
  }
  return password;
}

console.log("Task: 1 ==============================");
console.log(generateRandomPassword(8));
// Outputs a random password of 8 characters.

// Task 2
/**
 * The `calculateCircleArea` function calculates the area of a circle based on its radius.
 *
 *  radius - the radius of the circle.
 * Returns: the area of the circle.
 */
function calculateCircleArea(radius) {
  if (!(typeof radius === 'number')) {
    console.log("Error: the radius must be a number");
    return null;
  }
  let area = Math.PI * Math.pow(radius, 2);
  return area;
}

console.log("Task 2 ==============================");
console.log(calculateCircleArea(5));
// Outputs the area of a circle with a radius of 5, for example 78.53981633974483.

// Task 3
/**
 * The `findMinMax` function finds the minimum and maximum numbers in an array.
 *
 *  numbers - an array of numbers.
 * Returns: an object containing the minimum and maximum numbers.
 */
function findMinMax(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Error: the parameter must be an array");
    return null;
  }
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return { min, max };
}

console.log("Task 3 ==============================");
console.log(findMinMax([5, 2, 9, 1, 5, 6, 7, 8]));
// Outputs an object containing the minimum (1) and maximum (9) numbers.

// Task 4
/**
 * The `calculateHypotenuse` function calculates the length of the hypotenuse of a right triangle given the lengths of its two sides.
 *
 *  a - the length of the first side.
 *  b - the length of the second side.
 * Returns: the length of the hypotenuse.
 */
function calculateHypotenuse(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Error: the lengths of the sides must be numbers");
    return null;
  }
  let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return c;
}

console.log("Task 4 ==============================");
console.log(calculateHypotenuse(3, 4));
// Outputs the length of the hypotenuse for a right triangle with sides of length 3 and 4, which is 5.

// Task 5
/**
 * The `roundObjectValues` function rounds the values of all numerical properties in an object.
 *
 *  obj - the object to process.
 *  Returns: an object with rounded values of numerical properties.
 */
function roundObjectValues(obj) {
  if (typeof obj !== "object" || obj === null) {
    console.log("Error: the argument must be an object");
    return null;
  }
  const entries = Object.entries(obj);
  const roundEntries = entries.map(([key, value]) => {
    if (typeof value === 'number') {
      return [key, Math.round(value)];
    } else {
      return [key, value];
    }
  });
  return Object.fromEntries(roundEntries);
}

console.log("Task 5 ==============================");
const myObject = {
  a: 3.5,
  b: 2.2,
  c: "not a number",
  d: 4.9,
};
console.log(roundObjectValues(myObject));
// Outputs:
// { a: 4, b: 2, c: "not a number", d: 5 }

// Task 6
/**
 * The `calculateVolumeCylinder` function calculates the volume of a cylinder given its radius and height.
 *
 *  radius - the radius of the cylinder's base.
 *  height - the height of the cylinder.
 * Returns: the volume of the cylinder.
 */
function calculateVolumeCylinder(radius, height) {
  if (typeof radius !== "number" || typeof height !== "number") {
    console.log("Error: the radius and height must be numbers");
    return null;
  }
  const v = Math.ceil(Math.PI * Math.pow(radius, 2) * height);
  return v;
}

console.log("Task 6 ==============================");
console.log(calculateVolumeCylinder(3, 5));
// Outputs 142

// Task 7
/**
 * The `sumPositiveNumbers` function calculates the sum of positive numbers in an array.
 *
 * numbers - an array of numbers.
 * Returns: the sum of positive numbers.
 */
function sumPositiveNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Error: the argument must be an array of numbers");
    return null;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (Math.sign(numbers[i]) === 1) {
      sum += numbers[i];
    }
  }
  return sum;
}

console.log("Task 7 ==============================");
console.log(sumPositiveNumbers([-5, 3, 2, -1, 7, -6]));
// Outputs 12
// Task 8
/**
 * The `getFractionalPart` function returns the fractional part of a number.
 * num - the number.
 * Returns: the fractional part of the number.
 */
function getFractionalPart(num) {
  if (typeof num !== "number") {
    console.log("Error: the input argument must be a number.");
    return null;
  }
  let integerPart = Math.trunc(num);
  let fractionalPart = num - integerPart;
  fractionalPart = Math.fround(fractionalPart);
  return fractionalPart;
}

console.log("Task 8 ==============================");
console.log(getFractionalPart(12.34567));
// Outputs the fractional part of the number, for example 0.34567001461982727

// Task 9
/**
 * The `compareAndRound` function compares two numbers and returns the largest number rounded to the nearest integer.
 *
 *  num1 - The first number.
 *  num2 - The second number.
 *  Returns: The largest number rounded to the nearest integer.
 */
function compareAndRound(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Error: both arguments must be numbers.");
    return null;
  }
  const maxNumber = Math.max(num1, num2);
  const roundedNumber = Math.round(maxNumber);
  return roundedNumber;
}

console.log("Task 9 ==============================");
console.log(compareAndRound(13.4, 15.7));
// Outputs 16.

// Task 10
/**
 * The `estimateInvestment` function estimates the profit from an investment with a fixed annual interest rate over a specified number of years.
 *
 *  principal - The initial investment amount.
 *  interestRate - The annual interest rate in decimal form (e.g., 5% = 0.05).
 *  years - The number of years.
 *  Returns: An estimate of the investment's profit.
 */
function estimateInvestment(principal, interestRate, years) {
  if(typeof principal !== 'number' ||
    typeof interestRate !== 'number' ||
    typeof years !== 'number'
  ){
    console.log("Error: all arguments must be numbers.");
    return null;
  }
  const investment = Math.round(principal * Math.pow(1 + interestRate, years));
  return investment;
}

console.log("Task 10 ==============================");
console.log(estimateInvestment(1000, 0.05, 5));
// Outputs 1276.

// Task 11
/**
 * The `isTotalPriceExceedsMaxPrice` function takes an array of objects {price, title} and a maxPrice.
 * Each object contains a `price` property as a decimal number.
 * The function calculates the sum of all prices (totalPrice), converts totalPrice and maxPrice using Math.fround,
 * and checks if totalPrice exceeds maxPrice.
 *
 * products - an array of objects {price, title}.
 * maxPrice - the maximum amount.
 * Returns whether totalPrice exceeds maxPrice.
 */
function isTotalPriceExceedsMaxPrice(products, maxPrice) {
  if (!Array.isArray(products)) {
    console.log("Error: the 'products' argument must be an array.");
    return null;
  }

  if (typeof maxPrice !== "number") {
    console.log("Error: the 'maxPrice' argument must be a number.");
    return null;
  }
  let totalPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price;
  });
  totalPrice = Math.fround(totalPrice);
  maxPrice = Math.fround(maxPrice);
  return totalPrice > maxPrice;
}

console.log("Task 11 ==============================");
let products = [
  { title: "Product 1", price: 0.4 },
  { title: "Product 2", price: 0.23 },
  { title: "Product 3", price: 0.109 },
  { title: "Product 4", price: 0.7564 },
  { title: "Product 5", price: 0.33456 },
  { title: "Product 6", price: 0.897654 },
];
let maxPrice = 3.567894;
console.log(isTotalPriceExceedsMaxPrice(products, maxPrice));
// Outputs: false
