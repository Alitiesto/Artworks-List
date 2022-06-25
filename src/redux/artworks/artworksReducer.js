const initialState = {
  loading: false,
  artworks: [],
  error: "",
  pagination: 1,
};

const artworksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ARTWORKS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ARTWORKS_SUCESS":
      return {
        ...state,
        loading: false,
        artworks: action.payload.artworks,
        pagination: action.payload.pagination,
      };
    case "FETCH_ARTWORKS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default artworksReducer;
