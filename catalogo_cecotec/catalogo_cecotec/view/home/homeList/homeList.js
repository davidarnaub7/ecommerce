import React from 'react';
/**
 * @file homeList
 *
 * @description: Contains the products displayers. It's divided in two elements.
 */
import {View, StyleSheet} from 'react-native';

//PARTS
import HomeListProducts from './homeListProducts/homeListProducts';
import HomeListPopular from './homeListPopular/homeListPopular';

const HomeList = ({theme, products}) => {
  return (
    <View style={styles.container}>
      <HomeListProducts products={products} theme={theme} />
      <HomeListPopular products={products} theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
});

export default HomeList;
