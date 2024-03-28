import axios, { ResponseType } from 'axios';
import querystring from 'qs';
import localStore from 'store2';
import { serialize } from 'object-to-formdata';
import ErrorHandler from './error.handler';
import Response from './response';


export const JsonRequestDataType = 'json';
export const FormDataRequestDataType = 'form-data';
export const ParamRequestDataType = 'param';

export const PostMethodType = 'POST';
export const GetMethodType = 'GET';
export const PutMethodType = 'PUT';
export const DeleteMethodType = 'DELETE';

const getData = (options) => {
  switch (options.dataType) {
    case JsonRequestDataType:
      return JSON.stringify(options.data);
    case ParamRequestDataType:
      return options.data;
    case FormDataRequestDataType:
      return serialize(options.data);
    default:
      return options.data;
  }
};

const getContentType = (dataType) => {
  switch (dataType) {
    case JsonRequestDataType:
    case ParamRequestDataType:
      return 'application/json';
    default:
      return 'application/x-www-form-urlencoded;charset=utf-8';
  }
};

const getService = (options) => {
  let headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': getContentType(options.dataType),
    Authorization: `Bearer ${localStore('authToken')}`,
     'AuthKey': `123456`,
  };

  if (options.headers) {
    headers = { ...headers, ...options.headers };
  }

  const service = axios.create({
    headers,
    baseURL:`http://pv1.happybaw.com/api`,
  });
  // @ts-ignore
  service.interceptors.response.use(Response, (error) => ErrorHandler(error, options));

  return service;
};

const request = (options) => {
  const service = getService(options);

  //console.log("Options ==> ", options);

  return service.request({
    method: options.method,
    url: options.path,
    responseType: options.dataType || 'json' ,
    data: options.method !== GetMethodType ? getData(options) : null,
    params: options.params,
  });
};

export default request;
