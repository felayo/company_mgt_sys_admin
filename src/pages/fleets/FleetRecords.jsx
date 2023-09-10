import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";

import Header from "../../components/Header";
import { useGetVehiclesQuery } from "../../redux/features/admin/vehiclesApiSlice";
import FleetRecordLists from "./FleetRecordLists";
import FlexBetween from "../../components/FlexBetween";

const FleetRecords = () => {
  const { data, isLoading } = useGetVehiclesQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();

  const fleetData = data?.data;

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header
          title="Fleet Records"
          subtitle="Managing company fleets record"
        />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
            <DownloadOutlined sx={{ mr: "10px" }} />
            Add Vehicle
          </Button>
        </Box>
      </FlexBetween>
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}>
          {fleetData.map(
            ({ make, registration, status, remarks, user, dateAssign }) => {
              return (
                <FleetRecordLists
                  key={registration}
                  make={make}
                  status={status}
                  registration={registration}
                  remarks={remarks}
                  user={user}
                  dateAssign={dateAssign}
                />
              );
            }
          )}
        </Box>
      ) : (
        "....Loading"
      )}
    </Box>
  );
};

export default FleetRecords;
