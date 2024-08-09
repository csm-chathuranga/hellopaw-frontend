import request, { JsonRequestDataType } from './request';

export function getSummary(data) {
   return request({
     path: '/dashboard',
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 

 export function getUsers(type) {
  return request({
    path: '/getUsers/'+type,
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}