
function unshiftTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
      arr.unshift(i);
    }
    return arr;
  }
  let arr = [20, 10, 3, 5, 7, 100, 140, 10000, 1010101, 22222, 1010, 1111]
  startTime = Date.now()
  for(let n = 0; n < arr.length; n++){
   unshiftTest(10000);
   endTime = Date.now();
   console.log(`${endTime - startTime}`);
  }
  //linear time complexity;
