import { combineReducers } from "redux";
import { artReducer } from "./artworks/artworks";
import artworksReducer from "./artworks/artworksReducer";
import favoriteReducer from "./favorite/favoriteListReducer";

const rootReducer = combineReducers({
  artworksState: artworksReducer,
  artReducer:artReducer ,
  favoriteState: favoriteReducer
});

export default rootReducer;
