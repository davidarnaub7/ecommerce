/**
 * @file: constants.js
 *
 * @description: Here are defined all the constants (static data) we are gonna use in the app.
 */

import {Dimensions} from 'react-native';

export const isMobileWeb = Dimensions.get('window').width <= 375;

export const DarkTheme = {
  dark: false,
  colors: {
    primary: '#1D1D1D',
    background: '#121212',
    card: '#262626',
    text: 'white',
    border: '#5A5A5A',
    notification: '#5A5A5A',
  },
};

export const LightTheme = {
  dark: false,
  colors: {
    primary: '#d0d0d0',
    background: 'white',
    card: '#F0F0F0',
    text: 'black',
    border: '#808080',
    notification: '#bbbbbb',
  },
};
export const COLORS = {
  primary: '#F07F7D',
  primaryFaded: '#F3A09F',
  header: '#3b5998',
  subHeader: '#35465d',
};

export const IMAGES = [
  'conga1.png',
  'conga2.png',
  'conga3.png',
  'termomix.png',
];
