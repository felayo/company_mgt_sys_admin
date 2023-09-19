import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { DateRange, Groups, PictureInPicture } from "@mui/icons-material";
import { FlexBetween } from "../styledComponents/styledComponents";

const HomeCardComponent = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={4}>
        <Card
          sx={{
            backgroundColor: theme.palette.danger.main,
            color: theme.palette.primary.light,
          }}>
          <CardContent>
            <FlexBetween>
              <Box>
                <Typography pb={3}>Experience</Typography>
                <Typography>4 years, 9 months</Typography>
              </Box>
              <DateRange />
            </FlexBetween>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card
          sx={{
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.light,
          }}>
          <CardContent>
            <FlexBetween>
              <Box>
                <Typography pb={3}>Department</Typography>
                <Typography>4 Members</Typography>
              </Box>
              <Groups />
            </FlexBetween>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card
          sx={{
            backgroundColor: theme.palette.info.main,
            color: theme.palette.primary.light,
          }}>
          <CardContent>
            <FlexBetween>
              <Box>
                <Typography pb={3}>Rank</Typography>
                <Typography>Manager</Typography>
              </Box>
              <PictureInPicture />
            </FlexBetween>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomeCardComponent;
