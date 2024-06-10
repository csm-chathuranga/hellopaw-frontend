// import http from './httpServices'
import request, { JsonRequestDataType } from './request';

export function getService(type) {
   return request({
     path: '/service/'+type,
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }

 export function getServiceById(id) {
  return request({
    path: '/service/byId/'+id,
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

 export function setAppointment (data){
  return request({
     path: '/service/save',
     method: 'POST',
     data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
  // return http.post(apiEndpoint+'/owner/save',data);
}

export function addReview (data){
  return request({
     path: '/service/review/add',
     method: 'POST',
     data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
  // return http.post(apiEndpoint+'/owner/save',data);
}