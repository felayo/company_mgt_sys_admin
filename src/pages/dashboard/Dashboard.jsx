import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { NaturePeople } from "@mui/icons-material";

import Header from "../../components/Header";
import FlexBetween from "../../components/FlexBetween";

import { useGetEmployeeQuery } from "../../redux/features/employee/employeeApiSlice";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data } = useGetEmployeeQuery()


  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle={`Welcome ${data?.data.name}`} />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.background.alt,
              fontSize: "12px",
              fontWeight: "bold",
              padding: "5px 10px"
            }}>
            <NaturePeople sx={{ mr: "10px" }} />
            Request for Leave
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}></Box>
    </Box>
  );
};

export default Dashboard;
