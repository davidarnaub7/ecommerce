/**
 * @file mutations.js
 *
 * @description It contains the graphQL mutations of CRUD ops
 */
export const DeleteProduct = `mutation DeleteProduct($id: ID!){
  deleteProduct(id:$id){
    id
  }
}`;

export const UpdateProduct = `mutation updateProduct($id: ID!, $productInputModel: ProductInputModel!){
  updateProduct(id:$id, productInputModel: $productInputModel){
    id
    name
    price
    image
    info
  }
}`;

export const CreateProduct = `mutation createProduct($productInputModel: ProductInputModel!){
  createProduct(productInputModel: $productInputModel){
    id
    name
    price
    image
    info
  }
}`;
