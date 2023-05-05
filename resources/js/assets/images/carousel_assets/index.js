import banner from "./banner_homepage.jpg";
import banner2 from "./banner_homepage_2.png";

export const media = [banner, banner2];
export const mediaByIndex = index => media[index % media.length];