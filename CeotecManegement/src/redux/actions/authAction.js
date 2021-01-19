/**
 * @file authAction.js
 *
 * @description Handles the logIn and logOut. Basiclly set or remove an Item from storage an calls
 * to the reducer
 *
 * @summary I don't find necessary comment the next functions due to I have already explained it in
 * the description above.
 */

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const LogInAction = (token) => {
  return (dispatch) => {
    window.localStorage.setItem('userAuth', token);
    dispatch(LogInSucceeded());
  };
};
export const LogOutAction = (token) => {
  return (dispatch) => {
    window.localStorage.removeItem('userAuth');
    dispatch(LogOutSucceeded());
  };
};

export const LogInSucceeded = () => {
  return {
    logIn: true,
    type: LOGIN,
  };
};
export const LogOutSucceeded = () => {
  return {
    logIn: false,
    type: LOGOUT,
  };
};
