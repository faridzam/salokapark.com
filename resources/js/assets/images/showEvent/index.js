import showEventBanner1 from "./showEvent1.png";
import showEventBanner2 from "./showEvent2.png";
import showEventBanner3 from "./showEvent3.png";
import showEventBanner4 from "./showEvent4.png";

export const mediaShowEvent = [showEventBanner1, showEventBanner2, showEventBanner3, showEventBanner4];
export const showEvent = [
    {
        nama: 'banner',
        title: 'Baru Klinthing Show di Jejogedan',
        deskripsi: 'Baru Klinthing Show merupakan pertunjukan yang mengadaptasi cerita rakyat mengenai Baru Klinthing, dengan memadukan teknologi modern, animasi 3D, laser, musik, dan air mancur menari',
        link: '/show-event/promosi-1',
    },
    {
        nama: 'banner',
        title: 'Galileo Liveness di Lumbung Ilmu Galileo',
        deskripsi: 'Atraksi edukasi yang dipersembahkan para talent SALOKA untuk para pengunjung yang masuk di wahana Lumbung Ilmu Galileo.',
        link: '/show-event/promosi-2',
    },
    {
        nama: 'banner',
        title: 'Baru Klinthing Show di Jejogedan',
        deskripsi: 'Dance show yang dilakukan sosok clown bernama Ayayi bersama 4 Peri Hutan Negeri SALOKA untuk berbagi keceriaan kepada para anak-anak di sekitar zona anak, Kamayayi.',
        link: '/show-event/promosi-3',
    },
    {
        nama: 'banner',
        title: 'Salokarnival di Plaza Ararya',
        deskripsi: 'Karnaval yang menampilkan karakter-karakter yang ada di Negeri SALOKA dan karakter-karakter yang muncul di cerita-cerita rakyat. Pertunjukkan ini dikemas dalam bentuk tarian dan photo moment.',
        link: '/show-event/promosi-4',
    },
];

export const promosiBannerByIndex = index => showEvent[index];
export const mediaByIndex = index => mediaShowEvent[index % mediaShowEvent.length];
