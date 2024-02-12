const Response = (response) => ({
  body: response.data,
  status: response.status,
  message: null,
});
export default Response;
