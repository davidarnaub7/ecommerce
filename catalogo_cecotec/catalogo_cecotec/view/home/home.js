/**
 * @file home.js
 * @description: Contains all main View divided in three parts.
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

//THIRD PARTY LIBRARY
import {UIActivityIndicator} from 'react-native-indicators';
//STYLING
import {useTheme} from '@react-navigation/native';

//DATA
import {ITEMS, PRODUCTS} from '../../constants/constants';

//PARTS
import HomeHeader from './homeHeader/homeHeader';
import HomeSelector from './homeSelector/homeSelector';
import HomeList from './homeList/homeList';

const Home = () => {
  const theme = useTheme();

  //STATES
  const [selectedItem, setSelectedItem] = React.useState(ITEMS[0]);
  const [barrier, setBarrier] = React.useState(false);

  //DATA
  const products = PRODUCTS[selectedItem.label];

  //INLNE STULES
  const containerInline = {backgroundColor: theme.colors.background};

  /**
   * @function selectItemHandler
   *
   * updates item selection and activate the barrier
   */
  const selectItemHandler = (item) => {
    setSelectedItem(item);
    setBarrier(false);
  };

  setTimeout(() => {
    setBarrier(true);
  }, 1000);

  return (
    <View style={[styles.container, containerInline]}>
      <HomeHeader theme={theme} />
      <HomeSelector
        theme={theme}
        setSelectedItem={selectItemHandler}
        selectedItem={selectedItem}
      />
      {barrier ? (
        <HomeList theme={theme} products={products} />
      ) : (
        <View style={styles.indicator}>
          <UIActivityIndicator color={theme.colors.text} size={40} r />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  indicator: {
    flex: 0.6,
  },
});

export default Home;
