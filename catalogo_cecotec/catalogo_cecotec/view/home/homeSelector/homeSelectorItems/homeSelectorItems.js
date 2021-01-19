/**
 * @file homeSelectorItem.js
 *
 * @description: Displays the avaiable products categories.
 */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

// STATIC DATA
import {ITEMS} from '../../../../constants/constants';

//PARTS
import HomeSelectorItem from './homeSelectorItem/homeSelectorItem';

const HomeSelectorItems = ({theme, selectedItem, setSelectedItem}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {ITEMS.map((item) => {
          return (
            <HomeSelectorItem
              item={item}
              theme={theme}
              selected={selectedItem}
              setSelected={setSelectedItem}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
  },
  scrollContent: {alignItems: 'center'},
});

export default HomeSelectorItems;
