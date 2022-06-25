const initialState = {
  selectedItems: [],
  itemsCounter: 0,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, artwork) => total + artwork.quantity,
    0
  );
  return itemsCounter;
};

const favoriteReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
