import showEventBanner1 from "./showEvent1.jpg";
import showEventBanner2 from "./showEvent2.jpg";
import showEventBanner3 from "./showEvent3.jpg";
import showEventBanner4 from "./showEvent4.jpg";

export const mediaShowEvent = [showEventBanner1, showEventBanner2, showEventBanner3, showEventBanner4];
export const showEvent = [
    {
        idzona: 1,
        image: showEventBanner1,
        slugs: 'baru-klinthing-show',
        deskripsiLengkap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sapien et sapien pulvinar interdum. Phasellus ut euismod lorem, sit amet fringilla neque. Phasellus non dolor in massa sollicitudin pharetra. Ut posuere, lectus a faucibus luctus, lorem ante sodales magna, eget pretium metus tellus nec enim. Vivamus id lacinia enim, et facilisis massa. Aenean luctus mauris a porta euismod. Aliquam facilisis nunc ac sapien fermentum varius.',
        nama: 'banner',
        title: 'Baru Klinthing Show',
        deskripsi: 'Pertunjukan yang mengadaptasi cerita rakyat mengenai Baru Klinthing, dengan memadukan teknologi modern, animasi 3D, laser, musik, dan air mancur menari.',
        link: '/show-event/baru-klinthing-show',
        zona: 'pesisir',
        jadwal: {
            weekdays : '14:00 - 17:00 WIB',
            weekends : '14:00 - 19:00 WIB',
            tanggalMerah : '14:00 - 19:00 WIB',
        }
    },
    {
        idzona: 3,
        image: showEventBanner3,
        slugs: 'salokarnival',
        deskripsiLengkap: 'Vivamus porta quis sem vel lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec neque eget justo finibus vehicula vitae quis justo. Pellentesque viverra lobortis orci quis facilisis. Nulla ultrices ullamcorper eros vitae sagittis. Vivamus vitae tincidunt purus, in fermentum tellus. Phasellus ac imperdiet massa. Nullam rutrum nisi turpis, sed volutpat dui gravida ac.',
        nama: 'banner',
        title: 'Salokarnival di Area Kamayayi',
        deskripsi: 'Karnaval yang menampilkan karakter-karakter yang ada di Negeri SALOKA dan karakter-karakter yang muncul di cerita-cerita rakyat. Pertunjukkan ini dikemas dalam bentuk tarian dan photo moment.',
        link: '/show-event/salokarnival',
        zona: 'pesisir ,kamayayi & ararya',
        jadwal: {
            weekdays : '14:00 - 17:00 WIB',
            weekends : '14:00 - 19:00 WIB',
            tanggalMerah : '14:00 - 19:00 WIB',
        }
    },
    {
        idzona: 4,
        image: showEventBanner4,
        slugs: 'salokarnival',
        deskripsiLengkap: 'Vivamus porta quis sem vel lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec neque eget justo finibus vehicula vitae quis justo. Pellentesque viverra lobortis orci quis facilisis. Nulla ultrices ullamcorper eros vitae sagittis. Vivamus vitae tincidunt purus, in fermentum tellus. Phasellus ac imperdiet massa. Nullam rutrum nisi turpis, sed volutpat dui gravida ac.',
        nama: 'banner',
        title: 'Salokarnival di Plaza Ararya',
        deskripsi: 'Karnaval yang menampilkan karakter-karakter yang ada di Negeri SALOKA dan karakter-karakter yang muncul di cerita-cerita rakyat. Pertunjukkan ini dikemas dalam bentuk tarian dan photo moment.',
        link: '/show-event/salokarnival',
        zona: 'pesisir ,kamayayi & ararya',
        jadwal: {
            weekdays : '14:00 - 17:00 WIB',
            weekends : '14:00 - 19:00 WIB',
            tanggalMerah : '14:00 - 19:00 WIB',
        }
    },
];

export const showEventByIndex = index => showEvent[index];
export const mediaByIndex = index => mediaShowEvent[index % mediaShowEvent.length];
export const getIndexShowEventBySlugs = slugs => showEvent.findIndex(x => x.slugs === slugs);

export const getIndexesShowEventByID = id => showEvent.filter(x => x.idzona === id);