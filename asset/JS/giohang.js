function slSach() {
    let sluong = document.getElementById("soLuong").value;
    let regexSL = /^[0-9]{5}$/; // cho phép mua tối đa 5 cuốn sách
    if (sluong.trim() === '' && !regexSL.test(sluong)) {
        document.getElementById("thongtinMua1").innerHTML = "Chưa nhập thông tin mua !";
        return false;
    }
    document.getElementById("thongtinMua1").innerHTML = "✅";
    return true;
}

// function tlSach() {
//     let tloai = document.getElementById("theLoai").value;
//     let regexTL = /^[0-9]{5}$/;
//     if (tloai.trim() !== '' && !regexTL.test(tloai)) {
//         document.getElementById("thongtinMua2").innerHTML = "✅";
//         return true;
//     }
//     document.getElementById("thongtinMua2").innerHTML = "Chưa nhập thông tin mua !";
//     return false;
// }

function nutThemVaoGH() {
    if (!slSach())
        return false;
    location.assign("../HTML/gio-hang.html");
    KHoc1(this);
    return true;
}

// function dangky(){

//     if(!kiemtraHoten() || !kiemtraDienthoai())
//         return false;

//     let hoten = document.getElementById("txtHoten").value;
//     let ngaysinh = document.getElementById("txtNgaysinh").value;
//     let gioitinh = "Nữ";
//     if(document.getElementById("rdoNam").checked)
//         gioitinh = "Nam";
//     let dienthoai = document.getElementById("txtDienthoai").value;

//     let row = "<tr><td>"+(++i)+"</td><td>"+hoten+"</td><td>"+ngaysinh+"</td><td>"+gioitinh+"</td><td>"+dienthoai+"</td></tr>";

//     let tbl = document.getElementById("myTable");
//     // tbl.insertRow(0);
//     let newRow = tbl.insertRow(tbl.rows.length);
//     newRow.innerHTML = row;

//     return true;
// }
function KHoc1(x) {
    let image = src = "../IMG/img-khoahoc/hh1.png";
    let tensp = document.getElementById("tua1").innerHTML;
    let txtsl = document.getElementById("soLuong").value;
    let txtgia = document.getElementById("gia1").value;
    let xoa = document.getElementsByClassName(".btn-delete-sanpham").value;

    var tr = x.parentElement.parentElement;
    var td = tr.children;
    var cot2 = td[1].image.src; //cot1 là stt
    var cot3 = td[2].tensp.innerHTML;
    var cot4 = td[3].children[0].txtsl.value;
    var cot5 = td[4].txtgia.innerHTML;
    var thanhtien = parseInt(txtsl) * parseFloat(txtgia);

    let row = "<tr><td>" + (++i) + "</td><td>" + image + "</td><td>" + tensp + "</td><td>" + txtsl + "</td><td>" + txtgia + "</td><td>" + thanhtien + "</td><td>" + xoa + "</td></tr>";
    let tbl = document.getElementById("addDataRow");
    let newRow = tbl.insertRow(tbl.row.length);
    newRow.innerHTML = row;


}

function xoaGioHang() {

}