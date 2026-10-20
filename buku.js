const hargaBukuNovel = 12000;
const hargaBukuKomik = 25000;

const jumlahBukuNovel = 10;
const jumlahBukuKomik = 7;

const totalHarga = (hargaBukuNovel * jumlahBukuNovel) + (hargaBukuKomik * jumlahBukuKomik);

let diskon = 0;
if (totalHarga >= 50000) {
    diskon = totalHarga * 0.20;
}

const totalBayar = totalHarga - diskon;
console.log("Harga Buku Novel:" , hargaBukuNovel * jumlahBukuNovel);
console.log("Harga Buku Komik:" , hargaBukuKomik * jumlahBukuKomik);
console.log("TotalHarga" , totalHarga);
console.log("Diskon" , diskon);
console.log("totalBayar" , totalBayar);