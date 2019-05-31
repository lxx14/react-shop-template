import data from '../../../system/items.json';

const initialState = {
  items: data,
  searchString: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_FIND_STRING":
      return {
        ...state,
        searchString: action.data
      }
  }
  return state;
};