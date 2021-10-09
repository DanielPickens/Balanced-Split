function balancedSplitExists(arr) {
  if (arr == null || arr.length == 0) {
      return false;
    }
    // Write your code here
    let totalLeft = 0, totalRight = 0;
    arr.sort();
    let i = 0, j = arr.length - 1;
    while (i <= j) {
      totalRight += arr[j--];
      while (i <= j && totalLeft < totalRight) {
        totalLeft += arr[i++];
      }
    }
    return totalLeft == totalRight && arr[i - 1] < arr[j + 1];
  
}

