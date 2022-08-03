// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
const numbers = [2, 4, 6, 8, 10];
const numPlus2 = numbers.map((num) => num + 2);

console.log(numbers);
console.log(numPlus2);
// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
const foodOrders = [
  {
    item: "taco",
    price: 2.5,
  },
  {
    item: "burrito",
    price: 4.5,
  },
  {
    item: "nachos",
    price: 7.5,
  },
];
console.log(foodOrders);
const totalCost = foodOrders.reduce((prev, current) => prev + current.price, 0);

console.log(totalCost);
// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
const animals = ["zebra", "lion", "cat", "monkey", "lemur"];
const longNames = animals.filter((word) => word.length > 4);
console.log(longNames);
