import media1 from "./promosi1.jpg";
import media2 from "./promosi2.jpg";
import media3 from "./promosi3.jpg";
import media4 from "./promosi4.jpg";

export const media = [media1, media2, media3, media4];
export const promosiList = [
    {
        nama: 'Flash Sale Hari Pelanggan Nasional',
        deskripsi: 'Ada FLASH SALE di Hari Pelanggan Nasional, Lur! Tanggal 2 September 2022 akan ada harga spesial!',
        link: '/promosi/hari-pelanggan'
    },
    {
        nama: 'Agustus #DolanSokPole di Saloka Theme Park',
        deskripsi: 'Ada FLASH SALE di Hari Pelanggan Nasional, Lur! Tanggal 2 September 2022 akan ada harga spesial!',
        link: '/promosi/dolan-sakpole'
    },
    {
        nama: 'Roadshow Mall to Mall: ASTRO MALL MAGELANG',
        deskripsi: 'Saloka hadir di Kota Magelang dengan berbagai keceriaan dan keseruan! Tanggal 25 September - 2 Oktober 2022.',
        link: '/promosi/roadshow-mall'
    },
    {
        nama: 'Monday Funday',
        deskripsi: 'Ceria di hari senin dan nikmati lebih dari 20+ wahana! Dengan pembelian tiket 100k khusus di hari senin.',
        link: '/promosi/monday-funday'
    },
];
export const promosiListByIndex = index => promosiList[index];
export const mediaByIndex = index => media[index % media.length];
