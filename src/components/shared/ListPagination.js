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
  setPage,
  total_pages,
  rowPerPage,
  setrowPerPage,
}) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleRowPerPage = (event) => {
    setrowPerPage(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Stack spacing={2} sx={{ m: 3 }}>
        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={10} className={styles.title_wrapper}>
            <Pagination
              count={total_pages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Grid>
          <Grid item xs={2} className={styles.title_wrapper}>
            <FormControl fullWidth size="small">
              <InputLabel id="row-per-page">Rows per page</InputLabel>
              <Select
                labelId="row-per-page"
                id="demo-simple-select"
                value={rowPerPage}
                label="Row per page"
                onChange={handleRowPerPage}
              >
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={24}>24</MenuItem>
                <MenuItem value={48}>48</MenuItem>
                <MenuItem value={96}>96</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
export default ListPagination;
