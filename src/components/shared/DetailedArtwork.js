import React from "react";

// Components
import DetailedNavbar from "./DetailedNavbar";

// Material ui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

// Custom styles
import styles from "./DetailedArtwork.module.css";

const DetailedArtwork = () => {
  const { state } = useLocation();
  return (
    <div className={styles.detailedArtwork_container}>
      <DetailedNavbar />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, mb: 2, mt: 2 }}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                src={`https://www.artic.edu/iiif/2/${state.image_id}/full/843,/0/default.jpg`}
                className={styles.img}
                alt={state?.thumbnail?.alt_text}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <h2>Title: {state.title}</h2>
              <h2>Artist: {state.artist_title}</h2>
              <h2>Department: {state.department_title}</h2>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default DetailedArtwork;
