/**
 * @file products.js
 *
 * Displays the products. It's divided in three parts. Furthemore handles a modal.
 */
import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Dimensions, ScrollView, SafeAreaView} from 'react-native';

//THEME HANDLER
import {useTheme} from '@react-navigation/native';

//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {LogOutAction} from '../../redux/actions/authAction';

//REACT-ROUTER NAVIGATOR
import {useHistory} from 'react-router-dom';

//GRAPHQL REQUEST
import {ListsProducts} from '../../graphql/queries';
import {
  DeleteProduct,
  UpdateProduct,
  CreateProduct,
} from '../../graphql/mutations';

//PARTS
import ProductsHeader from './productsHeader/productsHeader';
import ProductsSearcher from './productsSearcherBar/productSearcherBar';
import ProductsViewer from './productsViewer/productsViewer';
import CreateUpdateProducts from './modals/createUpdateProduct.js/createUpdateProducts';

//GLOBAL DIMENSIONS
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Products = () => {
  //THEME HANDLER
  const theme = useTheme();

  //INLINE STYLES
  const containerInline = {
    backgroundColor: theme.colors.background,
  };

  //REDUX
  const dispatch = useDispatch();
  const logIn = useSelector((state) => state.auth.logIn);
  const history = useHistory();

  //SEARCH HANDLER
  const [search, setSearch] = useState('');

  //MODAL HANDLER
  const [createUpdate, setCreateUpdate] = useState(undefined);

  //RESPONSIVE CHANGE HANDLER
  const [dimensions, setDimensions] = useState({window, screen});

  //PRODUCTS HANDLER
  const [products, setProducts] = useState([]);

  //Condition to avoid unnecesary reads.
  const [readedOnce, setReadedOnce] = useState(false);

  /**
   * @function logOut
   *
   * user call this function from ProductsHeader and it calls redux to logOut the app.
   */
  const logOut = () => {
    dispatch(LogOutAction());
    history.replace('/');
  };

  /**
   * @function readAll (CRUD)
   * @description readAll the products from graphql and set the results in the products state
   */
  const readAll = useCallback(() => {
    fetch('http://localhost:9002/graphql', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        query: ListsProducts,
      }),
    }).then((res) =>
      res.json().then((data) => {
        setProducts(data.data.listsProducts);
      }),
    );
  }, []);

  /**
   * @function deleteProduct (CRUD)
   * @description delete a product by id and set the results in the products state
   */
  const deleteProduct = useCallback(
    (id) => {
      fetch('http://localhost:9002/graphql', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          query: DeleteProduct,
          variables: {id: id},
        }),
      })
        .then((res) => {
          res.json().then((data) => {
            setProducts(
              products.filter((product) => {
                return product.id !== id;
              }),
            );
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [products],
  );

  /**
   * @function updateProduct (CRUD)
   * @description update a product by id and set the results in the products state
   */
  const updateProduct = useCallback(
    (id, product) => {
      fetch('http://localhost:9002/graphql', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          query: UpdateProduct,
          variables: {
            id: id,
            productInputModel: {
              name: product.name,
              price: product.price,
              info: product.info,
            },
          },
        }),
      })
        .then((res) => {
          res.json().then((data) => {
            let index = -1;

            products.some((prod) => {
              if (prod.id === product.id) {
                index = products.indexOf(prod);
                return true;
              } else {
                return false;
              }
            });

            //ALWAYS GONNA FIND AN INDEX THAT MATCHES.
            products[index] = product;
            setProducts([...products]);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [products],
  );

  /**
   * @function createProduct (CRUD)
   * @description create a Product in graphQL and set the results in the products state
   */
  const createProduct = useCallback(
    (product) => {
      fetch('http://localhost:9002/graphql', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          query: CreateProduct,
          variables: {
            productInputModel: product,
          },
        }),
      })
        .then((res) => {
          res.json().then((data) => {
            setProducts([...products, product]);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [products],
  );

  useEffect(() => {
    //HANDLES URL PATH ATTACK
    if (!logIn) {
      history.replace('/');
    }

    // LISTENER TO HANDLER DIMENSIONS
    Dimensions.addEventListener('change', (newParams) => {
      setDimensions({window: newParams.window, screen: newParams.screen});
    });

    //CALL TO GRAPHQL IF WE DON'T HAVE ANY PRODUCTS
    if (products.length === 0 && !readedOnce) {
      setReadedOnce(true);
      readAll();
    }
  }, [history, logIn, products.length, readAll, readedOnce]);

  return logIn ? (
    <SafeAreaView style={[styles.container, containerInline]}>
      <ScrollView stickyHeaderIndices={[1]}>
        <ProductsHeader dimensions={dimensions} logOut={logOut} />
        <ProductsSearcher
          theme={theme}
          setSearch={setSearch}
          search={search}
          dimensions={dimensions}
          setCreateUpdate={setCreateUpdate}
        />
        <ProductsViewer
          search={search}
          deleteProduct={deleteProduct}
          theme={theme}
          setCreateUpdate={setCreateUpdate}
          dimensions={dimensions}
          products={products}
        />
      </ScrollView>
      {createUpdate === undefined ? (
        <></>
      ) : (
        <CreateUpdateProducts
          item={createUpdate}
          updateProduct={updateProduct}
          createProduct={createProduct}
          theme={theme}
          dimensions={dimensions}
          setModal={setCreateUpdate}
        />
      )}
    </SafeAreaView>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
});

export default Products;
