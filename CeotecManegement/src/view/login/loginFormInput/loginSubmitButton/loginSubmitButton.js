/**
 * @file: loginSubmitButton
 *
 * @description This component calls to formik when a submit event has been launched.
 */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {COLORS} from '../../../../constants/constants';

const LoginSubmitButton = ({handleSubmit, dimensions}) => {
  //INLINE STYLE
  const buttonInline = {
    width: dimensions.window.width / 4.4,
    height: dimensions.window.height / 18,
  };
  const textInline = {
    fontSize: dimensions.window.width / 60,
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonInline]}
      onPress={handleSubmit}>
      <Text style={[styles.textButton, textInline]}>Entrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: COLORS.header,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textButton: {
    fontFamily: 'System',
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
  },
});

export default LoginSubmitButton;
