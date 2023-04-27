// second largest element in an array

// 1st approach

function second_largest_element_app_1(arr) {
    const newArr = Array.from(new Set(arr));
  
    newArr.sort((a, b) => {
     return b - a;
    });
  
    if(newArr.length >=2)
    return newArr[1] 
    else
    return -1;
  }
  
  console.log(second_largest_element_app_1([14, 10, 5, 8, 55, 0, 8, 9, 9, 5]));
  
  // 2nd approach
  
  function second_largest_element_app_2(arr) {
  
      let largest = Number.NEGATIVE_INFINITY;
      let second = Number.NEGATIVE_INFINITY;
  
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] > largest) {
              second = largest;
              largest = arr[i];
          }else if (largest != arr[i] && arr[i] > second) {
              second = arr[i]
          }
      }
      return second;
  }
  
  console.log(second_largest_element_app_2([14, 10, 5, 8, 55, 0, 8, 9, 9, 5]));