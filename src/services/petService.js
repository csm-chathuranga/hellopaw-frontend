import request, { JsonRequestDataType } from './request';

export function getMyPets(data) {
   return request({
     path: '/owner/myPets',
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 

// import http from './httpServices'

// const apiEndpoint = "http://127.0.0.1:8000/api";

// export function getMyPets (){
//    return http.get(apiEndpoint+'/owner/myPets');
// }

export function create (data){
//    return http.post(apiEndpoint+'/owner/petSave',data);
}

export function getMyPetsById (id){
  return request({
    path: '/owner/myPets/'+id,
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);

//    return http.get(apiEndpoint+'/owner/myPets/'+id);
}
// export function update (data){
//    return http.put(apiEndpoint+'/pet',data);
// }

// export function deletePet (data){
//    return http.delete(apiEndpoint+'/pet/'+data);
// }