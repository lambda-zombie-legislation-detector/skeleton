export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = 'http://legicycle-api.herokuapp.com/users/register';
  console.log(request);
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization' : localStorage.getItem('userTK')
    },
    body: JSON.stringify({
      "password": request.user.password,
      "username": request.user.email
    })
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};


export const loginUserService = (request) => {
  request.user.grant_type='password';

  var request=  Object.keys(request.user).map(key => key + '=' + request.user[key]).join('&');
  const LOGIN_API_ENDPOINT = 'http://legicycle-api.herokuapp.com/oauth/token';

  const parameters = {
    method: 'POST',
    withCredentials: true,
    auth: {
      username: "legicycle-client", // This is the client_id
      password: "legicycle-secret" ,// This is the client_secret,
      },
    headers: {
      Authorization: "Basic bGVnaWN5Y2xlLWNsaWVudDpsZWdpY3ljbGUtc2VjcmV0",
      'Content-Type': 'application/x-www-form-urlencoded',
     },
    // body: JSON.stringify(request.user)
    body: request
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      localStorage.setItem('userTK', json.access_token);
      return json;
    });
};
