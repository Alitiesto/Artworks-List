import React from "react";
import { Link } from "react-router-dom";

// Material ui
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";

// Custom styles
import styles from "./DetailedNavbar.module.css";

const DetailedNavbar = () => {
  return (
    <div className={styles.detailNavbar_container}>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%", mb: 2, mt: 2 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Button
                variant="contained"
                component={Link}
                to="/lists"
                startIcon={<ArrowBackIcon />}
              >
                Back to lists
              </Button>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Button variant="contained" component={Link} to="/favorite_list">
                FavoriteList
                <FavoriteIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default DetailedNavbar;
