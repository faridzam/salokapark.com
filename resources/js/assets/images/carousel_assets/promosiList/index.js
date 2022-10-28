import media1 from "./promosi1.png";
import media2 from "./promosi2.png";
import media3 from "./promosi3.png";
import media4 from "./promosi4.png";

export const media = [media1, media2, media3, media4];
export const zona = [
    {
        nama: 'Flash Sale Hari Pelanggan Nasional',
        deskripsi: 'Ada FLASH SALE di Hari Pelanggan Nasional, Lur! Tanggal 2 September 2022 akan ada harga spesial!'
    },
    {
        nama: 'Agustus #DolanSokPole di Saloka Theme Park',
        deskripsi: 'Ada FLASH SALE di Hari Pelanggan Nasional, Lur! Tanggal 2 September 2022 akan ada harga spesial!'
    },
    {
        nama: 'Roadshow Mall to Mall: ASTRO MALL MAGELANG',
        deskripsi: 'Saloka hadir di Kota Magelang dengan berbagai keceriaan dan keseruan! Tanggal 25 September - 2 Oktober 2022.'
    },
    {
        nama: 'Monday Funday',
        deskripsi: 'Ceria di hari senin dan nikmati lebih dari 20+ wahana! Dengan pembelian tiket 100k khusus di hari senin.'
    },
];
export const zonaByIndex = index => zona[index];
export const mediaByIndex = index => media[index % media.length];
