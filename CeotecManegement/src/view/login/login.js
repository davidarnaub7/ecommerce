/**
 * @file: LOGIN.JS
 *
 * @description: THIS PART ACTS AS A MAIN LOGIN CONTAINER.
 * HOLDING TWO MAIN VIEWS AND FLEXING IT INTO ROWS.
 */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, useColorScheme} from 'react-native';

//REDUX
import {useSelector} from 'react-redux';

//THEME HANDLER
import {useTheme} from '@react-navigation/native';

//REACT-ROUTER NAVIGATOR
import {useHistory} from 'react-router-dom';

//PARTS
import LoginFormLabel from './loginFormLabel/loginFormLabel';
import LoginFormInput from './loginFormInput/loginFormInput';
import {isMobileWeb} from '../../constants/constants';

//GLOBAL DIMENSIONS
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Login = () => {
  //STYLING
  const theme = useTheme();
  const schema = useColorScheme();

  //REACT-ROUTER NAVIGATOR
  const history = useHistory();

  //RESPONSIVE CHANGE HANDLER
  const [dimensions, setDimensions] = useState({window, screen});

  //REDUX
  const logIn = useSelector((state) => state.auth.logIn);

  useEffect(() => {
    if (logIn) {
      history.push('/products');
    }
    Dimensions.addEventListener('change', (newParams) => {
      setDimensions({window: newParams.window, screen: newParams.screen});
    });
  }, [history, logIn]);

  //INLINE STYLE
  const containerInline = {
    height: dimensions.window.height,
    width: dimensions.window.width,
    backgroundColor: theme.colors.background,
  };

  const packerInline = {
    background: schema === 'dark' ? theme.colors.text : theme.colors.background,
    opacity: 0.9,
    shadowColor: theme.colors.notification,
    width: dimensions.window.width / (isMobileWeb ? 1.2 : 2.5),
    height: dimensions.window.height / (isMobileWeb ? 1.5 : 2),
  };

  return (
    <View style={[styles.container, containerInline]}>
      <View style={[styles.packer, packerInline]}>
        <LoginFormLabel dimensions={dimensions} />
        <LoginFormInput dimensions={dimensions} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  packer: {
    alignSelf: 'center',
    shadowOpactiy: '0.3',
    shadowRadius: 5,
    borderRadius: 20,
    justifyContent: 'space-around',
  },
});

export default Login;
