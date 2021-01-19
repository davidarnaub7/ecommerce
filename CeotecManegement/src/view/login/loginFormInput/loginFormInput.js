/**
 * @file: loginFormInput.js
 * @description: Handles all the login form using formik (a third paty library)
 */
import React from 'react';
import {View, StyleSheet, Dimensions, useColorScheme} from 'react-native';

//CONSTANTS
import {isMobileWeb} from '../../../constants/constants';

//REDUX
import {useDispatch} from 'react-redux';
import {LogInAction} from '../../../redux/actions/authAction';

//THEME
import {useTheme} from '@react-navigation/native';

//THIRD PARTY FORM MODULE
import {Formik} from 'formik';

//PARTS
import LoginUsernameInput from './loginUsernameInput/loginUsernameInput';
import LoginPasswdInput from './loginPasswdInput/loginPasswdInput';
import LoginSubmitButton from './loginSubmitButton/loginSubmitButton';
import ErrorMessage from './errorMessage/errorMessage';

const LoginFormInput = ({dimensions}) => {
  //GLOBAL VARIABLES
  const theme = useTheme();
  const schema = useColorScheme();

  //REDUX
  const dispatch = useDispatch();

  //ERROR HANDLER
  const [error, setError] = React.useState('');

  //INLINE STYLES
  const inputContainerInline = {
    width: dimensions.window.width / (isMobileWeb ? 1.8 : 4.4),
    height: Dimensions.get('window').height / 18,
  };
  const textInputContainerInline = {
    borderColor: schema === 'dark' ? theme.colors.notification : '#D0D0D0',
    width: dimensions.window.width / (isMobileWeb ? 1.8 : 4.4),
    height: Dimensions.get('window').height / 18,
  };
  const textInputInline = {
    width: dimensions.window.width / (isMobileWeb ? 2.2 : 5.4),
    color: theme.colors.background,
  };
  const securyEntryInline = {
    width: dimensions.window.width / 20,
  };

  /**
   * @function loginPost
   * @param {String} url
   * @param {Object} data
   *
   * @description: Calls node in order to Login, and handles the response. If the response is
   * positive calls to redux in order to keep the token in async storage. If not shows an error
   * message.
   *
   */
  const loginPost = async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        passwd: data.passwd,
      }),
    }).then((e) => {
      if (e.status === 200) {
        setError('');
        e.json().then((json) => {
          dispatch(LogInAction(json.access_token));
        });
      } else if (e.status === 401) {
        setError('Usuario o contraseña no válidos');
      } else {
        setError('Algo ha ido mal. Vuelve a intentarlo en unos minutos.');
      }
    });
    return response;
  };
  return (
    <Formik
      initialValues={{username: '', passwd: ''}}
      onSubmit={(values) => {
        loginPost('http://localhost:4001/auth/login', {
          email: values.username,
          passwd: values.passwd,
        });
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <ErrorMessage error={error} dimensions={dimensions} />
          {/* USERNAME */}
          <LoginUsernameInput
            inputContainerInline={inputContainerInline}
            textInputInline={textInputInline}
            textInputContainerInline={textInputContainerInline}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.username}
            theme={theme}
          />
          {/* PASSWD */}
          <LoginPasswdInput
            inputContainerInline={inputContainerInline}
            textInputInline={textInputInline}
            textInputContainerInline={textInputContainerInline}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.passwd}
            theme={theme}
            securyEntryInline={securyEntryInline}
          />
          {/* SUBMIT BUTTON */}
          <LoginSubmitButton
            handleSubmit={handleSubmit}
            dimensions={dimensions}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: 'flex-start',
  },
  //REACT ICONS
  icon: {
    alignSelf: 'center',
  },
});

export default LoginFormInput;
