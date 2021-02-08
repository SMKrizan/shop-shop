import React, { useEffect } from "react";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
// enables reading state data and dispatching updates to state
import { useStoreContext } from "../../utils/GlobalState";

function CategoryMenu() {
  // calls custom hook to retrieve current state from global state object and uses dispatch method to update state
  const [state, dispatch] = useStoreContext();
  // destructures array from state
  const { categories } = state;
  // queries category data
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  // notices 'categoryData' is no longer undefined and runs 'dispatch()' fn, setting category data to global state
  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    }
  }, [categoryData, dispatch]);

  // updates global state
  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
