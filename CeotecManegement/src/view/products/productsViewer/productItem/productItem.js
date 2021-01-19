import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

//STYLING AND ICONS
import {COLORS} from '../../../../constants/constants';
import {BsTrash} from 'react-icons/bs';

const ProductItem = ({
  dimensions,
  theme,
  item,
  deleteProduct,
  setCreateUpdate,
}) => {
  //INLINE STYLEs
  const containerInline = {
    width: dimensions.window.width / 3.5,
    height: dimensions.window.height / 2.4,
  };
  const imgInline = {
    width: dimensions.window.width / 3.5,
    height: dimensions.window.height / 2.6,
  };
  const rowInline = {
    width: dimensions.window.width / 5,
    height: dimensions.window.height / 20,
  };

  const productTextInline = {
    width: dimensions.window.width / 5.5,
    color: theme.colors.text,
  };

  return (
    <View style={[styles.container, containerInline]}>
      <TouchableOpacity
        onPress={() =>
          setCreateUpdate({
            product: item,
            create: false,
          })
        }>
        <Image
          source={
            require('../../../../assets/images/' + item.image.toLowerCase())
              .default
          }
          style={[styles.img, imgInline]}
        />
      </TouchableOpacity>
      {/* VIEW TO GIVE AN OPAQUE EFFECT TO THE IMAGE */}
      <View style={[styles.row, rowInline]}>
        <TouchableOpacity onPress={() => deleteProduct(item.id)}>
          <BsTrash size={30} style={styles.icon} color={theme.colors.text} />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={[styles.productText, productTextInline]}>
            {item.name}
          </Text>
          <Text style={[styles.priceText, productTextInline]}>
            {item.price + ' €'}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  img: {
    borderRadius: 10,
  },
  //INFO VIEW
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 20,
  },
  icons: {
    alignSelf: 'center',
  },
  productText: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  priceText: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    opacity: 0.6,
  },
});

export default ProductItem;
