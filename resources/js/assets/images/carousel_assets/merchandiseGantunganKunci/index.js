import gantungan1 from "./gantungan1.png";
import gantungan2 from "./gantungan2.png";
import gantungan3 from "./gantungan3.png";
import gantungan4 from "./gantungan4.png";

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
