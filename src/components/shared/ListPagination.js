import React from "react";

// Material ui
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

// Custom styles
import styles from "./ListPagination.module.css";

const ListPagination = ({
  page,
  setPageAction,
  total_pages,
  rowPerPage,
  setRowPerPageAction,
  dispatch
}) => {
  const handleChange = (event, value) => {
    dispatch(setPageAction(value));
  };

  const handleRowPerPage = (event) => {
    dispatch(setRowPerPageAction(event.target.value));
  };

  return (
    <Container maxWidth="lg">
      <Stack spacing={2} sx={{ m: 3 }}>
        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="row-per-page">Rows per page</InputLabel>
              <Select
                labelId="row-per-page"
                id="demo-simple-select"
                value={rowPerPage}
                label="Row per page"
                onChange={handleRowPerPage}
              >
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={75}>75</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={10} className={styles.pagination_wrapper}>
            <Pagination
              count={total_pages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
export default ListPagination;
