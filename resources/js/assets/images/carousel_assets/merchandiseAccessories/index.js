import accessory1 from "./accessory1.png";
import accessory2 from "./accessory2.png";
import accessory3 from "./accessory3.png";
import accessory4 from "./accessory4.png";
import accessory5 from "./accessory5.png";
import accessory6 from "./accessory6.png";
import accessory7 from "./accessory7.png";
import accessory8 from "./accessory8.png";
import accessory9 from "./accessory9.png";
import accessory10 from "./accessory10.png";
import accessory11 from "./accessory11.png";
import accessory12 from "./accessory12.png";
import accessory13 from "./accessory13.png";

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
