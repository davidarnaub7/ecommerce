/**
 * @file homeListProductItem
 *
 * @description: Implements the product View. Divided in two.
 */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';

//NAVIGTION HANDLER
import {useNavigation} from '@react-navigation/native';

//PARTS
import InfoView from './infoView/infoView';

//DIMENSIONS CONSTANTS
const WIDTH = Dimensions.get('window').width / 1.6;
const HEIGHT = Dimensions.get('window').height / 2.7;

const HomeListProductsItem = ({item, theme}) => {
  //NAV VARIABLES
  const nav = useNavigation();

  //INLINE STYLES
  const containerInline = {
    backgroundColor: theme.colors.primary,
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
    <Animated.View style={[styles.container, containerInline, {opacity}]}>
      <TouchableOpacity
        onPress={() => nav.navigate('product', {product: item})}>
        <Image style={styles.img} source={item.img} />
      </TouchableOpacity>
      <InfoView item={item} theme={theme} WIDTH={WIDTH} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'space-around',
    marginHorizontal: 5,
    borderRadius: 15,
  },
  img: {
    width: Dimensions.get('window').width / 3,
    alignSelf: 'center',
    height: Dimensions.get('window').height / 6,
  },
});

export default HomeListProductsItem;
