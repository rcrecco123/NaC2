import { ADD_ITEM } from "../actions/cart";

const initialState = {
  items: [
    {
      name: "dress",
      price: 15.99,
      image: "../../assets/cart2.png",
    },
    {
      name: "dress2",
      price: 15.99,
      image: "../../assets/cart2.png",
    },
    {
      name: "dress3",
      price: 15.99,
      image: "../../assets/cart2.png",
    },
  ],
  address: {
    billingAddress: "",
    billingZip: "",
    billingState: "",
    billingName: "",
    shippingAddress: "",
    shippingZip: "",
    shippingState: "",
    shippingName: "",
  },
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ITEM) {
    return Object.assign({}, state, {
      items: state.items.concat(action.item),
    });
  }

  return state;
}

export default rootReducer;
