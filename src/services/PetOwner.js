// import http from './httpServices'
import request, { JsonRequestDataType } from './request';
// // const apiEndpoint = "https://pv1.happybaw.com/api";
// const apiEndpoint = "http://127.0.0.1:8000/api";

// export function getMyPets (){
//    return http.get(apiEndpoint+'/user/my');
// }

export function create (data){
   return request({
      path: '/owner/save',
      method: 'POST',
      data,
      dataType: JsonRequestDataType,
    }).then((response) => response);
   // return http.post(apiEndpoint+'/owner/save',data);
}

// export function update (data){
//    return http.put(apiEndpoint+'/pet',data);
// }

// export function deletePet (data){
//    return http.delete(apiEndpoint+'/pet/'+data);
// }