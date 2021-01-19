/**
 * @file homeListPopular.js
 *
 * @description: Displays the most popular products. Shows a previous label in order to indicate 
 * which section it
 * is.
 */
import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

//PARTS
import HomeListPopularItem from './homeListPopularItem/homeListPopularItem';

const HomeListPopular = ({theme, products}) => {
  //INLINE STYLEs
  const textInline = {
    color: theme.colors.text,
  };
  /**
   * @function renderProducts
   * Handler of renderItem Flatlist method whichs return all the object have to be shown.
   */
  const renderProducts = ({item, index}) => {
    return <HomeListPopularItem item={item} theme={theme} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={[styles.label, textInline]}>Populares</Text>
      </View>
      <View>
        <FlatList
          data={products.reverse()}
          renderItem={renderProducts}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'flex-start',
  },
  labelContainer: {
    margin: 20,
  },
  label: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    opacity: 0.8,
  },
});

export default HomeListPopular;
