import * as types from './index';

export const registerUserAction = (user) => {
  console.log("i am awesome");
  return {
    type: types.REGISTER_USER,
    user
  }
};

export const loginUserAction = (user) => {
  console.log("Josh is am awesome");
  return {
    type: types.LOGIN_USER,
    user
  }
};