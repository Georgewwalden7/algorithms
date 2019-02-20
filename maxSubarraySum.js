const maxSubarraySum = (arr, steps) => {
    if (arr.length < steps) {
      return null;
    }
    let currentSum = 0;
    for (let i = 0; i < steps; i++) {
        currentSum = currentSum + arr[i];
    }
    let maxSum = currentSum;
    for (let i = 0; i < arr.length; i++) {
        max
    }
    return maxSum;
}