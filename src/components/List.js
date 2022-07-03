import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { fetchArtworks } from "../redux/artworks/artworksAction";
import useDebouncedState from "./hooks/useDebouncedState";

// Components
import Artwork from "./shared/Artwork";
import Loader from "./shared/Loader";
import ListPagination from "./shared/ListPagination";
import ListNavbar from "./shared/ListNavbar";
import useUpdateEffect from "./hooks/useUpdateEffect";

// Material ui
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Custom styles
import styles from "./List.module.css";

const List = () => {
  const [rowPerPage, setrowPerPage] = useState(25);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const artworksState = useSelector((state) => state.artworksState);
  const { total_pages } = artworksState?.pagination;
  const [inputValue, searchText, setInputValue] = useDebouncedState("");

  const [apiCall, setapiCall] = useState(false);

  useEffect(() => {
    dispatch(fetchArtworks(page, searchText, rowPerPage));
  }, [apiCall, page]);

  useUpdateEffect(() => {
    if (page === 1) {
      setapiCall((prev) => !prev);
    } else {
      setPage(1);
    }
  }, [searchText, rowPerPage]);

  return (
    <div className={styles.main_container}>
      {artworksState.loading ? (
        <Loader />
      ) : artworksState.error ? (
        <h2>Something went wrong!</h2>
      ) : (
        <div>
          <ListNavbar {...{ inputValue, searchText, setInputValue }} />
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {artworksState.artworks.map((artwork) => (
                <Grid item xs={2} sm={4} md={4} key={artwork.id}>
                  {<Artwork artworkData={artwork} />}
                </Grid>
              ))}

              <ListPagination
                {...{ page, setPage, total_pages, rowPerPage, setrowPerPage }}
              />
            </Grid>
          </Container>
        </div>
      )}
    </div>
  );
};

export default List;
