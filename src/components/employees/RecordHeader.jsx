/* eslint-disable react/prop-types */
import {
  FlexBetween,
  GlobalButton,
} from "../styledComponents/styledComponents";
import { Box, Typography, Dialog } from "@mui/material";
import { Add } from "@mui/icons-material";

const RecordHeader = ({ title, buttonTitle, buttonClick, open }) => {
  return (
    <Box pb={2}>
      <FlexBetween>
        <Typography component="p" variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <Box>
          <GlobalButton variant="contained" onClick={buttonClick}>
            <Add sx={{ mr: "5px" }} />
            {buttonTitle}
          </GlobalButton>
          <Dialog
            keepMounted
            open={open}
            maxWidth="md"
            scroll="paper">
            <Typography>I want to see you open file</Typography>
          </Dialog>
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default RecordHeader;
