import React from "react";

// Components
import DetailedNavbar from "./DetailedNavbar";

// functions
import { isInList } from "../helper/functions";

// Material
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Custom styles
import styles from "./FavoriteList.module.css";

const FavoriteList = () => {
  const state = useSelector((state) => state.favoriteState);
  const dispatch = useDispatch();

  return (
    <div className={styles.favorite_main_container}>
      <DetailedNavbar />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          {state.selectedItems.map((item) => (
            <Grid
              key={item.id}
              container
              spacing={2}
              sx={{ mb: 2, mt: 2 }}
              alignItems="center"
              className={styles.item_wrapper}
            >
              <Grid item xs={3} className={styles.img_wrapper}>
                <img
                  src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                  className={styles.img}
                  alt={item?.thumbnail?.alt_text}
                />
              </Grid>
              <Grid item xs={7} className={styles.title_wrapper}>
                <h2>Title: {item.title}</h2>
              </Grid>
              <Grid item xs={2} className={styles.title_wrapper}>
                {isInList(state, item.id) ? (
                  <IconButton
                    aria-label="remove from favorites"
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: item })
                    }
                  >
                    <FavoriteIcon sx={{ color: red[500] }} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: item })
                    }
                  >
                    <FavoriteIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default FavoriteList;
