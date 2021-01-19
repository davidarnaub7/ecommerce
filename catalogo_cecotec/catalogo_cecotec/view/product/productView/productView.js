/**
 * @file productView.js
 *
 * Displays the product. Not considering divided in sub element because of there are only 4 elements
 * to displays.
 */
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';

const ProductView = ({product, theme}) => {
  //INLINE STYLES
  const textInline = {
    color: theme.colors.text,
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={product.img} style={styles.img} />
      </View>
      <View style={styles.column}>
        <View style={styles.columnJoiner}>
          <Text style={[styles.name, textInline]}>{product.name}</Text>
          <Text style={[styles.category, textInline]}>{product.category}</Text>
        </View>
        <TextInput
          style={[styles.textInput, textInline]}
          editable={false}
          multiline={true}
          value={product.info}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'space-around',
  },
  //IMG STYLES
  imgContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height / 3,
  },
  //TEXT STYLES
  column: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    marginLeft: 20,
  },
  columnJoiner: {
    flex: 0.5,
    justifyContent: 'space-evenly',
  },
  name: {
    fontFamily: 'System',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'left',
    opacity: 0.8,
  },
  category: {
    fontFamily: 'System',
    fontSize: 23,
    fontWeight: '400',
    textAlign: 'left',
    opacity: 0.8,
    paddingHorizontal: 5
  },
  textInput: {
    fontFamily: 'System',
    fontSize: 16,
    textAlign: 'left',
    opacity: 0.8,
    marginHorizontal: 5,
  },
});

export default ProductView;
