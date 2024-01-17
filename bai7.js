function findPairWithSum(arr, target) { //tìm cặp số trong mảng có tổng bằng với số được nhập vào.
    let numMap = {};
    for (let i = 0; i < arr.length; i++) {
      let complement = target - arr[i];
      if (numMap[complement] !== undefined) {
        return [complement, arr[i]];
      }
      numMap[arr[i]] = i;
    }
    return null;
  }
  
  let inputArray = [2, 4, 7, 11, 15];
  let userInput = 9;
  let result = findPairWithSum(inputArray, userInput);
  console.log(result);
  