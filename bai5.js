let mangChuoi = ["chuoi1", "chuoi2", "chuoi3", "chuoi4"];

function timKiemChuoiTrongMang(mang, chuoiCanTim) {
  let ketQua = mang.filter(function(chuoi) {
    return chuoi.includes(chuoiCanTim);
  });
  return ketQua;
}

let chuoiNhap = prompt("Nhập vào chuỗi cần tìm kiếm:");

let ketQuaTimKiem = timKiemChuoiTrongMang(mangChuoi, chuoiNhap);
console.log(ketQuaTimKiem);
