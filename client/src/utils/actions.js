// these are capitalized in practice to denote GraphQL or action code
// utilized by 'ProductList' component: will store product data retrieved by Apollo and store in this global state
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// will take category list retrieved from server by Apollo and store in this global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// connects category selection with the products for that category
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";