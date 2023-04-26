// 1. declare an array

let arr1 = ["apple","banana","cherry"]
console.log(arr1[0]);

// 2. we can add obj too

let person = {
    name: "Suvadeep",
    age: 21
};

let arr2 = ["apple","banana","cherry"]

// 3. Add and Remove Elements

// 3.1 push (push elements at the end of array)

arr2.push("cold drink")

console.log(arr2);

// 3.2 pop (remove elements at the end of array)

arr2.pop()
arr2.pop()

console.log(arr2);

// 3.3 unshift (add elements at the first of array)

arr2.unshift("orange")

console.log(arr2);

// 3.4 shift (remove elements at the first of array)

arr2.shift()

console.log(arr2);

// 4. Loops

// 4.1 for loop

for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    console.log(element);
}

// 4.2 while loop

let i = 0;

while (i < arr2.length) {
    console.log(arr2[i]);
    i++;
}

// 5. Inbuilt Loop

const numbers = [4, 5, 8, 1, 6];

// 5.1 map

const newNumbers1 = numbers.map((item, index, numbers) => {
  return item + 1
});
console.log(newNumbers1);

// 5.2 filter

const newNumbers2 = numbers.filter((item, index, numbers) => {
  return item > 3;
});
console.log(newNumbers2); // only return the items which value is > 3

// 5.3 reduce

const newNumbers3 = numbers.reduce((prev, item) => {
  return prev + item;
}, 0);
console.log(newNumbers3);

// 5.4 some

const newNumbers4 = numbers.some((item, index, numbers) => {
  return item > 3;
});
console.log(newNumbers4); // return true or false


// 5.4 every

const newNumbers5 = numbers.every((item, index, numbers) => {
  return item > 3;
});
console.log(newNumbers5); // return true or false





