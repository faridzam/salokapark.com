import ZonaBanner from "./zonaBanner.png";
import ZonaPesisir from "./zonaPesisir.png";
import ZonaBalalantara from "./zonaBalalantara.png";
import ZonaKamayayi from "./zonaKamayayi.png";
import ZonaArarya from "./zonaArarya.png";
import ZonaSegaraPrada from "./zonaSegaraPrada.png";

export const mediaZona = [ZonaBanner, ZonaPesisir, ZonaBalalantara, ZonaKamayayi, ZonaArarya, ZonaSegaraPrada];
export const zona = [
    {
        slugs: 'banner',
        nama: 'Banner',
        title: 'Banner',
        deskripsi: 'ini banner'
    },
    {
        slugs: 'pesisir',
        nama: 'Pesisir',
        title: 'Pesisir',
        deskripsi: 'Masuk ke Saloka Theme Park kamu akan disambut dengan zona Pesisir. Mulai dari dekorasi, interior hingga bentuk bangunan akan membawamu berasa berada di pantai.',
        deskripsiLengkap: 'Masuk ke Saloka Theme Park kamu akan disambut dengan zona Pesisir. Mulai dari dekorasi, interior hingga bentuk bangunan akan membawamu berasa berada di pantai. Jadi, segera siapkan sunglass-mu dan mari bermain!. Penasaran ada wahana dan atraksi apa aja di zona ini? Yuk baca di bawah ini!'
    },
    {
        slugs: 'balalantara',
        nama: 'Balalantara',
        title: 'Balalantara',
        deskripsi: 'Setelah bermain-main dengan suasana pantai, kamu akan memasuki zona permainan Balalantara. Balalantara terinspirasi dari tema hutan belantara.',
        deskripsiLengkap: 'Setelah bermain-main dengan suasana pantai, kamu akan memasuki zona permainan Balalantara. Balalantara terinspirasi dari tema hutan belantara. Di sini ada beberapa wahana dan atraksi yang disesuaikan untuk dinikmati bersama keluarga. Ingin tahu lebih lanjut informasi wahana, Yuk baca lebih lanjut soal Zona Balalantara di bawah ini!'
    },
    {
        slugs: 'kamayayi',
        nama: 'Kamayayi',
        title: 'Kamayayi',
        deskripsi: 'Nah, kalau yang ini buat adik-adik nih! Ada berbagai wahana dan atraksi di zona ini yang pas buat adik-adik untuk bermain dan belajar dengan riang.',
        deskripsiLengkap: 'Nah, kalau yang ini buat adik-adik nih! Ada berbagai wahana dan atraksi di zona ini yang pas buat adik-adik untuk bermain dan belajar dengan riang. Ada banyak food truck dan kedai es krim yang nikmat juga lho!'
    },
    {
        slugs: 'ararya',
        nama: 'Ararya',
        title: 'Ararya',
        deskripsi: 'Siap memacu adrenalinmu? Langsung aja ke Zona Ararya! Zona ini cocok untuk kamu yang menyukai tantangan dan sensasi ekstrem saat bersenang-senang.',
        deskripsiLengkap: 'Siap memacu adrenalinmu? Langsung aja ke Zona Ararya! Zona ini cocok untuk kamu yang menyukai tantangan dan sensasi ekstrem saat bersenang-senang. Penasaran ada apa aja di zona ini? Yuk dibaca!'
    },
    {
        slugs: 'segara-prada',
        nama: 'Segara Prada',
        title: 'Segara Prada',
        deskripsi: 'Di sini tempatnya! Zona Segara Prada cocok buat kamu dan keluarga untuk bersantai bersama sekaligus tetap menikmati keseruan dengan tema industri pertambangan.',
        deskripsiLengkap: 'Ingin santai bermain sekaligus jelajah kuliner? Di sini tempatnya! Zona Segara Prada cocok buat kamu dan keluarga untuk bersantai bersama sekaligus tetap menikmati keseruan dengan tema industri pertambangan.'
    },
];

export const zonaByIndex = index => zona[index];
export const mediaZonaByIndex = index => mediaZona[index % mediaZona.length];
export const getIndexZonaBySlugs = slugs => zona.findIndex(x => x.slugs === slugs);
