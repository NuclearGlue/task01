exports.handler = async (event) => {
  const path = event.rawPath || event.path;
  if (path === "/hello") {
      return {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ "statusCode": 200, "message": "Hello from Lambda"}),  
      };
  }

  return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        statusCode: 400,
          message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${event.requestContext.http.method}`
      }),
  };
};
