function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
console.log(time1);

addUpTo(1000000000);

var time2 = performance.now();
console.log(time2);

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)