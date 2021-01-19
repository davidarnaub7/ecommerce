/**
 * @file: homeSelector.js
 *
 * @description: Show the subHeader View.  Divided in two parts..
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';

//PARTS
import HomeSelectorSearcher from './homeSelectorSearcher/homeSelectorSearcher';
import HomeSelectorItems from './homeSelectorItems/homeSelectorItems';

const HomeSelector = ({theme, selectedItem, setSelectedItem}) => {
  return (
    <View style={styles.container}>
      <HomeSelectorSearcher theme={theme} />
      <HomeSelectorItems
        theme={theme}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
  },
});

export default HomeSelector;
