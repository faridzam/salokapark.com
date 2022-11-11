import fasum1 from "./fasum1.jpg";
import fasum2 from "./fasum2.jpg";
import fasum3 from "./fasum3.jpg";

export const mediaFasum = [fasum1, fasum2, fasum3];
export const fasum = [
    {
        nama: 'Parkir',
        title: '',
        deskripsi: '',
        link: '',
    },
    {
        nama: 'Mushola',
        title: '',
        deskripsi: '',
        link: '',
    },
    {
        nama: 'Toilet',
        title: '',
        deskripsi: '',
        link: '',
    },
];

export const fasumByIndex = index => fasum[index];
export const mediaFasumByIndex = index => mediaFasum[index % mediaFasum.length];
