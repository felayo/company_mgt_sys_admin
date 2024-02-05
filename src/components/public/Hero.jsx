import { Box, Grid, Typography, Stack, Container } from "@mui/material";
import { HeroSection } from "../../components/styledComponents/styledComponents";
import MdImage from "../../assets/cheers.png";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <Box pt={10} pl={15}>
              <Stack spacing={2} mb={5}>
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "3em",
                  }}>
                  WEMS, An ERP
                </Typography>
                <Typography
                  variant="h2"
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 600,
                    fontSize: "3em",
                  }}>
                  SOLUTIONS BY
                </Typography>
                <Typography
                  variant="h3"
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "2em",
                    lineHeight: "1.5",
                  }}>
                  WINELIGHT IT TEAMS, LED BY AYORINDE.
                </Typography>
              </Stack>
              <Box
                pt={5}
                pl={5}
                pb={4}
                style={{ backgroundColor: "#fff", marginRight: "7em" }}>
                <Typography
                  pb={2}
                  style={{ fontFamily: "Roboto", fontWeight: 500 }}>
                  What is WEMS?
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Roboto", fontWeight: 500 }}
                  lineHeight={3}
                  paragraph>
                  To provide convenience services through the use of friendlier
                  technology, which makes contact with the company easier, and
                  access to important information by the employees better.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box pr={15} pt={10} alt="logo" src={MdImage} component="img" />
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
