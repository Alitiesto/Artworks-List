import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import List from "./components/List";

// Redux
import store from "./redux/store";
import DetailedArtwork from "./components/shared/DetailedArtwork";
import FavoriteList from "./components/shared/FavoriteList";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/lists" element={<List />} />
        <Route
          path="/lists/detalied_Artwork-:id"
          element={<DetailedArtwork />}
        />
        <Route path="/favorite_list" element={<FavoriteList />} />
        <Route path="/" element={<Navigate to="/lists" />} />
      </Routes>
    </Provider>
  );
}

export default App;
