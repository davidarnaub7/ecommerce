/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler'; //REQUIRED BY REACT NAVIGATION

//STYLING
import {useColorScheme} from 'react-native';
import {DarkTheme, LightTheme} from './catalogo_cecotec/constants/constants';

//REACT NAVIGATION
import {NavigationContainer} from '@react-navigation/native';

//ROUTES
import MainRoutes from './catalogo_cecotec/routes/routes';

const App = () => {
  const schema = useColorScheme();

  return (
    <NavigationContainer theme={schema === 'dark' ? DarkTheme : LightTheme}>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
