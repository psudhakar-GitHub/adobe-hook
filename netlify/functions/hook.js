export const handler = async (event, context) => {
  event = JSON.parse(event);
  let body = JSON.parse(event.body);

  const userAgent = event.multiValueHeaders["User-Agent"];
  const clientId = event.multiValueHeaders["X-Adobesign-Clientid"];
  console.log(userAgent);
  console.log(clientId);
  console.log(body.webhookName);

  console.log(event.httpMethod);

  if (userAgent === "AdobeSign" && clientId === process.env.Client_Id) {
    // webhook registration
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers: { "X-AdobeSign-ClientId": clientId },
      };
    }

    // capture adobe events here
    if (event.httpMethod === "POST") {
      if (body.webhookName === process.env.wh_name) {
        console.log(
          "Agreement event - " +
            body.event +
            ". Agreement " +
            body.agreement.name +
            " with status " +
            body.agreement.status +
            " by sender " +
            body.agreement.senderEmail +
            " on " +
            String(body.agreement.createdDate).split("T")
        );
        return {
          statusCode: 200,
          headers: { "X-AdobeSign-ClientId": clientId },
        };
      }
    }
  }
};
