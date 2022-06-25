import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import SearchForm from "./SearchForm";

// Material ui
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";

// Custom styles
import styles from "./ListNavbar.module.css";

const ListNavbar = ({ inputValue, searchText, setInputValue }) => {
  const state = useSelector((state) => state.favoriteState);

  return (
    <div className={styles.listNavbar_container}>
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mb: 2 }} alignItems="center">
          <Grid item xs={6}>
            <SearchForm {...{ inputValue, searchText, setInputValue }} />
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button variant="contained" component={Link} to="/favorite_list">
              FavoriteList
              <Badge badgeContent={state.itemsCounter} color="primary">
                <FavoriteIcon />
              </Badge>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ListNavbar;
