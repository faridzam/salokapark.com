import daimami from "./daimami.png";
import rimba from "./rimba.png";
import jenju from "./jenju.png";
import tukCio from "./tuk-cio.png";
import srengenge from "./srengenge.png";
import iceCreamShop from "./ice-cream-shop.png";

export const mediaRestaurant = [daimami, rimba, jenju, tukCio, srengenge, iceCreamShop];
export const restaurant = [
    {
        nama: 'Daimami',
        title: 'Daimami',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lectus, blandit ac ipsum a, tincidunt tristique lorem. Aenean eu iaculis ex. Fusce euismod mauris ligula, ut porta turpis aliquam et. Cras quis venenatis neque, sed venenatis lacus. Mauris est lorem, dapibus sit amet efficitur et, fringilla vitae arcu.',
        link: '/restaurant/daimami',
    },
    {
        nama: 'Rimba',
        title: 'Rimba Café',
        deskripsi: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum feugiat urna ac vehicula. Suspendisse molestie tincidunt nunc ac feugiat. Sed dui mi, tempor id urna quis, interdum vulputate eros. Curabitur eleifend dui in lacus mollis luctus.',
        link: '/restaurant/rimba',
    },
    {
        nama: 'Jenju',
        title: 'Jenju Café',
        deskripsi: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ac luctus odio. In eu quam dui. Duis vel lectus odio. Fusce sit amet ullamcorper nibh. Nullam fermentum ligula elit, in condimentum dolor congue ut.',
        link: '/restaurant/jenju',
    },
    {
        nama: 'Tuk Cio',
        title: 'Tuk Cio Café',
        deskripsi: 'Sed libero felis, bibendum eu lacus at, maximus lobortis sem. Donec tempor sem sit amet lorem vulputate, non tempor purus varius. Nam mattis elementum rutrum. Ut lorem lectus, consequat a enim vitae, hendrerit pellentesque massa.',
        link: '/restaurant/tuk-cio',
    },
    {
        nama: 'Srengenge',
        title: 'Srengenge Café',
        deskripsi: 'Duis accumsan venenatis scelerisque. Donec ipsum lectus, aliquam et massa et, laoreet fermentum nisl. Nam finibus placerat lectus a faucibus. Sed euismod sit amet arcu non aliquam. Donec eget augue at felis tristique accumsan. Phasellus eget imperdiet magna. In arcu erat, ornare in dui ac, malesuada commodo nulla.',
        link: '/restaurant/srengenge',
    },
    {
        nama: 'Ice Cream Shop',
        title: 'Ice Cream Shop',
        deskripsi: 'Mauris elementum dui sit amet dignissim imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed convallis mattis condimentum. Phasellus eu facilisis sem. Donec faucibus velit vel aliquam sodales. Nam faucibus ex eu lacus venenatis, quis pellentesque risus feugiat.',
        link: '/restaurant/ice-cream-shop',
    },
];

export const restaurantBannerByIndex = index => restaurant[index];
export const mediaByIndex = index => mediaRestaurant[index % mediaRestaurant.length];
