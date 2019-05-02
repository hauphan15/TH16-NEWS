
var tb = document.getElementById("tbl");
for (let i = 1; i < tb.rows.length; i++) {
    tb.rows[i].onclick = function () {
        document.getElementById("stt").value = this.cells[0].innerHTML;
        document.getElementById("email").value = this.cells[1].innerHTML;
        document.getElementById("ht").value = this.cells[2].innerHTML;
        document.getElementById("ns").value = this.cells[3].innerHTML;
        document.getElementById("cmnd").value = this.cells[4].innerHTML;
        document.getElementById("sdt").value = this.cells[5].innerHTML;
    };
}