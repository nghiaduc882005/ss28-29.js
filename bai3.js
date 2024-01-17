//Viết chương trình khai báo chuỗi bất kỳ, xây dựng hàm có tham số là 1 chuỗi và kết quả trả về là số ký tự trong chuỗi đó ( không tính ký tự trống). Gọi hàm với chuỗi đã khai báo và in kết quả ra màn hình. 
function demSoKyTuTrongChuoi(chuoi) {
    let soKyTu = chuoi.replace(/\s/g, "").length;
    return soKyTu;
  }
  
  let myString = "Đây là một chuỗi bất kỳ để kiểm tra số ký tự.";
  
  console.log("Số ký tự trong chuỗi là: " + demSoKyTuTrongChuoi(myString));
  



