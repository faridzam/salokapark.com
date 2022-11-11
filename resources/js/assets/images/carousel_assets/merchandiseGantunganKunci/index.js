import gantungan1 from "./gantungan1.jpg";
import gantungan2 from "./gantungan2.jpg";
import gantungan3 from "./gantungan3.jpg";
import gantungan4 from "./gantungan4.jpg";

export const mediaMerchandiseGantungan = [gantungan1, gantungan2, gantungan3, gantungan4];
export const merchandiseGantungan = [
    {
        nama: 'Gantungan Kunci Black Rubber Saloka',
        deskripsi: ''
    },
    {
        nama: 'Egg Dino',
        deskripsi: ''
    },
    {
        nama: 'Egg Monster',
        deskripsi: ''
    },
    {
        nama: 'Gantungan Kunci Boneka Saloka (Keychain)',
        deskripsi: ''
    },
];
export const merchandiseGantunganByIndex = index => merchandiseGantungan[index];
export const mediaMerchandiseGantunganByIndex = index => mediaMerchandiseGantungan[index % mediaMerchandiseGantungan.length];
