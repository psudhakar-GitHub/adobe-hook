export const handler = async (event, context) => {

  // webhook registration
  if (event.httpMethod === "GET") {
    const userAgent = eventParsed.multiValueHeaders["User-Agent"];
    const clientId = eventParsed.multiValueHeaders["X-Adobesign-Clientid"];

    if (userAgent === "AdobeSign" && clientId === process.env.Client_Id) {
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
  if (event.httpMethod === "POST") {
    console.log(JSON.parse(event.body));
  }
};
