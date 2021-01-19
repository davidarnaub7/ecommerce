/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

//ROUTES
import {RouteStack} from './routes/routes';

//REDUX
import {Provider} from 'react-redux';
import {STORE} from './redux/reduxMain';

const App = () => {
  return (
    <Provider store={STORE}>
      <RouteStack />
    </Provider>
  );
};

export default App;
