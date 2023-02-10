import media1 from "./pesisir.jpg";
import media2 from "./balalantara.jpg";
import media3 from "./kamayayi.jpg";
import media4 from "./ararya.jpg";
import media5 from "./segara_prada.jpg";

export const media = [media1, media2, media3, media4, media5];
export const zona = [
    {
        nama: 'Pesisir',
        slugs: 'pesisir',
        image: media1,
        deskripsi: 'Rasakan suasana yang membawamu berada di pantai mulai dari dekorasi, interior hingga bentuk bangunan.',
        link: "/zona/pesisir"
    },
    {
        nama: 'Balalantara',
        slugs: 'balalantara',
        image: media2,
        deskripsi: 'Wahana dan atraksi yang yang disesuaikan untuk dinikmati bersama keluarga dimana terinspirasi dari hutan belantara.',
        link: "/zona/balalantara"
    },
    {
        nama: 'Kamayayi',
        slugs: 'kamayayi',
        image: media3,
        deskripsi: 'Wahana dan atraksi yang pas buat adik-adik untuk bermain dan belajar dengan riang. Selain itu, ada food truck dan kedai es krim.',
        link: "/zona/kamayayi"
    },
    {
        nama: 'Ararya',
        slugs: 'ararya',
        image: media4,
        deskripsi: 'Wahana dan atraksi  untuk kamu yang menyukai tantangan dan sensasi ekstrem saat bersenang-senang.',
        link: "/zona/ararya"
    },
    {
        nama: 'Segara Prada',
        slugs: 'segara-prada',
        image: media5,
        deskripsi: 'Wahana serta kuliner yang cocok buat kamu dan keluarga untuk bersantai bersama dengan tema industri pertambangan.',
        link: "/zona/segara-prada"
    },
];

export const zonaByIndex = (index, slugs) => zona.filter(x => x.slugs !== slugs)[index];
export const getIndexesZonaBySlugs = slugs => zona.filter(x => x.slugs !== slugs);
