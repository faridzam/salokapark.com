import daimami from "./daimami.png";
import rimba from "./rimba.png";
import jenju from "./jenju.png";
import tukCio from "./tuk-cio.png";
import srengenge from "./srengenge.png";
import iceCreamShop from "./ice-cream-shop.png";

export const mediaRestaurant = [daimami, rimba, jenju, tukCio, srengenge, iceCreamShop];
export const restaurant = [
    {
        nama: 'banner',
        title: 'Baru',
        deskripsi: '',
        link: '/restaurant/daimami',
    },
    {
        nama: 'banner',
        title: 'Baru',
        deskripsi: '',
        link: '/restaurant/daimami',
    },
    {
        nama: 'banner',
        title: 'Baru',
        deskripsi: '',
        link: '/restaurant/daimami',
    },
    {
        nama: 'banner',
        title: 'Baru',
        deskripsi: '',
        link: '/restaurant/daimami',
    },
    {
        nama: 'banner',
        title: 'Baru',
        deskripsi: '',
        link: '/restaurant/daimami',
    },
    {
        nama: 'banner',
        title: 'Baru',
        deskripsi: '',
        link: '/restaurant/daimami',
    },
];

export const restaurantBannerByIndex = index => restaurant[index];
export const mediaByIndex = index => mediaRestaurant[index % mediaRestaurant.length];
