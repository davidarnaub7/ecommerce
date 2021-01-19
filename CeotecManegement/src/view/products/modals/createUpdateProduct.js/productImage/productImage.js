/**
 * @file: productImage
 * @description: displays the product image. In this case the image is selected randomly due to we
 * are using a fake API.
 */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const ProductImage = ({image, dimensions}) => {
  //INLINE STYLES
  const containerInline = {
    width: dimensions.window.width / 2.4,
    height: dimensions.window.height / 2.5,
  };
  const imageInline = {
    width: dimensions.window.width / 3,
    height: dimensions.window.height / 3,
  };

  return (
    <View style={[styles.container, containerInline]}>
      <Image
        style={[styles.img, imageInline]}
        resizeMode={'contain'}
        source={
          require('../../../../../assets/images/' + image.toLowerCase()).default
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default ProductImage;
