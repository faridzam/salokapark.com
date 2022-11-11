import showEventBanner1 from "./showEvent1.jpg";
import showEventBanner2 from "./showEvent2.jpg";
import showEventBanner3 from "./showEvent3.jpg";
import showEventBanner4 from "./showEvent4.jpg";

export const mediaShowEvent = [showEventBanner1, showEventBanner2, showEventBanner3, showEventBanner4];
export const showEvent = [
    {
        slugs: 'baru-klinthing-show',
        deskripsiLengkap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sapien et sapien pulvinar interdum. Phasellus ut euismod lorem, sit amet fringilla neque. Phasellus non dolor in massa sollicitudin pharetra. Ut posuere, lectus a faucibus luctus, lorem ante sodales magna, eget pretium metus tellus nec enim. Vivamus id lacinia enim, et facilisis massa. Aenean luctus mauris a porta euismod. Aliquam facilisis nunc ac sapien fermentum varius.',
        nama: 'banner',
        title: 'Baru Klinthing Show di Jejogedan',
        deskripsi: 'Baru Klinthing Show merupakan pertunjukan yang mengadaptasi cerita rakyat mengenai Baru Klinthing, dengan memadukan teknologi modern, animasi 3D, laser, musik, dan air mancur menari',
        link: '/show-event/baru-klinthing-show',
    },
    {
        slugs: 'galileo-liveness',
        deskripsiLengkap: 'Aenean lorem quam, eleifend quis libero nec, sodales aliquet massa. Nunc cursus velit dictum porttitor iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quam urna, varius vel maximus sed, hendrerit a tellus. Nam consectetur egestas tempus. Proin vestibulum turpis quis mi euismod, eget ultrices nisl aliquam. Vestibulum quis porta orci.',
        nama: 'banner',
        title: 'Galileo Liveness di Lumbung Ilmu Galileo',
        deskripsi: 'Atraksi edukasi yang dipersembahkan para talent SALOKA untuk para pengunjung yang masuk di wahana Lumbung Ilmu Galileo.',
        link: '/show-event/galileo-liveness',
    },
    {
        slugs: 'baru-klinthing',
        deskripsiLengkap: 'Etiam commodo ligula ac turpis tristique imperdiet. Pellentesque eu sapien auctor, aliquam sem finibus, dictum leo. Nulla fermentum tortor ac rutrum ornare. Nam placerat mauris at tortor pharetra sollicitudin. Proin sit amet enim dapibus turpis feugiat malesuada. Duis et nulla non dolor euismod euismod luctus a nisl. Aenean eu leo a augue commodo fringilla sit amet id libero. Maecenas vel nibh elit. Nam laoreet nulla vitae libero fringilla, a malesuada dui porta.',
        nama: 'banner',
        title: 'Baru Klinthing Show di Jejogedan',
        deskripsi: 'Dance show yang dilakukan sosok clown bernama Ayayi bersama 4 Peri Hutan Negeri SALOKA untuk berbagi keceriaan kepada para anak-anak di sekitar zona anak, Kamayayi.',
        link: '/show-event/baru-klinthing',
    },
    {
        slugs: 'salokarnival',
        deskripsiLengkap: 'Vivamus porta quis sem vel lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec neque eget justo finibus vehicula vitae quis justo. Pellentesque viverra lobortis orci quis facilisis. Nulla ultrices ullamcorper eros vitae sagittis. Vivamus vitae tincidunt purus, in fermentum tellus. Phasellus ac imperdiet massa. Nullam rutrum nisi turpis, sed volutpat dui gravida ac.',
        nama: 'banner',
        title: 'Salokarnival di Plaza Ararya',
        deskripsi: 'Karnaval yang menampilkan karakter-karakter yang ada di Negeri SALOKA dan karakter-karakter yang muncul di cerita-cerita rakyat. Pertunjukkan ini dikemas dalam bentuk tarian dan photo moment.',
        link: '/show-event/salokarnival',
    },
];

export const showEventByIndex = index => showEvent[index];
export const mediaByIndex = index => mediaShowEvent[index % mediaShowEvent.length];
export const getIndexShowEventBySlugs = slugs => showEvent.findIndex(x => x.slugs === slugs);
