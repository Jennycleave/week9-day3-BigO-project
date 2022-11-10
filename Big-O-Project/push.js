

// function randomNumberArr(max) {
//     const res = new Array();

//     for (let i = 0; i <= max; i++) {
//       const randomNumber = Math.floor(Math.random() * Math.floor(max));

//       res.push(randomNumber);
//     }

//     return res;
//   }


function pushTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }

   let increment = 100000
   for (let n = increment; n <= 10 * increment; n += increment) {
    startTime = Date.now();
    pushTest(n);
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
}
