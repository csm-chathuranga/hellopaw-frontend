// import PrettyError from 'pretty-error';
import RequestException from './request.exception';
import localStore from 'store2';


const message = (messageText, status, data= {}) => {
  // if(status==401 ){
  //   localStore.remove('auth');
  //   localStore.remove('logged',false);
  //  return window.location.replace('/auth')
  // }
  // alert();
  console.error(messageText, status, data);
};

const ErrorHandler = (error, options) => {
  let data = error?.response?.data?.data;

  const renderedError = error;
  // const renderedError = pe.render(error);
  // eslint-disable-next-line no-console
  console.error("Error is ===> ", renderedError);

  if (error.response && !options?.disableThrow) {
    switch (error.response.status) {
      case 403:
      case 422:
        data = error?.response?.data;
        message(data?.message, error.response.status, data);
        break;
      case 401:
        message('User is not logged in!', error.response.status, {});
        break;
      case 404:
        message(error.response.data.message, error.response.status, error.response.data);
        data = error.response.data;
        break;
      case 429:
        message('Please try again later!', error.response.status, error.response.data);
        data = error.response.data;
        break;
      default:
        break;
    }

    return Promise.reject(
      new RequestException(
        error.response.data?.message,
        error.response.status,
        data,
      ),
    );
  }

  return Promise.reject(new RequestException(
    process.env.NODE_ENV === 'development' ? (error?.message ?? error?.name) : 'Something went wrong!',
    500,
    {},
  ));
};
export default ErrorHandler;
