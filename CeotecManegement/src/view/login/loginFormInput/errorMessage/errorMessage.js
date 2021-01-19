/**
 * @file: errorMessage.js
 *
 * @description: Displays an errorMessage in the case that login has not succeed.
 */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../../../constants/constants';

const ErrorMessage = ({error, dimensions}) => {
  const containerInline = {
    width: dimensions.window.width / 3.5,
    height: dimensions.window.width / 20,
    top: -dimensions.window.height / 13,
  };
  return error === '' ? (
    <></>
  ) : (
    <View style={[styles.container, containerInline]}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'System',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '600',
    paddingHorizontal: 10,
    color: COLORS.danger,
  },
});

export default ErrorMessage;
