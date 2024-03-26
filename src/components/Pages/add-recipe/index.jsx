import * as React from "react";

import TextField from "@mui/material/TextField";
import {
  Container,
  Button,
  Stack,
  Box,
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Close } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const countries = [
  {
    value: "GH",
    label: "Ghana",
  },
  {
    value: "NG",
    label: "Nigeria",
  },
  {
    value: "UK",
    label: "United Kingdom",
  },
  {
    value: "Other",
    label: "Other",
  },
];
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function AddRecipe() {
  return (
    <Container sx={{ my: "1rem" }} maxWidth="lg">
      <h2>Add recipe</h2>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
      />

      <TextField
        id="outlined-select-currency"
        select
        label="Country"
        defaultValue="GH"
        helperText="Please select your country"
        sx={{ my: "1rem" }}
        fullWidth
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <span>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          fullWidth
          rows={4}
        />
      </span>
      <Stack spacing={2} direction="row" sx={{ my: "1rem" }}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload image
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button variant="contained">submit</Button>
      </Stack>
    </Container>
  );
}
