import axios from "axios";

const fetchArtworksRequest = () => {
  return {
    type: "FETCH_ARTWORKS_REQUEST",
  };
};

const fetchArtworksSuccess = (artworks, pagination) => {
  return {
    type: "FETCH_ARTWORKS_SUCESS",
    payload: { artworks, pagination },
  };
};

const fetchArtworksFailure = (error) => {
  return {
    type: "FETCH_ARTWORKS_FAILURE",
    payload: error,
  };
};  

export const fetchArtworks = (page , searchText , rowPerPage) => {
  return (dispatch) => {
    dispatch(fetchArtworksRequest());
    let search = searchText?.trim() ? `/artworks/search?q=${searchText}&` : "/artworks?"
    axios
      .get(
        `https://api.artic.edu/api/v1${search}fields=id,title,artist_display,thumbnail,department_title,artist_title,image_id&page=${page}&limit=${rowPerPage}`
      )
      .then((response) => {
        const artworks = response.data.data;
        const pagination = response.data.pagination;
        dispatch(fetchArtworksSuccess(artworks, pagination));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchArtworksFailure(errorMsg));
      });
  };
};
