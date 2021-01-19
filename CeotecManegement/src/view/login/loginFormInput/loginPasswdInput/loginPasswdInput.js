/**
 * @file: loginPasswdInput
 * @description: handles the passwd input.
 */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

//ICONS
import {IoEye, IoEyeOff} from 'react-icons/io5';

const LoginUsernameInput = ({
  inputContainerInline,
  textInputContainerInline,
  textInputInline,
  value,
  handleBlur,
  handleChange,
  theme,
  securyEntryInline,
}) => {
  //PASSWD VISIBLE HANDLER
  const [securyEntry, setSecuryEntry] = useState(true);

  return (
    <View style={[styles.inputContainer, inputContainerInline]}>
      <View style={[styles.textInputContainer, textInputContainerInline]}>
        <TextInput
          value={value}
          style={[styles.textInput, textInputInline]}
          onBlur={handleBlur('Passwd')}
          onChangeText={handleChange('passwd')}
          placeholder={'Contraseña'}
          placeholderTextColor={theme.colors.notification}
          secureTextEntry={securyEntry}
        />
        <TouchableOpacity
          style={[styles.secureEntry, securyEntryInline]}
          onPress={() => setSecuryEntry(!securyEntry)}>
          {securyEntry ? (
            <IoEye
              size={25}
              color={theme.colors.notification}
              style={styles.icon}
            />
          ) : (
            <IoEyeOff
              size={25}
              color={theme.colors.notification}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
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
