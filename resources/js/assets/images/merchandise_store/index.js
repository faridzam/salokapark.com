import tukCio from "./tuk-cio.jpg";
import srengenge from "./srengenge.jpg";

export const mediaMerchandiseStore = [tukCio, srengenge];
export const merchandiseStore = [
    {
        slugs: 'shop-89',
        image: tukCio,
        deskripsiLengkap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sapien et sapien pulvinar interdum. Phasellus ut euismod lorem, sit amet fringilla neque. Phasellus non dolor in massa sollicitudin pharetra. Ut posuere, lectus a faucibus luctus, lorem ante sodales magna, eget pretium metus tellus nec enim. Vivamus id lacinia enim, et facilisis massa. Aenean luctus mauris a porta euismod. Aliquam facilisis nunc ac sapien fermentum varius.',
        nama: 'Shop 89',
        zona: 'Downtown',
        title: 'Shop 89',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lectus, blandit ac ipsum a, tincidunt tristique lorem. Aenean eu iaculis ex. Fusce euismod mauris ligula, ut porta turpis aliquam et. Cras quis venenatis neque, sed venenatis lacus. Mauris est lorem, dapibus sit amet efficitur et, fringilla vitae arcu.',
        link: '/merchandise/shop-89',
    },
    {
        slugs: 'bazar-taman',
        image: srengenge,
        deskripsiLengkap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sapien et sapien pulvinar interdum. Phasellus ut euismod lorem, sit amet fringilla neque. Phasellus non dolor in massa sollicitudin pharetra. Ut posuere, lectus a faucibus luctus, lorem ante sodales magna, eget pretium metus tellus nec enim. Vivamus id lacinia enim, et facilisis massa. Aenean luctus mauris a porta euismod. Aliquam facilisis nunc ac sapien fermentum varius.',
        nama: 'Bazar Taman',
        zona: 'Balalantara',
        title: 'Bazar Taman',
        deskripsi: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum feugiat urna ac vehicula. Suspendisse molestie tincidunt nunc ac feugiat. Sed dui mi, tempor id urna quis, interdum vulputate eros. Curabitur eleifend dui in lacus mollis luctus.',
        link: '/merchandise/bazar-taman',
    },
];

export const merchandiseStoreByIndex = index => merchandiseStore[index];
export const mediaMerchandiseStoreByIndex = index => mediaMerchandiseStore[index % mediaMerchandiseStore.length];
export const getIndexMerchandiseStoreBySlugs = slugs => merchandiseStore.findIndex(x => x.slugs === slugs);
