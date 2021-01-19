/**
 * @file productInfo.js
 * @description: Displays the product Inputs and handles their values.
 */
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const ProductInfo = ({
  product,
  dimensions,
  theme,
  values,
  handleBlur,
  handleChange,
}) => {
  //INLINE STYLES
  const containerInline = {
    width: dimensions.window.width / 2.5,
    height: dimensions.window.height / 2,
  };
  const textInputInline = {
    width: dimensions.window.width / 3,
    height: dimensions.window.height / 18,
    borderColor: theme.colors.notification,
    color: theme.colors.text,
  };
  const areaInputInline = {
    width: dimensions.window.width / 3,
    height: dimensions.window.height / 6,
    borderColor: theme.colors.notification,
    color: theme.colors.text,
  };

  return (
    <View style={[styles.container, containerInline]}>
      <TextInput
        style={[styles.textInput, textInputInline]}
        value={values.name}
        onBlur={handleBlur('name')}
        onChangeText={handleChange('name')}
        placeholder={'Nombre del producto'}
        placeholderTextColor={theme.colors.notification}
      />
      <TextInput
        style={[styles.textInput, textInputInline]}
        value={values.price}
        onBlur={handleBlur('price')}
        type={'number'}
        onChangeText={handleChange('price')}
        placeholder={'Precio del producto'}
        placeholderTextColor={theme.colors.notification}
      />
      <TextInput
        style={[styles.textInput, areaInputInline]}
        value={values.info}
        onBlur={handleBlur('info')}
        onChangeText={handleChange('info')}
        placeholder={'Información del producto'}
        placeholderTextColor={theme.colors.notification}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  textInput: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default ProductInfo;
