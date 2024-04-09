import request, { JsonRequestDataType } from './request';

export function getNewSection() {
   return request({
     path: '/newSection',
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 
 export function getNewSectionById(id) {
  return request({
    path: '/newSection/byId/'+id,
    method: 'GET',
  //   data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

 export function myNewSection() {
  return request({
    path: '/newSection/id',
    method: 'GET',
    dataType: JsonRequestDataType,
  }).then((response) => response);
} 

export function deleteNewSection(id) {
  return request({
    path: '/newSection/delete/'+id,
    method: 'GET',
    dataType: JsonRequestDataType,
  }).then((response) => response);
} 

export function saveNewSection (data){
  return request({
    path: '/newSection',
    method: 'POST',
    data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}

