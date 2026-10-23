const produk = [
    {id: 1, nama: "Nike Court Vision Women", 
        kategori: "Sepatu", 
        harga: 865198, 
        lokasi: "Jakarta Utara", 
        rating: 4.9,
    },
    {id: 2, nama: "Nike Court Vision Men",
        kategori: "Sepatu",
        harga: 1139050,
        lokasi: "Jakarta Utara",
        rating: 5.0,
    },
    {id: 3, nama: "Nike Court Vision Low Next",
        kategori: "Sepatu",
        harga: 576558,
        lokasi: "Jakarta Utara",
        rating: 4.9,
    },
    {id: 4, nama: "Nike Air Max SC Men",
        kategori: "Sepatu",
        harga: 1011080,
        lokasi: "Jakarta Utara",
        rating: 4.9,
    },
    {id: 5, nama: "Nike Court Vision Low Men",
        kategori: "Sepatu",
        harga: 7370801,
        lokasi: "Jakarta Utara",
        rating: 4.9,
    },
    {id: 6, nama: "Nike SB Heritage Vulc Men",
        kategori: "Sepatu",
        harga: 827080,
        lokasi: "Jakarta Utara",
        rating: 4.9,
    },
    {id: 7, nama: "Nike Zoom Vomero 5 Men",
        kategori: "Sepatu",
        harga: 1433664,
        lokasi: "Jakarta Utara",
        rating: 4.9,
    },
    {id: 8, nama: "Nike Sepatu Sneakers Wanita",
        kategori: "Sepatu",
        harga: 758310,
        lokasi: "Jakarta Utara",
        rating: 5.0,
    },
    {id: 9, nama: "Nike Total 90 Men",
        kategori: "Sepatu",
        harga: 1095494,
        lokasi: "Jakarta Utara",
        rating: 5.0,
    },
    {id: 10, nama: "Nike Mini Shoebox Crossbody",
        kategori: "Tas Sepatu",
        harga: 459000,
        lokasi: "Jakarta Utara",
        rating: 5.0,
    },
];
for (let i = 0; i < produk.length; i++){
    console.log(`${produk[i].nama}\n Kategori: ${produk[i].kategori}\n Harga: ${produk[i].harga}\n Lokasi: ${produk[i].lokasi}\n Rating: ${produk[i].rating}`)

}

const keranjang = [
    {id: 1, jumlah: 1 },
    {id: 2, jumlah: 1 },
    {id: 3, jumlah: 1 },
    {id: 4, jumlah: 1 },
    {id: 5, jumlah: 1 },
    {id: 6, jumlah: 1 },
    {id: 7, jumlah: 1 },
    {id: 8, jumlah: 1 },
    {id: 9, jumlah: 1 },
    {id: 10, jumlah: 1 },
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

if (subTotal > 10000000) {
    diskon = 0.10;
    keteranganDiskon = "Diskon 3: Belanja > Rp.10.000.000, potongan 10%";
} else if (subTotal > 2500000) {
    diskon = 0.30;
    keteranganDiskon = "Diskon 2: Belanja > Rp.2.500.000, potongan 30%";
} else if (subTotal > 1000000) {
    diskon = 0.20;
    keteranganDiskon = "Diskon 1: Belanja > Rp.1.000.000, potongan 20%";
} else {
    keteranganDiskon = "Tidak ada diskon";
}

const nominalDiskon = subTotal * diskon;
const totalBayar = subTotal - nominalDiskon;

console.log("\n===== STRUK PEMBELIAN PRODUK NIKE =====");
console.log(baris.join("\n"));
console.log("-----------------------------");
console.log(`Sub Total  : Rp.${subTotal.toLocaleString("id-ID")}`);
console.log(`Keterangan : ${keteranganDiskon}`);
console.log(`Diskon     : -Rp.${nominalDiskon.toLocaleString("id-ID")}`);
console.log(`Total Bayar: Rp.${totalBayar.toLocaleString("id-ID")}`);
console.log("=============================");
