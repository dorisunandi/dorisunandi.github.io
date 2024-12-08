let text1;
document.getElementById("but1").onclick=function(){
    text1 = document.getElementById("box1").value;
    document.getElementById("p1").textContent =`hi ${text1}`

}

const kurang = document.getElementById("kurang");
const reset = document.getElementById("reset");
const tambah = document.getElementById("tambah");
const hitungan = document.getElementById("hitungan");
let count = 0;

kurang.onclick = function(_kurang){
    count--;
    hitungan.textContent = count;
    
};
tambah.onclick = function (_tambah) {
    count++;
    hitungan.textContent = count;
};
reset.onclick = function (_reset){
    count=0;
    hitungan.textContent = count;
};
