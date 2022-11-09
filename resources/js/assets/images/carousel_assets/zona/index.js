import media1 from "./pesisir.jpg";
import media2 from "./balalantara.jpg";
import media3 from "./kamayayi.jpg";
import media4 from "./ararya.jpg";
import media5 from "./segara_prada.jpg";

export const media = [media1, media2, media3, media4, media5];
export const zona = [
    {
        nama: 'Pesisir',
        deskripsi: 'Rasakan suasana yang membawamu berada di pantai mulai dari dekorasi, interior hingga bentuk bangunan.'
    },
    {
        nama: 'Balalantara',
        deskripsi: 'Wahana dan atraksi yang yang disesuaikan untuk dinikmati bersama keluarga dimana terinspirasi dari hutan belantara.'
    },
    {
        nama: 'Kamayayi',
        deskripsi: 'Wahana dan atraksi yang pas buat adik-adik untuk bermain dan belajar dengan riang. Selain itu, ada food truck dan kedai es krim.'
    },
    {
        nama: 'Ararya',
        deskripsi: 'Wahana dan atraksi  untuk kamu yang menyukai tantangan dan sensasi ekstrem saat bersenang-senang.'
    },
    {
        nama: 'Segara Prada',
        deskripsi: 'Wahana serta kuliner yang cocok buat kamu dan keluarga untuk bersantai bersama dengan tema industri pertambangan.'
    },
];
export const zonaByIndex = index => zona[index];
export const mediaByIndex = index => media[index % media.length];
