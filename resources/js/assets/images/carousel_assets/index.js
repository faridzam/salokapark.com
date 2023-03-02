import banner from "./banner_homepage.jpg";

export const media = [banner];
export const mediaByIndex = index => media[index % media.length];