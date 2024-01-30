import  axios  from "axios";
// import { getToken } from "../utils/getLocal"
// import {  toast } from 'react-toastify';

axios.defaults.headers.common['x-auth-token'] = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNzbSIsIm5pYyI6IjkzMTc1MjUzN3YiLCJnZW5kZXIiOiJtYWxlIiwicGhvbmVfbnVtYmVyIjoiMDc3MDE1Mjg4MSIsImVtYWlsIjoiZGV2LmNoYXRodXJhbmdhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiY3NtMTIzIiwic3RyZWV0IjpudWxsLCJjaXR5IjpudWxsLCJzdGF0ZSI6bnVsbCwicG9zdGFsX2NvZGUiOm51bGwsImF2YXRhciI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0xMS0wM1QxMjo0MDo0Ny4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0xMS0wM1QxMzowNDo1NS4wMDBaIiwiZGVsZXRlZEF0IjpudWxsLCJpYXQiOjE3MDE0NTU3NDksImV4cCI6MTcwMTQ2MDc0OX0.N09RzNIgecZDvFTBLZ9ru26yAOs3Y283APNwNbzuzj_5eBi2BYdDIEwaW9RkYMxGCHzHi0f0oGchS9hmYyujsKSzvSiJ5EwtpKPT3bZGHqzj-Ir8IxrBf6xvrEMQSgsp8aXyzjf3or3Pur9MMWaS-nd90ufbYOVqzqwCSNTe3a5vmZ6FiZubjiOw95uMKKMFLyK7skozco5P89KNrg03ZXNyZTB-7BCKE9wv79oSd-NFFa_DYlAFlv2-jDj30Xpz1HOT6X7CL0My1T1geejpcC97Q204mWqy2XLDkdQYHGDa15yLI95FPUUSwwwtPxcpuxk9uTo_HyV7PelOtSmfeh4Tahr8c38-GkhBNL2i5lFYcUP2lkpql-WDp2fa9RvfJk1XgwKgZNYtCcSERvbNEv3mewv20NLYYDBSodHwCvwGHkYyaoG3fhSL84Z7DkHuuWEP_kia9MdkV0HTUNedY7HZA_QdATH7vHmEKrOZkJMKPAd6xXuWGu5nemhtRLCv';

axios.interceptors.response.use(null,error=>{

    const expectedError=
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if(expectedError) {
        // toast('An unexpected error occured');
        // window.location.replace='/authentication/sign-in'
        // console.log("Logging the error",error);
        // alert('An unexpected error occured');
    }

    return Promise.reject(error);
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}