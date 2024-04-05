import request, { JsonRequestDataType } from './request';

export function getZoom() {
   return request({
     path: '/createZoom',
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 
 