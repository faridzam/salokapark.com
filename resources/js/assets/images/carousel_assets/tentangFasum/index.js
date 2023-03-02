import fasum1 from "./fasum1.jpg";
import fasum2 from "./fasum2.jpg";
import fasum3 from "./fasum3.jpg";

export const mediaFasum = [fasum1, fasum2, fasum3];
export const fasum = [
    {
        idzona: [2,4],
        nama: 'Mushola',
        title: '',
        deskripsi: 'Suspendisse fringilla, tortor at pharetra consequat, mi enim pellentesque eros, vel lobortis felis nibh eget metus.',
        link: '',
    },
    {
        idzona: [1,2,3,4,5],
        nama: 'Toilet',
        title: '',
        deskripsi: 'Donec malesuada hendrerit suscipit. Curabitur urna sapien, venenatis quis est vel, sodales accumsan lacus.',
        link: '',
    },
    {
        idzona: [1,2,3,4,5],
        nama: 'Toilet Difabel',
        title: '',
        deskripsi: 'Donec malesuada hendrerit suscipit. Curabitur urna sapien, venenatis quis est vel, sodales accumsan lacus.',
        link: '',
    },
    {
        idzona: [1,2],
        nama: 'Ruang Laktasi',
        title: '',
        deskripsi: 'Donec malesuada hendrerit suscipit. Curabitur urna sapien, venenatis quis est vel, sodales accumsan lacus.',
        link: '',
    },
    {
        idzona: [1,2],
        nama: 'Persewaan Skuter Listrik',
        title: '',
        deskripsi: 'Donec malesuada hendrerit suscipit. Curabitur urna sapien, venenatis quis est vel, sodales accumsan lacus.',
        link: '',
    },
    {
        idzona: [5],
        nama: 'Klinik',
        title: '',
        deskripsi: 'Donec malesuada hendrerit suscipit. Curabitur urna sapien, venenatis quis est vel, sodales accumsan lacus.',
        link: '',
    },
];

export const fasumByIndex = index => fasum[index];
export const mediaFasumByIndex = index => mediaFasum[index % mediaFasum.length];

export const getFasumByID = id => fasum.filter(x => x.idzona.includes(id));