import { combineReducers } from "redux";
import artworksReducer from "./artworks/artworksReducer";
import favoriteReducer from "./favorite/favoriteListReducer";

const rootReducer = combineReducers({
  artworksState: artworksReducer,
  favoriteState: favoriteReducer
});

export default rootReducer;
