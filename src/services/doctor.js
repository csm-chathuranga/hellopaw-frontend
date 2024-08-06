import request, { JsonRequestDataType } from './request';

export function getDoctors() {
   return request({
     path: '/doctor',
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 
 export function getPending() {
  return request({
    path: '/doctor/pending',
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

export function confirm (data){
  return request({
     path: '/doctor/confirm',
     method: 'POST',
     data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
  // return http.post(apiEndpoint+'/owner/save',data);
}

export function Reject(id) {
  return request({
    path: '/doctor/reject/'+id,
    method: 'GET',
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

 export function getShedule(id) {
  return request({
    path: '/doctor/getShedule/'+id,
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

 export function setShedule (data){
  return request({
     path: '/doctor/setShedule',
     method: 'POST',
     data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
  // return http.post(apiEndpoint+'/owner/save',data);
}


export function setBookingApi (data){
  return request({
     path: '/doctor/setBooking',
     method: 'POST',
     data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
  // return http.post(apiEndpoint+'/owner/save',data);
}


export function getMyShedule() {
  return request({
    path: '/getMyShedule',
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

export function getMySheduleDoctor() {
  return request({
    path: '/doctorShedule',
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}


export function getSession(id) {
  return request({
    path: '/getSession/'+id,
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

// import http from './httpServices'

// // const apiEndpoint = "https://pv1.happybaw.com/api";
// const apiEndpoint = "http://127.0.0.1:8000/api";
// // export function getMyPets (){
// //    return http.get(apiEndpoint+'/user/my');
// // }

export function create (data){
   // return http.post(apiEndpoint+'/doctor/save',data);
}

// export function update (data){
//    return http.put(apiEndpoint+'/pet',data);
// }

// export function deletePet (data){
//    return http.delete(apiEndpoint+'/pet/'+data);
// }