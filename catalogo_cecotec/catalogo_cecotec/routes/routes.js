/**
 * @file: routes.js
 *
 * @description: Holds the routes using react-navigation.
 *
 * @summary: In other more complex case, the routes should be divided in reduce functions which 
 * handles each route that the users can follow.
 */
import * as React from 'react';

//STACK CREATOR
import {createStackNavigator} from '@react-navigation/stack';

//STACKS
import Home from '../view/home/home';
import Product from '../view/product/product';

const MainStack = createStackNavigator();

const MainRoutes = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="product"
        component={Product}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
