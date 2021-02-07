import { reducer } from '../utils/reducers';

// imports actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

// creates sample of what global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};

// this test aims to create a new state object using an object with parts 'type' and 'value' (in this case value='products')
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});

// tests how 'categories' array can be updated; notice how action 'type' and value='categories' have changed
test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

// updating state of 'currentCategory' to a new string value instead of array
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
  });