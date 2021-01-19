/**
 * @file createUpdateProducts.js
 *
 * @description this component is created in order to modify or create a product. It's divided in
 * three parts and uses formik to handle the form.
 */
import React from 'react';
import {View, Modal, StyleSheet, TouchableWithoutFeedback} from 'react-native';

//THIRD PARTY FORM MODULE
import {Formik} from 'formik';

//PARTS
import Header from './header/header';
import ProductImage from './productImage/productImage';
import ProductInfo from './productInfo/productInfo';

const CreateUpdateProducts = ({
  theme,
  setModal,
  dimensions,
  item,
  updateProduct,
  createProduct,
}) => {
  const containerInline = {
    backgroundColor: theme.colors.background,
    width: dimensions.window.width / 1.2,
    height: dimensions.window.height / 5,
    top: dimensions.window.height / 6,
    shadowColor: theme.colors.notifications,
  };

  const product = item.product; // object we want to modify or create
  const create = item.create; //flag which indicates if we are creating or updating.

  return (
    <Modal
      animated
      animationType={'fadeInOut'}
      transparent={true}
      useNativeDriver={true}
      onRequestClose={() => {
        setModal(undefined);
      }}
      visible={product !== undefined}>
      <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={() => setModal(undefined)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <Formik
          initialValues={{
            name: product.name,
            price: product.price,
            info: product.info,
          }}
          onSubmit={(values) => {
            create
              ? createProduct({
                  id: product.id,
                  image: product.image,
                  name: values.name,
                  price: values.price,
                  info: values.info,
                })
              : updateProduct(product.id, {
                  id: product.id,
                  image: product.image,
                  name: values.name,
                  price: values.price,
                  info: values.info,
                });
            setModal(undefined);
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={[styles.container, containerInline]}>
              <Header
                handleSubmit={handleSubmit}
                setModal={setModal}
                theme={theme}
                dimensions={dimensions}
              />
              <View style={[styles.row]}>
                <ProductImage dimensions={dimensions} image={product.image} />
                <ProductInfo
                  dimensions={dimensions}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values}
                  product={product}
                  theme={theme}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'space-around',
    alignSelf: 'center',
    shadowRadius: 10,
    shadowOpacity: 0.8,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});

export default CreateUpdateProducts;
