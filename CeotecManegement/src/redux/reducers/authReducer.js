/**
 * @file authReducer.js
 *
 * @description Handles the authAction events an gives a response to Redux.
 *
 * @summaryThe func that is commented makes a call to NODE in order to comprove that the token we
 * have is still valid. The reason why it is commented is because it give some complexibility to the
 * code and how in the practise It is not required I decided not including it.
 */
import {LOGIN, LOGOUT} from '../actions/authAction';

const intialStateAuth = {
  logIn: window.localStorage.getItem('userAuth') === null ? false : true,
};

// const getAuth = async () => {
//   const token = window.localStorage.getItem('userAuth');
//   console.log('TOKEN');
//   console.log(token);
//   let response;
//   if (token !== null) {
//     response = await fetch('http://localhost:4001/auth/', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         authorization: 'CECOTEC ' + token,
//       },
//     }).then((e) => {
//       if (e.status === 200) {
//         return true;
//       } else if (e.status === 401) {
//         return false;
//       }
//     });
//   }

//   return response;
// };

// intialStateDimensions.logIn = getAuth();

const AuthReducer = (state = intialStateAuth, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logIn: action.logIn,
      };
    case LOGOUT:
      return {
        ...state,
        logIn: action.logIn,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default AuthReducer;
