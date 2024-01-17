function countOccurrences(str, char) { // số lần suất hiện chuỗi và ký tự
    let count = 0;
    for (let i = 0; i < str.length; i++) { // độ dài chuỗi
       if (str.charAt(i) === char) {
         count++;
       }
    }
    return count; // đếm
   }
   
   let inputString = prompt("Nhập vào 1 chuỗi:"); 
   let inputChar = prompt("Nhập vào 1 ký tự bất kỳ:");
   
   // Gọi hàm countOccurrences(số lần xuất hiện) với chuỗi và ký tự đã nhập và in kết quả ra màn hình
   let result = countOccurrences(inputString, inputChar); // chuỗi và ký tự --> ra kết quả
   alert("Ký tự '" + inputChar + "' xuất hiện " + result + " lần trong chuỗi.");