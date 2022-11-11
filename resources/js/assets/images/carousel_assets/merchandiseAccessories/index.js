import accessory1 from "./accessory1.jpg";
import accessory2 from "./accessory2.jpg";
import accessory3 from "./accessory3.jpg";
import accessory4 from "./accessory4.jpg";
import accessory5 from "./accessory5.jpg";
import accessory6 from "./accessory6.jpg";
import accessory7 from "./accessory7.jpg";
import accessory8 from "./accessory8.jpg";
import accessory9 from "./accessory9.jpg";
import accessory10 from "./accessory10.jpg";
import accessory11 from "./accessory11.jpg";
import accessory12 from "./accessory12.jpg";
import accessory13 from "./accessory13.jpg";

export const mediaMerchandiseAccessories = [
    accessory1,
    accessory2,
    accessory3,
    accessory4,
    accessory5,
    accessory6,
    accessory7,
    accessory8,
    accessory9,
    accessory10,
    accessory11,
    accessory12,
    accessory13,
];
export const merchandiseAccessories = [
    {
        nama: 'Bando Saloka',
        deskripsi: ''
    },
    {
        nama: 'Eye Mask Saloka',
        deskripsi: ''
    },
    {
        nama: 'Hiasan Mobil Saloka',
        deskripsi: ''
    },
    {
        nama: 'Hoodie Hat Saloka',
        deskripsi: ''
    },
    {
        nama: 'Ikat Rambut Saloka',
        deskripsi: ''
    },
    {
        nama: 'Payung Besar Saloka',
        deskripsi: ''
    },
    {
        nama: 'Plush Hat Saloka',
        deskripsi: ''
    },
    {
        nama: 'Ransel Saloka',
        deskripsi: ''
    },
    {
        nama: 'Sandal Dewasa Saloka',
        deskripsi: ''
    },
    {
        nama: 'Sling Bag Saloka',
        deskripsi: ''
    },
    {
        nama: 'Sticker Saloka',
        deskripsi: ''
    },
    {
        nama: 'Tempat Tissue Saloka',
        deskripsi: ''
    },
    {
        nama: 'Topi Saloka Dewasa',
        deskripsi: ''
    },
];
export const merchandiseAccessoriesByIndex = index => merchandiseAccessories[index];
export const mediaMerchandiseAccessoriesByIndex = index => mediaMerchandiseAccessories[index % mediaMerchandiseAccessories.length];
