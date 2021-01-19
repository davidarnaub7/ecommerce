/**
 * @file ProductStickyView.js
 *
 * @description Sticky view to buy the product
 *
 * @todo redirection to the buy view. Manage the request with redux.
 */

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

//ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from './spinner/spinner';

/**
 * DIMENSIONS
 */
//CONTAINER
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height / 7;

//BUTTONS
const BUTTON_WIDTH =
  Dimensions.get('window').width / (Dimensions.get('window').width / 60);
const BUTTON_HEIGHT =
  Dimensions.get('window').height / (Dimensions.get('window').height / 60);

const ProductStickyView = ({theme, price}) => {
  //STATE HANDLERS
  const [units, setUnits] = useState(1);

  //INLINE STYLEs
  const containerInline = {
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.notification, // unnecesary if we don't want to give some elevetation to the View.
  };
  const textInline = {
    color: theme.colors.text,
  };
  const buttonInline = {
    backgroundColor: '#154757',
  };
  return (
    <View style={[styles.container, containerInline]}>
      <View style={styles.row}>
        <Spinner theme={theme} setUnits={setUnits} units={units} />
        <Text style={[styles.price, textInline]}>{`${price * units} €`}</Text>
        <TouchableOpacity style={[styles.button, buttonInline]}>
          <MaterialCommunityIcons
            name={'shopping-outline'}
            size={30}
            color={'white'}
            style={styles.icon}
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
    borderRadius: 20,
    position: 'absolute',

    /**
     * IF We want to give some elevation UNCOMMENT THIS
     * FOLLOWING LINES
     * */
    // shadowOffset: {width: 0, height: -1},
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // elevation: 10,

    top: Dimensions.get('window').height / 1.15,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'System',
    fontSize: 22,
    fontWeight: '600',
    opacity: 0.6,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 5, //necesary to avoid that text moves when change to a bigger number.
  },
  //BUTTON
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: 30,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});

export default ProductStickyView;
