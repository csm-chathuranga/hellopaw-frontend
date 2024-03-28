import request, { JsonRequestDataType } from './request';

export function login(data) {
   return request({
     path: '/login',
     method: 'POST',
     data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 
export function me() {
  return request({
    path: '/me',
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

// import http from './httpServices'
// // import { apiUrl } from './config.json'

// const apiEndpoint = "http://127.0.0.1:8000/api";

// export function login ({email,password}){
//    // console.log(email);
//    return http.post(apiEndpoint+'/login', { email , password });
// }

// // export function checkLogin (){
// //    return http.post(apiEndpoint+'/login', { email , password });
// // }