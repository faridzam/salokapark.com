import media1 from "./media-1.jpg";
import media2 from "./media-2.jpg";

export const media = [media1, media2];
export const promosiBanner = [
    {
        nama: 'media 1',
        title: 'Lorem Ipsum Dolor',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere dignissim mauris eget semper. Fusce et dolor vel erat maximus placerat quis vel augue.',
        link: '/promosi/promosi-1',
    },
    {
        nama: 'media 2',
        title: 'Saloka Membership',
        deskripsi: 'Bayar sekali, bebas main semua wahana selama 6 bulan, Lur. Yuk simak caranya di bawah ini dan join Membership sekarang.',
        link: '/promosi/promosi-2',
    },
];

export const promosiBannerByIndex = index => promosiBanner[index];
export const mediaByIndex = index => media[index % media.length];
