
var tb = document.getElementById("tbl");
for (let i = 1; i < tb.rows.length; i++) {
    tb.rows[i].onclick = function () {
        document.getElementById("stt").value = this.cells[0].innerHTML;
        document.getElementById("cm").value = this.cells[1].innerHTML;
        document.getElementById("cmc1").value = this.cells[2].innerHTML;
        document.getElementById("cmc2").value = this.cells[3].innerHTML;
        document.getElementById("sbv").value = this.cells[4].innerHTML;
        document.getElementById("btv").value = this.cells[5].innerHTML;
    };
}