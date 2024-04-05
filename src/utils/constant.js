let loc=window.location.hostname;
export const IMG_URL =loc==='localhost' ?  "https://pv1.happybaw.com/api/images/" : "https://pv1.happybaw.com/api/images/";
export const API_URL = loc==='localhost' ? "https://pv1.happybaw.com/api":"https://pv1.happybaw.com/api";