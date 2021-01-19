/**
 * @file homeListPopularItem.js
 *
 * @description: displays the productItem called from homeListPopular.js
 */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  Animated,
} from 'react-native';

const WIDTH = Dimensions.get('window').width / 1.5;
const HEIGHT = Dimensions.get('window').height / 8;

const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

const HomeListPopularItem = ({item, theme}) => {
  //INLINE STYLEs
  const containerInline = {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: theme.colors.primary,
  };

  const textInline = {
    color: theme.colors.text,
    textAlign: 'left',
  };

  //ANIMTATED STATES
  const [opacity, _] = useState(new Animated.Value(0));

  //ANIMATED METHOD
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <TouchableAnimated
      style={[styles.container, containerInline, {opacity}]}
      activeOpacity={0.8}>
      <View style={styles.row}>
        <Image style={styles.img} source={item.img} resizeMethod={'scale'} />
        <View style={styles.column}>
          <Text style={[styles.name, textInline]}>{item.name}</Text>
          <Text style={[styles.category, textInline]}>{item.category}</Text>
          <Text style={[styles.price, textInline]}>{item.price + ' €'}</Text>
        </View>
      </View>
    </TouchableAnimated>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  img: {
    width: WIDTH / 2.3,
    height: HEIGHT / 1.1,
  },
  column: {
    justifyContent: 'space-around',
  },
  name: {
    fontFamily: 'System',
    width: WIDTH / 3,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    opacity: 0.8,
  },
  category: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.6,
    textAlign: 'left',
  },
  price: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '500',
    opacity: 0.6,

    textAlign: 'left',
  },
});

export default HomeListPopularItem;
