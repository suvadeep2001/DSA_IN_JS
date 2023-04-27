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

const newArr = flatEx.flat(2);

console.log(newArr);


// reverse

// const newArr = nums1.reverse()

// console.log(newArr);


// sort

// const newArr = nums1.sort()

// console.log(newArr);
