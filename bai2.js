//Viết chương trình khai báo mảng gồm các thành phần ngẫu nhiên, xây dựng hàm nhận có tham số là 1 mảng và kết quả trả về là phần tử có độ dài lớn nhất trong mảng đó. Gọi hàm với mảng đã khai báo và in kết quả ra màn hình. javascript
function maxLength(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    return max;
}

let randomArray = ["apple", "banana", "orange", "strawberry", "blueberry"];

console.log("Phần tử có độ dài lớn nhất trong mảng là: " + maxLength(randomArray));
