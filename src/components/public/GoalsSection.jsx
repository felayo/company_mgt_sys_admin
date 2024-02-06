import { Box, Container, Grid, Stack, Typography, Paper } from "@mui/material";
import {
  RemoveRedEye,
  ConfirmationNumber,
  JoinInner,
  Policy,
  DataObject,
  SettingsApplications,
} from "@mui/icons-material";
import { styled } from "@mui/system";

export const Section = styled(Box)({
  minHeight: "55em",
  marginTop: "5em",
});

const GoalsSection = () => {
  return (
    <Section>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                "& > :not(style)": {
                  mr: 2,
                  height: 220,
                },
              }}>
              <Paper>
                <Stack spacing={2}>
                  <Box textAlign="center">
                    <RemoveRedEye color="success" sx={{ fontSize: 70 }} />
                  </Box>
                  <Typography
                    component="h2"
                    textAlign="center"
                    variant="h3"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "2em",
                      fontWeight: "bold",
                    }}>
                    Vision
                  </Typography>
                  <Typography
                    component="p"
                    textAlign="center"
                    variant="body1"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "1em",
                      paddingBottom: "1em",
                    }}>
                    Offering quality products and technologies in science and
                    industry.
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                "& > :not(style)": {
                  mr: 2,
                  height: 220,
                },
              }}>
              <Paper>
                <Stack spacing={2}>
                  <Box textAlign="center">
                    <ConfirmationNumber color="success" sx={{ fontSize: 70 }} />
                  </Box>
                  <Typography
                    component="h2"
                    textAlign="center"
                    variant="h3"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "2em",
                      fontWeight: "bold",
                    }}>
                    Mission
                  </Typography>
                  <Typography
                    component="p"
                    textAlign="center"
                    variant="body1"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "1em",
                      paddingBottom: "1em",
                    }}>
                    Providing scientific solutions.
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                "& > :not(style)": {
                  height: 220,
                },
              }}>
              <Paper>
                <Stack spacing={2}>
                  <Box textAlign="center">
                    <JoinInner color="success" sx={{ fontSize: 70 }} />
                  </Box>
                  <Typography
                    component="h2"
                    textAlign="center"
                    variant="h3"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "2em",
                      fontWeight: "bold",
                    }}>
                    Corporate Ethos
                  </Typography>
                  <Typography
                    component="p"
                    textAlign="center"
                    variant="body1"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "1em",
                      paddingBottom: "1em",
                    }}>
                    Our corporate ethos is who we are and what we do, this{" "}
                    <br />
                    ethos is captured succintly in our vision and mission
                    statements
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                "& > :not(style)": {
                  pr: 2,
                  pl: 2,
                  mr: 2,
                  height: 400,
                },
              }}>
              <Paper>
                <Stack spacing={2}>
                  <Box textAlign="center">
                    <Policy color="success" sx={{ fontSize: 70 }} />
                  </Box>
                  <Typography
                    component="h2"
                    textAlign="center"
                    variant="h3"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "2em",
                      fontWeight: "bold",
                    }}>
                    Quality Policy
                  </Typography>
                  <Typography
                    component="p"
                    textAlign="center"
                    variant="body1"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "1em",
                      paddingBottom: "1em",
                    }}>
                    WINELIGHT ANALYTICAL SYSTEMS limited is highly committed to
                    Sales/ Marketing/ Installation/ Commissioning/ training/
                    maintenance/ repairs/supply of various quality scientific
                    equipment/ Chemicals to our customer specification and
                    solutions that meet our customers satisfaction and
                    statutory regulatory requirement of ISO 9001:2015, by
                    continual improvement of our quality management system.
                    (QMS) To achieve our quality policy, we have defined,
                    established and implemented realizable quality objectives
                    that cut across every process within the organization.
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                "& > :not(style)": {
                  pr: 2,
                  pl: 2,
                  mr: 2,
                  height: 400,
                },
              }}>
              <Paper>
                <Stack spacing={2}>
                  <Box textAlign="center">
                    <DataObject color="success" sx={{ fontSize: 70 }} />
                  </Box>
                  <Typography
                    component="h2"
                    textAlign="center"
                    variant="h3"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "2em",
                      fontWeight: "bold",
                    }}>
                    Quality Objective
                  </Typography>
                  <Typography
                    component="p"
                    textAlign="center"
                    variant="body1"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "1em",
                      paddingBottom: "1em",
                    }}>
                    Establishment of a Quality Management System that meets the
                    requirements of ISO 9001:2015. To continuously monitor
                    customer`s satisfaction at least once a year. Respond to
                    customer complaints within 24hours. To implement QMS capable
                    of promoting continual improvement of our products and
                    services.
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                "& > :not(style)": {
                  pr: 2,
                  pl: 2,
                  height: 400,
                },
              }}>
              <Paper>
                <Stack spacing={2}>
                  <Box textAlign="center">
                    <SettingsApplications color="success" sx={{ fontSize: 70 }} />
                  </Box>
                  <Typography
                    component="h2"
                    textAlign="center"
                    variant="h3"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "2em",
                      fontWeight: "bold",
                    }}>
                    Application
                  </Typography>
                  <Typography
                    component="p"
                    textAlign="center"
                    variant="body1"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "1em",
                      paddingBottom: "1em",
                    }}>
                    We offer our customers factory training first hand
                    opportunities to interact and discuss with experts in the
                    field, Chemists talking to Chemists on the Chemistry
                    principle & methodology behind every analytical/Measuring
                    Instruments; through which processes & ideas are exchanged
                    and technology transferred.
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default GoalsSection;
