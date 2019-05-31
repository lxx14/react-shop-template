const initialState = {
  favorite: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case "ADD_TO_FAVORITE":
    console.log(action.data.id);
    console.log(state.favorite);
    return {
      ...state,
      favorite: [...state.favorite, action.data]
    }
  }
  return state;
};