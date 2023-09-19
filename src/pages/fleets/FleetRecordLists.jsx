/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  useTheme,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography
} from "@mui/material";

const FleetRecordLists = ({
  make,
  registration,
  status,
  remarks,
  user,
  dateAssign,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          fontWeight="bold"
          color={theme.palette.primary.dark}
          gutterBottom>
          {make}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          Plate Number: {registration}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          User: {user.vehicle_user}
        </Typography>
        <Typography variant="body2">remarks: {remarks}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}>
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}>
        <CardContent>
          <Typography>id: 1</Typography>
          <Typography>Status: {status}</Typography>
          <Typography>Assigned Date: {dateAssign}</Typography>
          <Typography>Registration: {registration}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default FleetRecordLists;
