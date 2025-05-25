import React, { FC } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { INBOX_ROUTE } from "constants/Router";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(INBOX_ROUTE);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={handleNavigate}>
        Back Home
      </Button>
    </Stack>
  );
};
