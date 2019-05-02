var enableInput = function () {
    var btn = document.getElementById("btn-doimk");
    if (btn.textContent == "Đổi mật khẩu") {
        document.getElementById("mkc").disabled = false;
        document.getElementById("mkm").disabled = false;
        document.getElementById("xn").disabled = false;
        btn.textContent = "Lưu";
    }
    else {
        document.getElementById("mkc").disabled = true;
        document.getElementById("mkm").disabled = true;
        document.getElementById("xn").disabled = true;
        btn.textContent = "Đổi mật khẩu";
        alert("Mật khẩu đã được cập nhật");
    }
}