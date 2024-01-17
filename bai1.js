// Hàm kiểm tra số chẵn lẻ
function kiemTraChanLe(number) {
    if (number % 2 === 0) {
      console.log(number + " là số chẵn");
    } else {
      console.log(number + " là số lẻ");
    }
  }
  
  let number1 = Math.floor(Math.random() * 100) + 1;
  let number2 = Math.floor(Math.random() * 100) + 1;
  let number3 = Math.floor(Math.random() * 100) + 1;
  
  kiemTraChanLe(number1);
  kiemTraChanLe(number2);
  kiemTraChanLe(number3);
  