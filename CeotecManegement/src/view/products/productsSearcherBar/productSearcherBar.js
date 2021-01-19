/**
 * @file: productSearcherBar.js
 *
 * @description: Acts as a subheader in which you can find a product by name. Also handles the
 * adding button.
 */
import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

//ICONS AND STYLING
import {COLORS, IMAGES} from '../../../constants/constants';
import {IoAddSharp} from 'react-icons/io5';

const ProductSearcherBar = ({
  theme,
  dimensions,
  search,
  setCreateUpdate,
  setSearch,
}) => {
  //INLINE STYLEs
  const containerInline = {
    width: dimensions.window.width,
    height: dimensions.window.height / 10,
  };
  const searcherBarContainerInline = {
    borderColor: theme.colors.card,
    backgroundColor: theme.colors.card,
    width: dimensions.window.width / 3,
    height: dimensions.window.height / 18,
  };

  const textInputInline = {
    width: dimensions.window.width / 3,
    height: dimensions.window.height / 18,
    color: theme.colors.text,
  };

  return (
    <View style={[styles.container, containerInline]}>
      <View style={styles.searchContainer}>
        <View style={[styles.searcherBarContainer, searcherBarContainerInline]}>
          <TextInput
            value={search}
            style={[styles.textInput, textInputInline]}
            onChangeText={(t) => setSearch(t)}
            onEndEditing={() => {
              setSearch('');
            }}
            placeholder={'Buscar'}
            placeholderTextColor={theme.colors.notification}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          setCreateUpdate({
            product: {
              id: Math.random(),
              name: '',
              image: IMAGES[Math.floor(Math.random() * 3) + 1],
              info: '',
              price: '',
            },
            create: true,
          })
        }
        style={styles.button}>
        <IoAddSharp size={40} color={'white'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.subHeader,
  },
  searchContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  userText: {
    fontFamily: 'System',
    fontSize: 25,
    fontWeight: '600',
  },
  searcherBarContainer: {
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 20,
    borderRadius: 2,
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
  },
  //ICON
  button: {
    justifyContent: 'center',
    marginRight: 10,
  },
  icon: {
    alignSelf: 'center',
  },
});

export default ProductSearcherBar;
