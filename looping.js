// const produk = [
//     { id: 1, nama: "laptop",
//         harga: 1200000, stok: 10 },
//     { id: 2, nama: "mouse",
//         harga: 50000, stok: 5 },
//     { id: 3, nama: "keyboard",
//         harga: 100000, stok: 8 },
// ];

// for (let i = 0; i < produk.length; i++) {
//     console.log(`${i + 1}. ${produk[i].nama} | Harga: Rp.${produk[i].harga} | Stok Tersedia: ${produk[i].stok}`);
// }


const produk = [
    {id: 1, nama: "tahu pedas", 
        kategori: "makanan pedas", 
        harga: 10000, 
        stok: 5, 
        rating: 5,
    },
    {id: 2, nama: "mie pedas", 
        kategori: "makanan pedas", 
        harga: 15000, 
        stok: 10, 
        rating: 4,
    },
    {id: 3, nama: "matcha", 
        kategori: "minuman",
        harga: 20000, 
        stok: 15, 
        rating: 5,
    },
    {id: 4, nama: "nasi goreng pedas", 
        kategori: "makanan pedas", 
        harga: 25000, 
        stok: 20, 
        rating: 3,
    },
    {id: 5, nama: "mie ayam pedas", 
        kategori: "makanan pedas", 
        harga: 30000, 
        stok: 25, 
        rating: 4,
    },
    {id: 6, nama: "bakmi ayam pedas", 
        kategori: "makanan pedas", 
        harga: 35000, 
        stok: 30, 
        rating: 5,
    },
    {id: 7, nama: "bakpau", kategori: "dessert", harga: 40000, stok: 35, rating: 4,},
    {id: 8, nama: "mie godog pedas", kategori: "makanan pedas", harga: 45000, stok: 40, rating: 3},
    {id: 9, nama: "bakso aci pedas", kategori: "makanan pedas", harga: 50000, stok: 45, rating: 5},
    {id: 10, nama: "ayam geprek pedas", kategori: "makanan pedas", harga: 55000, stok: 50, rating: 4},
]

for (let i = 0; i < produk.length; i++) {
    console.log(`${i + 1}. ${produk[i].nama} \n Kategori: ${produk[i].kategori} \n Stok: ${produk[i].stok} \n Harga: Rp.${produk[i].harga} \n Rating: ${produk[i].rating} \n `);
}

const keranjang = [
    { id: 1, jumlah: 1 },  // tahu pedas  - Rp.10.000
    { id: 3, jumlah: 1 },  // matcha       - Rp.20.000

];

let subTotal = 0;

const baris = keranjang.map((item) => {
    const p = produk.find((x) => x.id === item.id);
    const harga = p.harga * item.jumlah;
    subTotal += harga;
    return `- ${p.nama} x ${item.jumlah} = Rp.${harga.toLocaleString("id-ID")}`;
});

let diskon = 0;
let keteranganDiskon = "";

if (subTotal >= 100000) {
    diskon = 20000;
    keteranganDiskon = "Diskon 3: Belanja >= Rp.100.000, potongan Rp.20.000";
} else if (subTotal >= 50000) {
    diskon = 10000;
    keteranganDiskon = "Diskon 2: Belanja >= Rp.50.000, potongan Rp.10.000";
} else if (subTotal >= 15000) {
    diskon = 5000;
    keteranganDiskon = "Diskon 1: Belanja >= Rp.15.000, potongan Rp.5.000";
} else {
    keteranganDiskon = "Tidak ada diskon";
}

const totalBayar = subTotal - diskon;

console.log("\n===== KERANJANG BELANJA =====");
console.log(baris.join("\n"));
console.log("-----------------------------");
console.log(`Sub Total  : Rp.${subTotal.toLocaleString("id-ID")}`);
console.log(`Keterangan : ${keteranganDiskon}`);
console.log(`Diskon     : -Rp.${diskon.toLocaleString("id-ID")}`);
console.log(`Total Bayar: Rp.${totalBayar.toLocaleString("id-ID")}`);
console.log("=============================");

const pesan = `Halo min, saya mau pesan :\n${baris.join
    ('\n')}\nTotal Bayar : Rp.${totalBayar}`;
    console.log(`https://api.whatsapp.com/send?phone=6287777747462&text=${encodeURIComponent(pesan)}`)