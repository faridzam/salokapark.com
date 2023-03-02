import daimami from "./daimami.jpg";
import rimba from "./rimba.jpg";
import jenju from "./jenju.jpg";
import tukCio from "./tuk-cio.jpg";
import srengenge from "./srengenge.jpg";
import iceCreamShop from "./ice-cream-shop.jpg";

export const mediaRestaurant = [daimami, rimba, jenju, tukCio, srengenge, iceCreamShop];
export const restaurant = [
    {
        idzona: 5,
        idresto: 4,
        image: daimami,
        slugs: 'daimami',
        deskripsiLengkap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sapien et sapien pulvinar interdum. Phasellus ut euismod lorem, sit amet fringilla neque. Phasellus non dolor in massa sollicitudin pharetra. Ut posuere, lectus a faucibus luctus, lorem ante sodales magna, eget pretium metus tellus nec enim. Vivamus id lacinia enim, et facilisis massa. Aenean luctus mauris a porta euismod. Aliquam facilisis nunc ac sapien fermentum varius.',
        nama: 'Daimami',
        title: 'Daimami',
        deskripsi: 'Nikmati makanan dan minumanmu di sini sambil menikmati suasana dengan tema area pertambangan yang unik.',
        link: '/restaurant/daimami',
    },
    {
        idzona: 2,
        idresto: 1,
        image: rimba,
        slugs: 'rimba',
        deskripsiLengkap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sapien et sapien pulvinar interdum. Phasellus ut euismod lorem, sit amet fringilla neque. Phasellus non dolor in massa sollicitudin pharetra. Ut posuere, lectus a faucibus luctus, lorem ante sodales magna, eget pretium metus tellus nec enim. Vivamus id lacinia enim, et facilisis massa. Aenean luctus mauris a porta euismod. Aliquam facilisis nunc ac sapien fermentum varius.',
        nama: 'Rimba',
        title: 'Rimba Resto',
        deskripsi: 'Resto favorit keluarga yang membuatmu merasa berada di tengah hutan belantara dengan makanan dan minuman yang akan memanjakan lidah.',
        link: '/restaurant/rimba-resto',
    },
    {
        idzona: 1,
        idresto: 2,
        image: jenju,
        slugs: 'jenju',
        deskripsiLengkap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sapien et sapien pulvinar interdum. Phasellus ut euismod lorem, sit amet fringilla neque. Phasellus non dolor in massa sollicitudin pharetra. Ut posuere, lectus a faucibus luctus, lorem ante sodales magna, eget pretium metus tellus nec enim. Vivamus id lacinia enim, et facilisis massa. Aenean luctus mauris a porta euismod. Aliquam facilisis nunc ac sapien fermentum varius.',
        nama: 'Jenju',
        title: 'Jenju Café',
        deskripsi: 'Cafe bertema pantai di Zona Pesisir ini menawarkan makanan ringan yang enak serta pemandangan area Saloka yang menenangkan.',
        link: '/restaurant/jenju-cafe',
    },
];

export const restaurantBannerByIndex = index => restaurant[index];
export const mediaByIndex = index => mediaRestaurant[index % mediaRestaurant.length];
export const getIndexRestaurantBySlugs = slugs => restaurant.findIndex(x => x.slugs === slugs);

export const getIndexRestaurantByID = id => restaurant.findIndex(x => x.idzona === id);

export const getIndexesRekomendasiRestoByID = id => restaurant.filter(x => x.idresto !== id);