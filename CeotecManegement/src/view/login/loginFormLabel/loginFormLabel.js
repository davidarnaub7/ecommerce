/**
 * @file loginFormLabel.js
 *
 * @description: holds the label "Iniciar sesión" in order to get a cleaner code
 */
import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {isMobileWeb} from '../../../constants/constants';

const LoginFormLabel = ({dimensions}) => {
  const textInline = {
    fontSize: dimensions.window.width / (isMobileWeb ? 15 : 60),
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, textInline]}>Iniciar Sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'System',
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
    marginLeft: Dimensions.get('window').width / 20,
  },
});

export default LoginFormLabel;
