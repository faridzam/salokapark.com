import daimami from "./daimami.jpg";
import rimba from "./rimba.jpg";
import jenju from "./jenju.jpg";
import tukCio from "./tuk-cio.jpg";
import srengenge from "./srengenge.jpg";
import iceCreamShop from "./ice-cream-shop.jpg";

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
