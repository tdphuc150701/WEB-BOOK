//////////////////////////////////////////////////////////////////////////      regex dang nhap, dang ky
function ktTenAccDN() {
    let nameacc = document.getElementById("txtTenDN").value;
    if (nameacc.trim() === '') {
        document.getElementById("spTenDN").innerHTML = "Tên tài khoản đăng nhập không được trống !";
        return false;
    }
    if (nameacc != document.getElementById("txtTK").value) {
        document.getElementById("spTenDN").innerHTML = "Sai tên đăng nhập !";
        return false;
    }
    document.getElementById("spTenDN").innerHTML = "✅";
    return true;
}

function ktMKDN() {
    let pass = document.getElementById("pw").value;
    if (pass.trim() === '') {
        document.getElementById("spPass").innerHTML = "Mật khẩu không được trống !";
        return false;
    }
    if (pass != document.getElementById("pwDK").value) {
        document.getElementById("spPass").innerHTML = "Sai mật khẩu !";
        return false;
    }
    document.getElementById("spPass").innerHTML = "✅";
    return true;
}
///////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    txtTK = document.getElementById("txtTK");
    pwDK = document.getElementById("pwDK");
    rePass = document.getElementById("rePass");
    txtHoTen = document.getElementById("txtHoTen");
    dateDK = document.getElementById("dateDK");
    telPhone = document.getElementById("telPhone");
    emailDK = document.getElementById("emailDK");


    // Blur thì hiện thông báo
    txtTK.addEventListener("blur", function() {
        ktTenAccDK();
    });

    pwDK.addEventListener("blur", function() {
        ktMKDK();
    });
    rePass.addEventListener("blur", function() {
        ktXacNhanMKDK();
    });
    txtHoTen.addEventListener("blur", function() {
        ktTenDK();
    });
    txtTK.addEventListener("blur", function() {
        ktTenAccDK();
    });
    dateDK.addEventListener("blur", function() {
        ktDate();
    });
    telPhone.addEventListener("blur", function() {
        ktPhoneDK();
    });

    emailDK.addEventListener("blur", function() {
        ktEmailDK();
    });

   
}); 


function ktTenAccDK() {
    
        let nameacc = document.getElementById("txtTK").value;
        if (nameacc.trim() === '') {
            document.getElementById("spTenDK").innerHTML = "Tên tài khoản đăng ký không được trống !";
            return false;
        }
        document.getElementById("spTenDK").innerHTML = "✔";
        return true;
    
   
}

function ktMKDK() {
    let pass = document.getElementById("pwDK").value;
    let regexPass = /^\s*[a-zA-Z0-9,\s]+\s*$/;
    if (pass.trim() === '') {
        document.getElementById("spPassDK").innerHTML = "Mật khẩu không được trống !";
        return false;
    }
    if (!regexPass.test(pass)) {
        document.getElementById("spPassDK").innerHTML = "Mật khẩu không chứa kí tự đặc biệt: {}[]()^$.|*+?\-";
        return false;
    }
    document.getElementById("spPassDK").innerHTML = "✔";
    return true;
}

function ktXacNhanMKDK() {
    let passCheck = document.getElementById("rePass").value;
    if (passCheck.trim() === '') {
        document.getElementById("spRePassDK").innerHTML = "Xác nhận lại mật khẩu !";
        return false;
    }
    if (passCheck != document.getElementById("pwDK").value) {
        document.getElementById("spRePassDK").innerHTML = "Không đúng với mật khẩu đã nhập!";
        return false;
    }
    document.getElementById("spRePassDK").innerHTML = "✔";
    return true;
}

function ktTenDK() {
    let name = document.getElementById("txtHoTen").value;

    if (name.trim() === '') {
        document.getElementById("spNameDK").innerHTML = "Họ tên không được trống !";
        return false;
    }
    document.getElementById("spNameDK").innerHTML = "✔";
    return true;
}

function ktDate() {
    let date = document.getElementById("dateDK").value;
    if (date.trim() === '') {
        document.getElementById("spDate").innerHTML = "Ngày sinh không được trống !";
        return false;
    }
    document.getElementById("spDate").innerHTML = "✔";
    return true;
}

