import showEventBanner1 from "./showEventBanner1.png";
import showEventBanner2 from "./showEventBanner2.png";
import showEventBanner3 from "./showEventBanner3.png";
import showEventBanner4 from "./showEventBanner4.png";

export const media = [showEventBanner1, showEventBanner2, showEventBanner3, showEventBanner4];
export const showEventBanner = [
    {
        nama: 'banner',
        title: 'Lorem Ipsum Dolor',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere dignissim mauris eget semper. Fusce et dolor vel erat maximus placerat quis vel augue.',
        link: '/show-event/promosi-1',
    },
    {
        nama: 'banner',
        title: 'Lorem Ipsum Dolor',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere dignissim mauris eget semper. Fusce et dolor vel erat maximus placerat quis vel augue.',
        link: '/show-event/promosi-1',
    },
    {
        nama: 'banner',
        title: 'Lorem Ipsum Dolor',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere dignissim mauris eget semper. Fusce et dolor vel erat maximus placerat quis vel augue.',
        link: '/show-event/promosi-1',
    },
    {
        nama: 'banner',
        title: 'Lorem Ipsum Dolor',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere dignissim mauris eget semper. Fusce et dolor vel erat maximus placerat quis vel augue.',
        link: '/show-event/promosi-1',
    },
];

export const promosiBannerByIndex = index => showEventBanner[index];
export const mediaByIndex = index => media[index % media.length];
