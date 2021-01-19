/**
 * @file: productsHeader.js
 *
 * Displays header of products page.
 */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

//ICONS AND STYLING
import {BiUserCircle} from 'react-icons/bi';
import {COLORS} from '../../../constants/constants';

const ProductHeader = ({dimensions, logOut}) => {
  //INLINE STYLEs
  const colorText = {color: 'white'};
  const containerInline = {
    width: dimensions.window.width,
    height: dimensions.window.height / 7,
  };

  return (
    <View style={[styles.container, containerInline]}>
      <Text style={[styles.headerText, colorText]}>CECOTEC CRUD</Text>
      <View style={styles.interactionView}>
        <View style={styles.userView}>
          <BiUserCircle
            size={40}
            color={'white'}
            style={{alignSelf: 'center'}}
          />
          <Text style={[styles.userText, colorText]}>David</Text>
        </View>
        <TouchableOpacity onPress={() => logOut()}>
          <Text style={[styles.exitText, colorText]}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.header,
  },
  headerText: {
    fontFamily: 'System',
    fontSize: 30,
    fontWeight: '300',
    alignSelf: 'center',
    marginLeft: 10,
  },
  //USER PANE
  interactionView: {
    flex: 0.3,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userView: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    fontFamily: 'System',
    fontSize: 25,
    fontWeight: '600',
  },
  exitText: {
    fontFamily: 'System',
    fontSize: 25,
    fontWeight: '300',
    opacity: 0.6,
    alignSelf: 'center',
  },
});

export default ProductHeader;
