import http from './httpServices'

// const apiEndpoint = "https://pv1.happybaw.com/api";
const apiEndpoint = "http://127.0.0.1:8000/api";
// export function getMyPets (){
//    return http.get(apiEndpoint+'/user/my');
// }

export function create (data){
   return http.post(apiEndpoint+'/doctor/save',data);
}

// export function update (data){
//    return http.put(apiEndpoint+'/pet',data);
// }

// export function deletePet (data){
//    return http.delete(apiEndpoint+'/pet/'+data);
// }