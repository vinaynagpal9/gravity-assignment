// DSA Given an array of integers, return the length of the longest increasing subsequence. A subsequence is a
//  sequence that can be derived from the array by deleting some or no elements without changing the order of the
//   remaining elements. For example, given the array [10, 9, 2, 5, 3, 7, 101, 18], the longest increasing subsequence
//    is [2, 3, 7, 101], and its length is 4.


function liSubsequence(arr){
    if (arr.length === 0) return 0;

    const dp = Array(arr.length).fill(1);
    
    for (let i = 1; i < arr.length; i++) {
        // console.log("i:", i)
      for (let j = 0; j < i; j++) {
        // console.log('arr[i]',arr[i], 'arr[j]',arr[j], "====", i, j, arr[i] > arr[j])
        if (arr[i] > arr[j]) {
            // console.log("-----",dp[i])
            dp[i] = Math.max(dp[i], dp[j] + 1);
            // console.log("-----mmm",dp[i])
        }
      }
    }
  
    // console.log("dp end:", dp)
    return Math.max(...dp);
}

const array = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(liSubsequence(array)); // Output: 4