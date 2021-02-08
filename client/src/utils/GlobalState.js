// 'createContext' is used to instantiate a new Context object - it creates the container to hold global state data and functionality
// 'useContext' will allow state created from 'createContext' fn to be used
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// creates new context object
const StoreContext = createContext();
// wraps application to make state data passed into it as a prop available to all other components, e.g. 'Consumers'
const { Provider } = StoreContext;

// this custom provider fn will manage and update state using reducer
// instantiates initial global state with useProductReducer() fn which returns 'state' and 'dispatch' every time it is run
const StoreProvider = ({ value = [], ...props }) => {
    // 'state': most up-to-date version of global state object
    // 'dispatch': method used to update state - specifically looking for an action object passed as an argument
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

// when this is executed from within a component, [state, dispatch] data provided by 'StoreProvider'
const useStoreContext = () => {
    return useContext(StoreContext);
  };

  export { StoreProvider, useStoreContext };