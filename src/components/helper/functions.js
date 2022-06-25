const isInList = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
}

export { isInList };

