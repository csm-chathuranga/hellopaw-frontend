import http from './httpServices'

const apiEndpoint = "http://localhost:8000/api";

export function getMyPets (){
   return http.get(apiEndpoint+'/owner/myPets');
}

export function create (data){
   return http.post(apiEndpoint+'/owner/petSave',data);
}

export function getMyPetsById (id){
   return http.get(apiEndpoint+'/owner/myPets/'+id);
}
// export function update (data){
//    return http.put(apiEndpoint+'/pet',data);
// }

// export function deletePet (data){
//    return http.delete(apiEndpoint+'/pet/'+data);
// }