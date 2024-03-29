let loc=window.location.hostname;
export const IMG_URL =loc==='localhost' ?  "http://pv1.happybaw.com/api/images/" : "http://pv1.happybaw.com/api/images/";
export const API_URL = loc==='localhost' ? "http://pv1.happybaw.com/api":"http://pv1.happybaw.com/api";