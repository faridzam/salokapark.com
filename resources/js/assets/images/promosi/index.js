import media1 from "./promosi1.png";
import media2 from "./promosi2.png";
import media3 from "./promosi3.png";
import media4 from "./promosi4.png";

export const mediaPromosi = [media1, media2, media3, media4];
export const promosiList = [
    {
        slugs: 'hari-pelanggan',
        title: 'Flash Sale Hari Pelanggan Nasional',
        deskripsiLengkap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sapien et sapien pulvinar interdum. Phasellus ut euismod lorem, sit amet fringilla neque. Phasellus non dolor in massa sollicitudin pharetra. Ut posuere, lectus a faucibus luctus, lorem ante sodales magna, eget pretium metus tellus nec enim. Vivamus id lacinia enim, et facilisis massa. Aenean luctus mauris a porta euismod. Aliquam facilisis nunc ac sapien fermentum varius.',
        nama: 'Flash Sale Hari Pelanggan Nasional',
        deskripsi: 'Ada FLASH SALE di Hari Pelanggan Nasional, Lur! Tanggal 2 September 2022 akan ada harga spesial!',
    },
    {
        slugs: 'dolan-sakpole',
        title: 'Agustus #DolanSokPole di Saloka Theme Park',
        deskripsiLengkap: 'Aenean lorem quam, eleifend quis libero nec, sodales aliquet massa. Nunc cursus velit dictum porttitor iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quam urna, varius vel maximus sed, hendrerit a tellus. Nam consectetur egestas tempus. Proin vestibulum turpis quis mi euismod, eget ultrices nisl aliquam. Vestibulum quis porta orci.',
        nama: 'Agustus #DolanSokPole di Saloka Theme Park',
        deskripsi: 'Ada FLASH SALE di Hari Pelanggan Nasional, Lur! Tanggal 2 September 2022 akan ada harga spesial!'
    },
    {
        slugs: 'roadshow-mall',
        title: 'Roadshow Mall to Mall: ASTRO MALL MAGELANG',
        deskripsiLengkap: 'Etiam commodo ligula ac turpis tristique imperdiet. Pellentesque eu sapien auctor, aliquam sem finibus, dictum leo. Nulla fermentum tortor ac rutrum ornare. Nam placerat mauris at tortor pharetra sollicitudin. Proin sit amet enim dapibus turpis feugiat malesuada. Duis et nulla non dolor euismod euismod luctus a nisl. Aenean eu leo a augue commodo fringilla sit amet id libero. Maecenas vel nibh elit. Nam laoreet nulla vitae libero fringilla, a malesuada dui porta.',
        nama: 'Roadshow Mall to Mall: ASTRO MALL MAGELANG',
        deskripsi: 'Saloka hadir di Kota Magelang dengan berbagai keceriaan dan keseruan! Tanggal 25 September - 2 Oktober 2022.'
    },
    {
        slugs: 'monday-funday',
        title: 'Monday Funday',
        deskripsiLengkap: 'Vivamus porta quis sem vel lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec neque eget justo finibus vehicula vitae quis justo. Pellentesque viverra lobortis orci quis facilisis. Nulla ultrices ullamcorper eros vitae sagittis. Vivamus vitae tincidunt purus, in fermentum tellus. Phasellus ac imperdiet massa. Nullam rutrum nisi turpis, sed volutpat dui gravida ac.',
        nama: 'Monday Funday',
        deskripsi: 'Ceria di hari senin dan nikmati lebih dari 20+ wahana! Dengan pembelian tiket 100k khusus di hari senin.'
    },
];
export const promosiListByIndex = index => promosiList[index];
export const mediaByIndex = index => mediaPromosi[index % mediaPromosi.length];
export const getIndexPromosiBySlugs = slugs => promosiList.findIndex(x => x.slugs === slugs);
