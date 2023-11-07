import { IconButton, Box, Tooltip, useTheme } from "@mui/material";
import { FlexBetween } from "../../components/styledComponents/styledComponents";
import { DeleteForever, PersonAddDisabled } from "@mui/icons-material";
import Header from "../../components/layout/Header";
import PostProfile from "../../components/users/postProfile";
// import { useAdminGetOneEmployeeQuery } from "../../redux/features/employee/employeeApiSlice";

const AddEmployeeProfile = () => {
  const theme = useTheme();
  
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="USERS" subtitle="Add Employee Profile for this User" />
        <FlexBetween>
          <Tooltip title="disable user" placement="top-start">
            <IconButton color="error">
              <PersonAddDisabled sx={{ fontSize: "40px" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="delete user" placement="top-start">
            <IconButton color="error">
              <DeleteForever sx={{ fontSize: "40px" }} />
            </IconButton>
          </Tooltip>
        </FlexBetween>
      </FlexBetween>

      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          borderRadius: "15px",
          width: "100%",
          padding: "50px 30px 30px 45px",
          marginTop: "20px",
        }}>
        <PostProfile  />
      </Box>
    </Box>
  );
};

export default AddEmployeeProfile;
