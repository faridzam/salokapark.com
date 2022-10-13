import media1 from "./media-1.jpg";
import media2 from "./media-2.png";

export const media = [media1, media2];
export const mediaByIndex = index => media[index % media.length];