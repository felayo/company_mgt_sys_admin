import { Box, Typography } from "@mui/material";
import { NaturePeople } from "@mui/icons-material";

import { useGetEmployeeProfileQuery } from "../../redux/features/employee/employeeApiSlice";
import {
  FlexBetween,
  GlobalButton,
} from "../../components/styledComponents/styledComponents";
import HomeCardComponent from "../../components/homeCards/index";
import Avatar from "../../assets/user.png";
// import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  // const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetEmployeeProfileQuery();
  // const { isManager } = useAuth()

  let employeeData = data?.data.profile;

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = (
      <Box m="1.5rem 2.5rem">
        {error?.status == 404 ? (
          <Typography color="red" fontSize={40} fontWeight="bold">
            Please inform HR to add your profile!
          </Typography>
        ) : (
          <p className="errmsg">{error?.data?.message}</p>
        )}
      </Box>
    );
  }

  if (isSuccess) {
    content = (
      <Box m="1.5rem 2.5rem">
        <FlexBetween pt={3}>
          <FlexBetween gap="1rem">
            <Box
              component="img"
              alt="Avatar"
              src={employeeData?.avatar?.file || Avatar}
              height="80px"
              width="80px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />

            <Box>
              <Typography fontWeight="bold" fontSize="1rem" pb={1}>
                {`Welcome, ${employeeData?.firstName}!`}
              </Typography>
              <Typography fontSize="0.9rem">Welcome to your portal</Typography>
            </Box>
          </FlexBetween>

          <GlobalButton variant="contained">
            <NaturePeople sx={{ mr: "10px" }} />
            Request for Leave
          </GlobalButton>
        </FlexBetween>
        <Box mt={7}>
          <HomeCardComponent />
        </Box>
      </Box>
    );
  }

  return content;
};

export default Dashboard;
