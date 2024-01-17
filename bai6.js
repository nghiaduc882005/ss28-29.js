function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  let inputString = "chuỗi bất kỳ";
  let result = capitalizeFirstLetter(inputString);
  console.log(result);
  