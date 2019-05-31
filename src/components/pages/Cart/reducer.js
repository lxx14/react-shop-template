const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.data]
      }
    case "DELETE_FROM_CART":
    console.log(action.data);
      return {
        ...state,
        cart: state.cart.filter(item=>item.id !== parseFloat(action.data))
      }
  }
  return state;
};