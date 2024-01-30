import http from './httpServices'

const apiEndpoint = "http://localhost:8000/api";

// export function getMyPets (){
//    return http.get(apiEndpoint+'/user/my');
// }

export function create (data){
   return http.post(apiEndpoint+'/owner/save',data);
}

// export function update (data){
//    return http.put(apiEndpoint+'/pet',data);
// }

// export function deletePet (data){
//    return http.delete(apiEndpoint+'/pet/'+data);
// }