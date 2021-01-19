/**
 * @file: loginUsernameInput.js
 * @description: handles username Input.
 */
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const LoginUsernameInput = ({
  inputContainerInline,
  textInputContainerInline,
  textInputInline,
  value,
  handleBlur,
  handleChange,
  theme,
}) => {
  return (
    <View style={[styles.inputContainer, inputContainerInline]}>
      <View style={[styles.textInputContainer, textInputContainerInline]}>
        <TextInput
          value={value}
          style={[styles.textInput, textInputInline]}
          onBlur={handleBlur('username')}
          onChangeText={handleChange('username')}
          placeholder={'Nombre de usuario'}
          placeholderTextColor={theme.colors.notification}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //TEXT INPUT HANDLERS
  inputContainer: {
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  textInputContainer: {
    borderRadius: 10,
    borderWidth: 0.3,
    flexDirection: 'row',
  },
  textInput: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 10,
  },
  //TOUCHABLE OPACIT
  secureEntry: {
    justifyContent: 'center',
  },
});

export default LoginUsernameInput;
