/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Grid,
  Box,
  CardHeader,
  Avatar,
  IconButton,
  useTheme,
  Tooltip,
} from "@mui/material";
import { AllInclusive } from "@mui/icons-material";
import { Text, Text2 } from "../styledComponents/styledComponents";
import pic from "../../assets/user.png";

const EmployeeList = ({
  firstName,
  lastName,
  position,
  avatar,
  staffId,
  phone,
  user,
  _id,
}) => {
  const image = avatar?.file;
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card width="300px" elevation={2}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ backgroundColor: theme.palette.danger.main }}
              aria-label="initial">
              {firstName[0]}
              {lastName[0]}
            </Avatar>
          }
          action={
            <Tooltip title="click to view more" placement="top-start">
              <Link to={`/dashboard/employees/${_id}`}>
                <IconButton aria-label="settings">
                  <AllInclusive />
                </IconButton>
              </Link>
            </Tooltip>
          }
          title={position}
          subheader={staffId}
        />
        <Box display="flex" justifyContent="center">
          <CardMedia
            component="img"
            height="140"
            image={image || pic}
            alt={firstName}
            sx={{ width: "35%", borderRadius: "15px" }}
          />
        </Box>
        <CardContent>
          <Stack direction="column" alignItems="center">
            <Typography variant="h5" fontWeight="bold">
              {firstName} {lastName}
            </Typography>
            <Typography>{phone}</Typography>
            <Typography>{user.email}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Text>Hire Date</Text>
            <Text>Report to</Text>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Text2>6-5-2020</Text2>
            <Text2>Mr Tobi Oduyale</Text2>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EmployeeList;
