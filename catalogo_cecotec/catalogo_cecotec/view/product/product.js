/**
 * @file: product.js
 *
 * @description: Shows the product detailed info. It's divided in three parts.
 *
 * @param: Get the product param from reac-navigation navigate method (props.route.params)
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

//STYLING AND NAVIGATION
import {useNavigation, useTheme} from '@react-navigation/native';

//PARTS
import ProductHeader from './productHeader/productHeader';
import ProductView from './productView/productView';
import ProductStickyView from './productStickyView/productStickyView';

const Product = (props) => {
  //DATA ITEM
  const product = props.route.params.product;
  //STYLE VARIABLE
  const theme = useTheme();
  //NAV VARIABLE
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <ProductHeader theme={theme} category={product.category} nav={nav} />
      <ProductView product={product} theme={theme} />
      <ProductStickyView theme={theme} price={product.price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
