const hargaBuku = 10000;
const hargaPulpen = 3000;

const jumlahBuku = 3;
const jumlahPulpen = 2;

const totalHarga = (hargaBuku * jumlahBuku) + (hargaPulpen * jumlahPulpen);

let diskon = 0;
if (totalHarga >= 10000) {
    diskon = totalHarga * 0.5;
}

const totalBayar = totalHarga - diskon;

console.log("TotalHarga" , totalHarga);
console.log("Diskon" , diskon);
console.log("totalBayar", totalBayar);