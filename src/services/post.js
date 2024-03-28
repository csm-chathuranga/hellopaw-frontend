import request, { JsonRequestDataType } from './request';

export function getPosts(page) {
   return request({
     path: '/posts/:'+page,
     method: 'GET',
   //   data,
     dataType: JsonRequestDataType,
   }).then((response) => response);
 }
 
 export function myPosts() {
  return request({
    path: '/posts/id',
    method: 'GET',
    dataType: JsonRequestDataType,
  }).then((response) => response);
} 

export function deletePosts(id) {
  return request({
    path: '/posts/delete/'+id,
    method: 'GET',
    dataType: JsonRequestDataType,
  }).then((response) => response);
} 

export function savePost (data){
  return request({
    path: '/posts',
    method: 'POST',
    data,
    dataType: JsonRequestDataType,
  }).then((response) => response);
}
