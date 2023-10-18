import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Text = styled(Typography)({
  backgroundColor: "#eee",
  padding: "3px 10px 0px 10px",
  borderRadius: "10px",
  fontSize: "14px",
  margin: "10px auto",
  marginTop: "20px",
});

export const Text2 = styled(Typography)({
  fontWeight: "bold",
  fontSize: "15px",
  margin: "0 auto",
  marginLeft: "60px",
  color: "#757575",
});

export const GlobalButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.dark,
  color: theme.palette.background.alt,
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "5em",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
}));

