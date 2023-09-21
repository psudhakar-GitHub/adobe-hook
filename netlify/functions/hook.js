export const handler = async (event, context) => {
  let body = JSON.parse(event.body);
  console.log(body);

  const userAgent = event.multiValueHeaders["User-Agent"];
  const clientId = event.multiValueHeaders["X-Adobesign-Clientid"];

  if (userAgent === "AdobeSign" && clientId === process.env.Client_Id) {
    // webhook registration
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "SUCCESS",
        }),
        headers: { "X-AdobeSign-ClientId": clientId },
      };
    }

    // capture adobe events here
    if (event.httpMethod === "POST") {
      if (body.webhookName === process.env.wh_name) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: "SUCCESS",
          }),
          headers: { "X-AdobeSign-ClientId": clientId },
        };
      }
    }
  }
};
