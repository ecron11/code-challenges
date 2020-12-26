//This function takes an array of subarrays and will determine the largest number in each subarray
// and return an array of the largest values from each subarray.
function largestInArray(arr) {
    let largestNumArr = [];
    arr.forEach((subArr)=>{
      let largestNum = subArr[0];
      for (let i = 1; i < subArr.length; i++) {
        if (subArr[i] > largestNum) {
          largestNum = subArr[i];
        }
      }
      largestNumArr.push(largestNum);
      
    })
    return largestNumArr;
  }