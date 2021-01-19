/**
 * @file queries.js
 *
 * @description It contains the graphQL queries of CRUD ops
 */

export const ListsProducts = `query{
	listsProducts {
    id
    name
    price
    image
    info
  }
}`;
