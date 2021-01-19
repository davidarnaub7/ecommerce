/**
 * @file homeSelectorItem
 *
 * Displays an Item in homeselectorItems Scroll
 *
 * @description The selected button will appear with the text label. The other not selected will
 * only appear with the icon.
 */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  Animated,
} from 'react-native';

const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

const HomeSelectorItem = ({item, theme, setSelected, selected}) => {
  //INLINE STYLEs
  const containerInline = {
    // backgroundColor: theme.colors.primary,
    width:
      selected === item
        ? Dimensions.get('window').width / 2.6
        : Dimensions.get('window').width / 5,
  };

  const labelTextInline = {
    color: theme.colors.text,
  };

  return (
    <TouchableAnimated
      style={[styles.container, containerInline]}
      onPress={() => setSelected(item)}>
      <View style={styles.row}>
        <Image source={item.img} style={styles.img} />
        {/* Showing text only if it is selected */}
        {selected === item ? (
          <Text style={[styles.labelText, labelTextInline]}>{item.label}</Text>
        ) : (
          <></>
        )}
      </View>
    </TouchableAnimated>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 14,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width: Dimensions.get('window').width / 8,
    height: Dimensions.get('window').height / 18,
    alignSelf: 'center',
    marginBottom: 2,
  },
  labelText: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    opacity: 0.8,
  },
});

export default HomeSelectorItem;
