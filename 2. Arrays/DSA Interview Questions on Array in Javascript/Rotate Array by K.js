function Rotate_Array_by_K(array, k) {
  let size = array.length;

  if (k > size) k = k % size;

  const rotated = array.splice(size - k, k);

  array.unshift(...rotated)

  return array

}

console.log(Rotate_Array_by_K([1,4,2,8,9],2));

// second approach

function Rotate_Array_by_K(array, k) {
  let size = array.length;
  if (k > size) k = k % size;

  rev(array, 0, array.length - 1);
  rev(array, 0, k - 1);
  rev(array, k, array.length - 1);

  return array;
}

function rev(array, left, right) {
  while (left < right) {
    let temp = array[left];
    array[left++] = array[right];
    array[right--] = temp;
  }
  // return temp
}
console.log(Rotate_Array_by_K([1, 4, 2, 8, 9], 2));
