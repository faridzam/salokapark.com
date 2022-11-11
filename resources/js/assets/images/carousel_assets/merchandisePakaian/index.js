import pakaian1 from "./pakaian1.jpg";
import pakaian2 from "./pakaian2.jpg";
import pakaian3 from "./pakaian3.jpg";
import pakaian4 from "./pakaian4.jpg";

export const mediaMerchandisePakaian = [pakaian1, pakaian2, pakaian3, pakaian4];
export const merchandisePakaian = [
    {
        nama: 'Setelan Anak Loka',
        deskripsi: ''
    },
    {
        nama: 'Polo T-Shirt Anak',
        deskripsi: ''
    },
    {
        nama: 'Polo T-Shirt Anak',
        deskripsi: ''
    },
    {
        nama: 'Polo T-Shirt Dewasa',
        deskripsi: ''
    },
];
export const merchandisePakaianByIndex = index => merchandisePakaian[index];
export const mediaMerchandisePakaianByIndex = index => mediaMerchandisePakaian[index % mediaMerchandisePakaian.length];
