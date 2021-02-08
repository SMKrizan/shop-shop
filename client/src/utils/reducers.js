// takes in state and updates using reducer()
import { useReducer } from 'react';

// imports the possible actions that can be performed and creates a fn called 'reducer()'
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
    // action.type is passed to switch statement and compared with possible actions
    switch (action.type) {
        // if passed action.type value = `UPDATE_PRODUCTS`, returns a new state object with updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        // if passed action.type value = `UPDATE_CATEGORIES`, returns new state object with updated category contents
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        // if passed action.type value = `UPDATE_CURRENT_CATEGORY`, returns new state object with updated category values
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        // otherwise, state et all remain the same
        default:
            return state;
    }
};

// helps initialize global state object to provide functionality for updating state by running it through custom reducer() ; conceptually similar to 'useState()' but more in-depth 
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}