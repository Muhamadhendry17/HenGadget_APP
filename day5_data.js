let daftarProduk = [
  { id: 1, nama: "Kopi Susu Gula Aren", harga: 18000, kategori: "Minuman" },
  { id: 2, nama: "Roti Bakar Cokelat", harga: 15000, kategori: "Makanan" }
];
 
console.log("=== DATA AWAL ===");
console.log(daftarProduk);

const tambahProduk = (idBaru, namaBaru, hargaBaru, kategoriBaru) => {
  const produkBaru = {
    id: idBaru,
    nama: namaBaru,
    harga: hargaBaru,
    kategori: kategoriBaru
  };
  daftarProduk.push(produkBaru);
  console.log(`[SUKSES] Produk "${namaBaru}" berhasil ditambahkan!\n`);
};
 
tambahProduk(3, "Es Teh Manis", 5000, "Minuman");
tambahProduk(4, "Keripik Singkong", 12000, "Camilan");

// 3. FUNGSI MENGHAPUS PRODUK (DELETE)
const hapusProduk = (idProduk) => {
  const dataSebelumnya = daftarProduk.length;
 
  daftarProduk = daftarProduk.filter((produk) => produk.id !== idProduk);
 
  if (daftarProduk.length < dataSebelumnya) {
    console.log(`[SUKSES] Produk dengan ID ${idProduk} berhasil dihapus.\n`);
  } else {
    console.log(`[GAGAL] Produk dengan ID ${idProduk} tidak ditemukan.\n`);
  }
};
 
hapusProduk(2);

// 4. KONVERSI KE JSON
console.log(daftarProduk);               // format Object JavaScript
 
const dataJSON = JSON.stringify(daftarProduk, null, 2);
console.log(dataJSON);                   // format JSON (string)
 
const dataObjectKembali = JSON.parse(dataJSON);
console.log(dataObjectKembali[0].nama);  // akses properti nama data pertama
