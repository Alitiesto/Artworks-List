import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Functions
import { isInList } from "../helper/functions";

// Material ui
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

// Custom styles
import styles from "./Artwork.module.css";

const Artwork = ({ artworkData }) => {
  const state = useSelector((state) => state.favoriteState);
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={artworkData.title} className={styles.cardHeader} />
      <CardMedia
        component="img"
        height="194"
        image={`https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`}
        alt={artworkData?.thumbnail?.alt_text}
      />
      <CardActions disableSpacing>
        {isInList(state, artworkData.id) ? (
          <IconButton
            aria-label="remove from favorites"
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: artworkData })
            }
          >
            <FavoriteIcon sx={{ color: red[500] }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label="add to favorites"
            onClick={() => dispatch({ type: "ADD_ITEM", payload: artworkData })}
          >
            <FavoriteIcon />
          </IconButton>
        )}

        <Link
          to={`/lists/detalied_Artwork-${artworkData.id}`}
          state={artworkData}
        >
          Details
        </Link>
      </CardActions>
    </Card>
  );
};

export default Artwork;
