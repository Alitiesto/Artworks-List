const initialState = {
 page : 1 ,
 rowPerPage : 25 ,
 textSearch : ""
};

export const artReducer = (state = initialState, {type , payload}) => {
  switch (type) {
    case "SET_PAGE":
      return {
        ...state,
        page : payload
      };
      case "SET_ROWPERPAGE":
        return {
          ...state,
          rowPerPage : payload
        };
      case "SET_SEARCH":
          return {
            ...state,
            textSearch : payload
          };
        
    default:
      return state;
  }
};

export default artReducer;
