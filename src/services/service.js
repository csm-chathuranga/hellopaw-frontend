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
