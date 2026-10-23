const namaProduk = "Tahu Pedas Nyoledat Ngajoakk";
const hargaProduk = 15000;
const stokProduk = 10;
const kategoriProduk = "Makanan Pedas";

const tersedia = stokProduk > 0;
console.log("Nama Produk:" + namaProduk);
console.log("Harga Produk:" + hargaProduk);
console.log("Stok Produk:" + stokProduk);
console.log("Kategori Produk:" + kategoriProduk);
console.log("Tersedia:" + tersedia);

let statusStok;
if (stokProduk> 10) {
    statusStok = "Stock Masih Ready Cikk";
} else if (stokProduk > 5) {
    statusStok = "Stock terbatas!";
}else{
    statusStok = "Stock Habis!";
}

console.log(`Status Keterangan Stock adalah: ${statusStok}`);

const JumlahBeli = 2;
const totalHarga = hargaProduk * JumlahBeli;

let totalDiskon = 0;
if (totalHarga >= 50000){
    totalDiskon = totalHarga * 0.1;
    console.log("Selamat anda mendapatkan diskon 10%!")
}else if(totalHarga >= 25000){
    totalDiskon = totalHarga * 0.05;
    console.log("Selamat anda mendapatkan diskon 5%!")
}else{
    totalDiskon = 0;
}

const TotalBayar = totalHarga - totalDiskon;

console.log('=== SIMULASI TRANSAKSI PEMBELI ===');
console.log(`Jumlah Beli: ${JumlahBeli} Pcs`);
console.log(`Total Harga: Rp.${totalHarga}`);
console.log(`Total Diskon: Rp.${totalDiskon}`);
console.log(`Total Bayar: Rp.${TotalBayar}`);