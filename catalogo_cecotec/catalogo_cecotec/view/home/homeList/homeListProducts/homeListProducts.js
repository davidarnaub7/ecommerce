/**
 * @file: homeListProducts.js
 *
 * @description: Displays the products related to selection Items of the subheader.
 */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

//PARTS
import HomeListProductsItem from './homeListProductsItem/homeListProductsItem';

const HomeListProducts = ({products, theme}) => {
  const renderProducts = ({item, index}) => {
    return <HomeListProductsItem item={item} theme={theme} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProducts}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item, index) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
  },
});

export default HomeListProducts;
