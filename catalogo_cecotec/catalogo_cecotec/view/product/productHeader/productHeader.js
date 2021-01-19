/**
 * @file productHeader.js
 *
 * @description: Contains the header of main view including the back button, main CECOTEC label
 * and shop button
 *
 * @todo Shop button does not work. Requires an implementation.
 */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

//ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductHeader = ({theme, category, nav}) => {
  //INLINE STYLES
  const textHeaderInline = {
    color: theme.colors.text,
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => nav.goBack()}>
          <MaterialCommunityIcons
            name={'keyboard-backspace'}
            size={30}
            color={theme.colors.text}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, textHeaderInline]}>{category}</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={'shopping-outline'}
            size={30}
            color={theme.colors.text}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.12,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  headerText: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default ProductHeader;
