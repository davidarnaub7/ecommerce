/**
 * @file: productsViewer.js
 *
 * @description: Displays all the fetched products. Initily we pack the products in rows.
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';

//PARTS
import ProductItem from './productItem/productItem';

const ProductsViewer = ({
  dimensions,
  theme,
  products,
  deleteProduct,
  setCreateUpdate,
  search,
}) => {
  //INLINE STYLES
  const containerInline = {
    backgroundColor: theme.colors.background,
  };
  //PACKING HELPERS
  const productosRows = [[]];
  let index = 0;

  if (search !== '') {
    products = products.filter((prods) => {
      return prods.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  //PACKING PRODUCTS IN ROWS
  products.map((product) => {
    if (index === 3) {
      productosRows.push([product]);
      index = 1;
    } else {
      productosRows[productosRows.length - 1].push(product);
      index++;
    }
  });

  return (
    <View style={[styles.container, containerInline]}>
      {productosRows.map((prods) => {
        return (
          <View style={styles.row}>
            {prods.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  setCreateUpdate={setCreateUpdate}
                  deleteProduct={deleteProduct}
                  dimensions={dimensions}
                  theme={theme}
                  item={product}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: 50,
  },
});

export default ProductsViewer;
