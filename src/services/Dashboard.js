import request, { JsonRequestDataType } from './request';

export function getSummary(data) {
   return request({
     path: '/dashboard',
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 
