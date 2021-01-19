/**
 * @file spinner.js
 *
 * Implements spinner use int ProductStickyView
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

//ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

//DIMENSIONS
const WIDTH =
  Dimensions.get('window').width / (Dimensions.get('window').width / 150);
const HEIGHT =
  Dimensions.get('window').height / (Dimensions.get('window').height / 55);

  const BUTTON_WIDTH =
  Dimensions.get('window').width / (Dimensions.get('window').width / 55);

const Spinner = ({theme, units, setUnits}) => {

  //INLINE STYLES
  const containerInline = {
    backgroundColor: theme.colors.notification,
  };
  const buttonInline = {
    backgroundColor: '#154757',
  };

  /**
   * @function spinneHandler
   *
   * Handles the spinner change.
   */
  const spinneHandler = (increment) => {
    const newUnits = increment + units;
    setUnits(newUnits > 1 ? newUnits : 1);
  };
  return (
    <View style={[styles.container, containerInline]}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, buttonInline]}
          onPress={() => spinneHandler(-1)}>
          <Ionicons
            name={'remove'}
            style={styles.icon}
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.unitsText}>{units}</Text>
        <TouchableOpacity
          style={[styles.button, buttonInline]}
          onPress={() => spinneHandler(1)}>
          <Ionicons
            name={'add'}
            style={styles.icon}
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 40,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    width: BUTTON_WIDTH,
    height: HEIGHT,
    borderRadius: 40,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  unitsText: {
    color: 'white',
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default Spinner;
