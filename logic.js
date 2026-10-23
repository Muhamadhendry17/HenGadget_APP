// Variabel untuk menyimpan data produk
const namaMenu1 = "Tahu Pedas Nyoledat";
const kategoriMenu1 = "makanan";
const deskripsiMenu1 = "Tahu dengan rasa pedas yang bikin nagih";
const hargaMenu1 = 12000;
const jumlahMenu1 = 10;

console.log("=== Data Produk ===");
console.log("Menu 1: " + namaMenu1);
console.log("Kategori Menu 1: " + kategoriMenu1);
console.log("Deskripsi Menu 1: " + deskripsiMenu1);
console.log("Harga Menu 1: " + hargaMenu1);
console.log("Jumlah Menu 1: " + jumlahMenu1);

//Data integer
const hargaMenu1Int = 12000;
const ratingMenu1 = 5;

console.log("=== Data Integer ===");
console.log("Harga Menu 1: " + hargaMenu1Int);
console.log("Rating Menu 1: " + ratingMenu1);

//Data string
const namaMenu1Str = "Tahu Pedas Nyoledat";

//Data boolean
const tersediaMenu1 = true;
const diskonMenu1 = false;

console.log("Data String: " + namaMenu1Str)
console.log("Data Boolean: " + tersediaMenu1)
console.log("Data Boolean: " + diskonMenu1)
//Data object
const menu1 = {
    nama: "Tahu Pedas Nyoledat",
    kategori: "makanan",
    deskripsi: "Tahu dengan rasa pedas yang bikin nagih",
    harga: 12000,
    jumlah: 10,
    rating: 5
};

console.log("=== Data Object ===");
console.log("Menu: " + menu1.nama);
console.log("Kategori: " + menu1.kategori);
console.log("Deskripsi: " + menu1.deskripsi);
console.log("Harga: " + menu1.harga);
console.log("Jumlah: " + menu1.jumlah);
console.log("Rating: " + menu1.rating);

//membuat variabel untuk menyimpan data pribadi
const nama = "Abdur Aziz";
const saldo = 2000000;
const loginDesil = true;
const alamat = null;
const desil = 10;

console.log("=== Data Personal ===");
console.log("Nama: " + nama);
console.log("Tipe Nama: " + typeof nama);
console.log("Saldo: " + saldo);
console.log("Tipe Saldo: " + typeof saldo);
console.log("Login Desil: " + loginDesil);
console.log("Tipe Login: " + typeof loginDesil);
console.log("Alamat: " + alamat);
console.log("Tipe Alamat: " + typeof alamat);
console.log("Desil: " + desil);
console.log("Tipe Desil: " + typeof desil);