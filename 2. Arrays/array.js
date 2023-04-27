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
console.log(newNumbers5); // return true or false if all items are less than 3

// 5.5 find

const newNumbers6 = numbers.find((item, index, numbers) => {
  return item > 5;
});
console.log(newNumbers6); // print the first item which is greater than 5

// 5.6 Spread Operators

const nums1 = [4, 5, 7, 8, 1, 6];
const nums2 = [1, 2, 8, 0];

console.log(...nums1,...nums2);

// 5.7 Rest Operators

function sum(...numbers) {
    return numbers
}

console.log(sum(nums1,nums2));

// More Array Methods

// concat

console.log(nums1.concat(nums2));

// slice

const newArr1 = nums1.slice(2,5)
console.log(newArr1); // start index to last_index - 1
console.log(nums1.slice(-2)); // last index 2 elements

// Splice

nums1.splice(1,4)
console.log(nums1);

// slice makes a copy of the array but splice make changes in original array

console.log(nums1.fill(0,2));

// indexOf

console.log(nums1.indexOf(7));

// Flat

const flatEx = [1, 2, [3, 4, 5], [[7, 8, 9, 1]], 4, 5];

const newArr2 = flatEx.flat(2);

console.log(newArr2);


// reverse

const newArr3 = nums1.reverse()

console.log(newArr3);


// sort

const newArr4 = nums1.sort()

console.log(newArr4);
