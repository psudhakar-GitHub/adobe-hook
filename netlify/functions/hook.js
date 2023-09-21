import fetch from "node-fetch";

export const handler = async (event, context) => {
  console.log(event);
  
  return {
      statusCode: 200,
      body: JSON.stringify({
        message: "SUCCESS",
      }),
      headers: { "X-AdobeSign-ClientId": 'UB7E5BXCXY' },
    };
};
