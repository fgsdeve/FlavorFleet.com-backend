const request = require("request");

const options = {
  method: 'POST',
  url: 'https://dev-q2srai73x4viiio3.us.auth0.com/oauth/token',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    client_id: "y6AgthuhiWTGHweCAfyXPaC68cU617TJ",
    client_secret: "KaduuJdXGQJJS-la8XHmxAi0bOfw8VjbMyy_4ggww2y-lcuWAdU0oFsRgcYtAnav",
    audience: "mern-food-ordering-app-api",
    grant_type: "client_credentials"
  })
};

request(options, function (error, response, body) {
  if (error) {
    console.error('Error generating token:', error);
    throw new Error(error);
  }

  try {
    const parsedBody = JSON.parse(body);
    console.log("Access Token:", parsedBody.access_token);
    console.log("Expires In:", parsedBody.expires_in);
    console.log("Token Type:", parsedBody.token_type);
  } catch (parseError) {
    console.error('Error parsing response:', parseError);
  }
});
