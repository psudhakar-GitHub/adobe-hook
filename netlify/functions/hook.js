import fetch from "node-fetch";

export const handler = async (event, context) => {
  var body = JSON.parse(event.body);
  console.log(event);

  // Fetch client id
  var clientid = body["X-AdobeSign-ClientId"];

  if (clientid === "UB7E5BXCXY") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "SUCCESS",
      }),
      headers: JSON.stringify({ "X-AdobeSign-ClientId": clientid }),
    };
  }

  return {
    statusCode: 500,
    body: JSON.stringify({
      message: "FAILED!",
    }),
  };
};
