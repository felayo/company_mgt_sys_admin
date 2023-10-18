/* eslint-disable react/prop-types */
import {
  FlexBetween,
  GlobalButton,
} from "../styledComponents/styledComponents";
import { Box, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

const RecordHeader = ({title, buttonTitle, buttonClick}) => {
  return (
    <Box pb={2}>
      <FlexBetween>
        <Typography component="p" variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <GlobalButton
          variant="contained"
          onClick={buttonClick}>
          <Add sx={{ mr: "5px" }} />
          {buttonTitle}
        </GlobalButton>
      </FlexBetween>
    </Box>
  );
};

export default RecordHeader;
