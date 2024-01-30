import http from './httpServices'
// import { apiUrl } from './config.json'

const apiEndpoint = "http://localhost:3002/api/auth";

export function login (email,password){
   return http.post(apiEndpoint+'/login', { email , password });
}

export function checkLogin (){
   return http.post(apiEndpoint+'/login', { email , password });
}