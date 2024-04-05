import request, { JsonRequestDataType } from './request';

export function getBanks() {
   return request({
     path: '/banks',
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 
 export function getbanksById(id) {
  return request({
    path: '/banks/byId/'+id,
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

 export function mybanks() {
  return request({
    path: '/banks/id',
    method: 'GET',
    dataType: JsonRequestDataType,
  }).then((response) => response);
} 

export function deletebanks(id) {
  return request({
    path: '/banks/delete/'+id,
    method: 'GET',
    dataType: JsonRequestDataType,
  }).then((response) => response);
} 

export function saveBank (data){
  return request({
    path: '/banks',
    method: 'POST',
    data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

export function updateBank (data){
  return request({
    path: '/banks/update',
    method: 'POST',
    data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}