function ktPhoneDK() {
    let phone = document.getElementById("telPhone").value;
    // let regexPhone = /^[0-9]{10}$/;
    let regexPhone = /\+?(0|84)\d{9,10}/;
    if (phone.trim() !== '' && regexPhone.test(phone)) {
        document.getElementById("spPhone").innerHTML = "✔";
        return true;
    }
    document.getElementById("spPhone").innerHTML = "SĐT phải gồm 10 chữ số !";
    return false;
    // let tel = document.getElementById("telPhone").value;
    // let regexTel = /\+?(0|84)\d{9,10}/;
    // if(tel.trim() !== '' && regexTel.test(tel)){
    //     document.getElementById("spPhone")
    // }
    // var phone = $("#telPhone").value();
    // var regexPhone = /\+?(0|84)\d{9,10}/;
    // if(phone.trim !== '' && !regexPhone.text(phone)){
    //     $("spPhone").innerHTML("SĐT phải gồm 10 chữ số");
    //     return false;
    // }
    // $("spPhone").innerHTML("✔");
    // return true;
}

function ktEmailDK() {
    let email = document.getElementById("emailDK").value;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.trim() === '') {
        document.getElementById("spEmail").innerHTML = "Email không được trống !";
        return false;
    }
    if (!regexEmail.test(email)) {
        document.getElementById("spEmail").innerHTML = "Email không phù hợp !";
        return false;
    }
    document.getElementById("spEmail").innerHTML = "✔";
    return true;
}

///////////////////////////////////////////////////////////////////////////     btn dang nh, dang ky, huy
function dangkyModal() {
    if (!ktTenAccDK() || !ktMKDK() || !ktXacNhanMKDK() || !ktTenDK() || !ktDate() || !ktPhoneDK() || !ktEmailDK())
        return false;
    alert("Đăng ký thành công !");
    return true;
}

function dangnhapModal() {
    if (!ktTenAccDN() || !ktMKDN())
        return false;
    alert("Đăng nhập thành công !");
    // document.getElementById("modalDangnhap").onclose;
    return true;
}

function huyModal() {
    // xóa trắng form đăng ký
    document.getElementById("txtTK").value = null;
    document.getElementById("pwDK").value = null;
    document.getElementById("rePass").value = null;
    document.getElementById("txtHoTen").value = null;
    document.getElementById("dateDK").value = null;
    document.getElementById("telPhone").value = null;
    document.getElementById("emailDK").value = null;
    document.getElementById("spTenDN").innerHTML = "*";
    document.getElementById("spPass").innerHTML = "*";
    document.getElementById("spTenDK").innerHTML = "*";
    document.getElementById("spPassDK").innerHTML = "*";
    document.getElementById("spRePassDK").innerHTML = "*";
    document.getElementById("spNameDK").innerHTML = "*";
    document.getElementById("spDate").innerHTML = "*";
    document.getElementById("spPhone").innerHTML = "*";
    document.getElementById("spEmail").innerHTML = "*";
    // xóa trắng form đăng nhập
    document.getElementById("txtTenDN").value = null;
    document.getElementById("pw").value = null;
    document.getElementById("spTenDN").innerHTML = "*";
    document.getElementById("spPass").innerHTML = "*";
}

function refreshClock(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var days = new Array("Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy");
    var months = new Array("1","2","3","4","5","6","7","8","9","10","11","12")
    var am_pm;

    if(s < 10){
        s = "0" + s;
    }
    if (m < 10){
        m = "0" + m;
    }
    if (h > 12){
        h -= 12;
        am_pm = "PM";
    }
    else{
        am_pm = "AM";}
    if (h < 10) { h = "0" + h }

    document.getElementById('clock').innerHTML = days[day] +", "
        +date +"/" +months[month] +"/" +year +", " +h +":" +m +":" +s +" " +am_pm +" | " +"GMT+7 ";
    setTimeout("refreshClock()", 1000);
}