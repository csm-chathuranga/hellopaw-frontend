import  axios  from "axios";
// import { getToken } from "../utils/getLocal"
// import {  toast } from 'react-toastify';

// ;
axios.defaults.headers.common['Authorization'] =`Bearer ${localStorage.getItem('token')}`;

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