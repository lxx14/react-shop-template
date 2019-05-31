const initialState = {
  favorite: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.data]
      }
    case "DELETE_FROM_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter(item=>item.id !== parseFloat(action.data))
      }
  }

  return state;
};