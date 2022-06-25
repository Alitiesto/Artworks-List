import React from "react";

// Material ui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchForm = ({ inputValue, setInputValue }) => {
  const searchHandler = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "1" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          value={inputValue}
          onChange={searchHandler}
          size="small"
        />
      </div>
    </Box>
  );
};

export default SearchForm;
