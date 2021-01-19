/**
 * @file: routes.js
 *
 * @description: Holds the routes using react-router.
 *
 * @summary: In other more complex case, the routes should be divided in reduce functions which
 * handles each route that the users can follow.
 */
import React, {useEffect} from 'react';

//COLOR SCHEME HANDLERS
import {useColorScheme} from 'react-native';
import {DarkTheme, LightTheme} from '../constants/constants';

//ROUTES THIRD PARTY LIBRARIES
import {NavigationContainer} from '@react-navigation/native';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//STACKS
import Login from '../view/login/login';
import Products from '../view/products/products';
import ErrorPage from '../view/error_page/error';

export const RouteStack = (props) => {
  const scheme = useColorScheme();

  //GIVING A TITLE TO TAB
  useEffect(() => {
    document.title = 'Cecotec';
  }, []);

  return (
    // Initalizing the theme color
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to={'/login'} />
          </Route>
          <Route exact path="/products" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </NavigationContainer>
  );
};
