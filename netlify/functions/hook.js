export const handler = async (event, context) => {
   console.log(event);
   var eventParsed = JSON.parse(event);

  // webhook registration
  if (eventParsed.httpMethod === "GET") {
    const userAgent = eventParsed.multiValueHeaders["User-Agent"];
    const clientId = eventParsed.multiValueHeaders["X-Adobesign-Clientid"];

    if (userAgent === "AdobeSign" && clientId === "UB7E5BXCXY") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "SUCCESS",
        }),
        headers: { "X-AdobeSign-ClientId": clientId },
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "FAILED!",
      }),
    };
  }

  // capture adobe events here
  if (eventParsed.httpMethod === "POST") {
    console.log(eventParsed.body);
  }
};
