import media1 from "./promosiEvent1.png";
import media2 from "./promosiEvent2.png";
import media3 from "./promosiEvent3.png";
import media4 from "./promosiEvent4.png";

export const media = [media1, media2, media3, media4];
export const promosiEventList = [
    {
        nama: 'Saloka Gelaran Budaya Oengaran Menari',
        deskripsi: 'Akan ada keseruan lagi di Saloka nih, Lur! Saloka Gelaran Budaya featuring Oengaran Menari',
        link: '/promosi/gelaran-budaya-oengaran-menari'
    },
    {
        nama: 'Saloka Fashion Kids Competition',
        deskripsi: 'Raih hadiah jutaan rupiah di Saloka Fashion Kids, Lur! Daftarkan anak, keponakan atau saudara anda.',
        link: '/promosi/fashion-kids-competition'
    },
    {
        nama: 'Cooking Class Dounut',
        deskripsi: 'Bermain sambil belajar di Saloka Theme Park, Lur! Dengan pembelian tiket 100k per orang.',
        link: '/promosi/cooking-class-donut'
    },
    {
        nama: 'Pentas Seni Tari dan Drumblek',
        deskripsi: 'Long weekend #ceriatiadahabisnya di Saloka, Lur! Siapa nih yang kemarin ketinggalan show kemarin?',
        link: '/promosi/pentas-seni-tari-drumblek'
    },
];
export const promosiEventListByIndex = index => promosiEventList[index];
export const mediaByIndex = index => media[index % media.length];
