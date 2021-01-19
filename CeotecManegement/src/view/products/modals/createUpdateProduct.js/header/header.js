/**
 * @file: header.js
 *
 * @description modal header which handles the save and exit button
 */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {IoMdClose} from 'react-icons/io';
import {COLORS} from '../../../../../constants/constants';

const Header = ({theme, dimensions, setModal, handleSubmit}) => {
  //INLINE STYLES
  const containerInline = {
    width: dimensions.window.width / 1.2,
    height: dimensions.window.height / 14,
  };

  const exitButtonContainerInline = {
    width: dimensions.window.width / 3,
    height: dimensions.window.height / 14,
  };

  const saveButtonContainerInline = {
    width: dimensions.window.width / 3,
    height: dimensions.window.height / 14,
  };

  const buttonInline = {
    width: dimensions.window.width / 5,
    height: dimensions.window.height / 16,
  };

  const textInline = {
    color: theme.colors.text,
  };

  return (
    <View style={[styles.container, {containerInline}]}>
      <View style={[styles.exitButtonContainer, exitButtonContainerInline]}>
        {/* if press the modal will close without updating */}
        <TouchableOpacity onPress={() => setModal(undefined)}>
          <IoMdClose size={30} color={theme.colors.text} style={styles.icon} />
        </TouchableOpacity>
        <Text style={[styles.header, textInline]}>Modificar Elemento</Text>
      </View>
      <View style={[styles.saveButtonContainer, saveButtonContainerInline]}>
        {/* Press to update */}
        <TouchableOpacity
          style={[styles.button, buttonInline]}
          onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  exitButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  header: {
    fontFamily: 'System',
    fontSize: 30,
    fontWeight: '600',
    marginLeft: 5,
    alignSelf: 'center',
  },
  saveButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: COLORS.header,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'white',
  },
});

export default Header;
