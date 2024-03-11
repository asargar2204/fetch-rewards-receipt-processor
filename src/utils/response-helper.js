const formatResponse = (response, statusCode, data) => {
    response.status(statusCode).json(data);
  };
  
  const setResponse = (response, statusCode, data) => {
    response.status(statusCode).send(data);
  };
  
  export default {
    setResponse
  };