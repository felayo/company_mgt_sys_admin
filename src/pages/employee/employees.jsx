import { Box } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import Header from "../../components/layout/Header";
import {
  FlexBetween,
  GlobalButton,
} from "../../components/styledComponents/styledComponents";

const Employees = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="EMPLOYEES" subtitle="Managing Winelight Employees" />
        <GlobalButton>
          <PersonAdd sx={{ mr: "10px" }} />
          Add Employee
        </GlobalButton>
      </FlexBetween>
    </Box>
  );
};

export default Employees;
