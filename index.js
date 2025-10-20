// const enableCamera = async () => {
//     try{
//         const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
//     }
// }
// window.onload = enableCamera;

// let num1 = 2;
// let num2 = '2';

// console.log(num1 == num2);
// console.log(num1 !== num2);

//Array methods
 let fruits = ['mango', 'banana', 'orange', 'apple'];
console.log(fruits);
//sort() - sorts the elements of an array in place and returns the sorted array
fruits.sort();
console.log(fruits);
//push() - adds an element to the end of an array
fruits.push('kiwi');
console.log(fruits);
//shift() - removes an element from the start of an array
fruits.shift();
console.log(fruits);
//unshift() - adds an element to the start of an array
fruits.unshift('pawpaw');
console.log(fruits);
//pop() - removes an element from the end of an array
//splice() - removes or replaces elements in an array
fruits.splice(2, 1, 'grape');
console.log(fruits);
//slice() - returns a shallow copy of a portion of an array into a new array object
fruits.slice(1, 3);
console.log(fruits);

//filter() - creates a new array with all elements that pass the test implemented by the provided function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//forEach() - executes a provided function once for each array element
numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Number: ${num}`);
})




